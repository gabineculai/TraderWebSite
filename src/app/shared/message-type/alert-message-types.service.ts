import { Injectable } from '@angular/core';
import { AlertMessageTypePrimary } from './alert-message-type-primary';
import { AlertMessageTypeDanger } from './alert-message-type-danger';
import { AlertMessageTypeDark } from './alert-message-type-dark';
import { AlertMessageTypeInfo } from './alert-message-type-info';
import { AlertMessageTypeLight } from './alert-message-type-light';
import { AlertMessageTypeSecondary } from './alert-message-type-secondary';
import { AlertMessageTypeSuccess } from './alert-message-type-success';
import { AlertMessageTypeWarning } from './alert-message-type-warning';


@Injectable({
  providedIn: 'root'
})
export class AlertMessageTypesService {
  private mesageTypes = [
    new AlertMessageTypePrimary().class,
    new AlertMessageTypeDanger().class,
    new AlertMessageTypeDark().class,
    new AlertMessageTypeInfo().class,
    new AlertMessageTypeLight().class,
    new AlertMessageTypePrimary().class,
    new AlertMessageTypeSecondary().class,
    new AlertMessageTypeSuccess().class,
    new AlertMessageTypeWarning().class,
  ];

  private get DefaultMessageType()
  {
    return new AlertMessageTypePrimary().class;
  }

  public get MessageTypePrimary()
  {
    return new AlertMessageTypePrimary().class;
  }

  public get MessageTypeDanger()
  {
    return new AlertMessageTypeDanger().class;
  }

  public get MessageTypeDark()
  {
    return new AlertMessageTypeDark().class;
  }

  public get MessageTypeInfo()
  {
    return new AlertMessageTypeInfo().class;
  }

  public get MessageTypeLight()
  {
    return new AlertMessageTypeLight().class;
  }

  public get MessageTypeSecondary()
  {
    return new AlertMessageTypeSecondary().class;
  }

  public get MessageTypeSuccess()
  {
    return new AlertMessageTypeSuccess().class;
  }

  public get MessageTypeWarning()
  {
    return new AlertMessageTypeWarning().class;
  }

  public MessageType(messageType: string)
  {
    return (this.mesageTypes.indexOf(messageType) >= 0)
      ? messageType
      : this.DefaultMessageType;
  }

  constructor() { }
}
