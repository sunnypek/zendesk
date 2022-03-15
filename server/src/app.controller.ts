import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Ticket } from './model/ticket.model';
import { TicketCount } from './model/ticketCount.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTickets(): Observable<Ticket[]> {
    return this.appService.getTickets();
  }

  @Get(':id')
  getTicket(@Param('id') id: string): Observable<Ticket> {
    return this.appService.getTicket(id);
  }

  @Get('count')
  getTicketsCount(): Observable<TicketCount> {
    return this.appService.getTicketsCount();
  }
}
