import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { AlertMessageTypesService } from '../shared/message-type/alert-message-types.service';
import { Message } from './message';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {
  @Input() message: Message = new Message();

  get Message() : Message { 
    return this.message;    
  }

  @Input() set Message(value:Message) {
    this.message = value;    
  }

  get MessageType() : string {
    return this.alertMessageTypesService.MessageType(this.message.type);    
  }

  constructor(private alertMessageTypesService: AlertMessageTypesService) { 

  }

  get Display() : boolean
  {
    return this.message.content && this.message.content != "";
  }

  ngOnInit() {
  }

}
