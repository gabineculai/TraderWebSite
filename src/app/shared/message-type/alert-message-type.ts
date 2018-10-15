import { AlertMessageTypeInterface } from './alert-message-type-interface';

export abstract class AlertMessageType implements AlertMessageTypeInterface {
    abstract classSufix: string;
    classPrefix: string = "alert alert-";

    public get class(): string {
        return this.classPrefix + this.classSufix;
    }
}
