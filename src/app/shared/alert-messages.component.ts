import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { Message } from './message';
import { AlertMessageComponent } from './alert-message.component';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-alert-messages',
  templateUrl: './alert-messages.component.html',
  styleUrls: ['./alert-messages.component.css']
})
export class AlertMessagesComponent implements OnInit {
  private messages: Message[];

  public get Messages() : Message[]
  {
    return this.messages;    
  }

  @Input() public set Messages(value:Message[]) {
    this.messages = value;    
  }


  constructor() { environment.production }

  ngOnInit() {

  }

  public Clear() : void
  {
    this.messages = [];
  }

  public Add(message: Message) : void
  {
    this.messages.push(message);
  }

}
