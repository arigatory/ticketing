import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from '@arigatory-tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
