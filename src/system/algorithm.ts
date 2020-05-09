import { Message } from '../models/model';

export interface Algorithm {
	handle(message: Message): boolean;
}