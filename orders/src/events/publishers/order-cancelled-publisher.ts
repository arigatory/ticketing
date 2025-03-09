import { Publisher, OrderCancelledEvent, Subjects } from "@arigatory-tickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
    
}