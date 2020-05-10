import { IMessage } from "../models/model";

export interface Algorithm {
  handle(message: IMessage): boolean;
}
