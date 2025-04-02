import {
  Listener,
  OrderCancelledEvent,
  Subjects,
} from '@arigatory-tickets/common';
import { Message } from 'node-nats-streaming';
import { queueGroupName } from './queue-group-name';

export class OrderCreatedListener extends Listener<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
  queueGroupName = queueGroupName;
  onMessage(data: OrderCancelledEvent['data'], msg: Message) {
    throw new Error('Method not implemented.');
  }
}
