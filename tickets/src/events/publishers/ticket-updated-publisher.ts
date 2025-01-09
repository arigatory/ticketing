import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@arigatory-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
  
}
