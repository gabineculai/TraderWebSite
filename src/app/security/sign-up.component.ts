import { Component, Input, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertMessageTypesService } from '../shared/message-type/alert-message-types.service';
import { Message } from '../shared/message';
import { ReCaptcha2Component } from '../../projects/ngx-captcha-lib/src/public_api';
import { PasswordCheckService, PasswordCheckStrength } from './services/password-check/password-check.service';
import { environment } from '../../environments/environment';
import { SecurityService } from './security.service';
import { UserRegister } from './model/user-register';
import { UserRegisterResponse } from './model/user-register-response';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, AfterViewInit {
  public userForSignUp: UserRegister = new UserRegister();
  public message: string = "";
  public messages: Message[];
  public passwordRe: string; 
  public registationSucesfull: boolean = false;

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  // public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio';



  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  @ViewChild('email') email: ElementRef;
  public aFormGroup: FormGroup;

  

  public readonly siteKey: string = environment.captchaSiteKey; 

  public get canSubmit() : boolean
  {
    return this.captchaSuccess && !this.captchaIsExpired;
  }

  constructor(private alertMessageTypesService: AlertMessageTypesService, private securityService: SecurityService, private cdr: ChangeDetectorRef, private formBuilder: FormBuilder, private passwordCheckService: PasswordCheckService) { }

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    
  }

  public OnSubmit() : void
  {
    this.messages = [];
    if(!this.ValidateEmail || !this.ValidatePassword)
    {
      return;
    }


    this.securityService.Register(this.userForSignUp)
      .subscribe(resp => {

        this.messages = [];
        
        if (resp.Registered)
        {
          this.messages.push({ content: resp.Message, type: this.alertMessageTypesService.MessageTypeWarning});
          this.reloadAll();
          this.registationSucesfull = true;
        }
        else
        {
          this.messages.push({ content: resp.Message, type: this.alertMessageTypesService.MessageTypeSuccess});
        }
      }, (errorReponse: HttpErrorResponse) => {
        this.messages = [];
        this.messages.push({ content: (<UserRegisterResponse>errorReponse.error).Message, type: this.alertMessageTypesService.MessageTypeSuccess});
      });
  }


  private get ValidateEmail() : boolean
  {
    // this.userForSignUp.email = this.email.nativeElement.value;
    var hasValue = this.userForSignUp.UserEmail && this.userForSignUp.UserEmail != "";
  
    if (!hasValue)
      this.messages.push({ content: "Please spcify an email!", type: this.alertMessageTypesService.MessageTypeWarning});

    return hasValue;
  }

  private get ValidatePassword() : boolean
  {
    var hasValue = this.userForSignUp.UserPassword && this.userForSignUp.UserPassword != "";

    if (!hasValue)
      this.messages.push({ content: "Please specify a password!", type: this.alertMessageTypesService.MessageTypeWarning});

    var reCheck = this.userForSignUp.UserPassword === this.passwordRe;

    if (hasValue && !reCheck)
      this.messages.push({ content: "Please verify the password!", type: this.alertMessageTypesService.MessageTypeWarning});

    var strength = this.passwordCheckService.checkPasswordStrength(this.userForSignUp.UserPassword);
    if (hasValue && reCheck && strength != PasswordCheckStrength.Strong)
      this.messages.push({ content: 
`Password needs to have atleast:
<ul>
  <li>8 characters</li>
  <li>one uppercase</li>
  <li>one lowercase</li>
  <li>one digit</li>
  <li>one special character</li>
</ul>`, type: this.alertMessageTypesService.MessageTypeWarning});

    return hasValue && reCheck;
  }

  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    //this.captchaResponse = captchaResponse;
    this.userForSignUp.CaptchaResponse = captchaResponse;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }

  handleLoad(): void {
    this.captchaIsLoaded = true;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }

  handleExpire(): void {
    this.captchaSuccess = false;
    this.captchaIsExpired = true;
    this.cdr.detectChanges();
  }

  reset(): void {
    this.captchaElem.resetCaptcha();
  }

  reload(): void {
    this.captchaElem.reloadCaptcha();
  }

  reloadAll(): void {
    this.reload();
    this.captchaIsLoaded = false;
    this.captchaSuccess = false;
    this.captchaIsExpired = false;    
    this.userForSignUp = new UserRegister();
    this.passwordRe = "";
  }
}
