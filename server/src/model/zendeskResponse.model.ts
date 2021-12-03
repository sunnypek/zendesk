import { Ticket } from './ticket.model';

export class ZendeskReponse {
  tickets: Ticket[];
  next_page: string;
  previous_page: string;
  count: number;
}
