import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@arigatory-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  
}
