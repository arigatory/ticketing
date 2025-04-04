import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@arigatory-tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
