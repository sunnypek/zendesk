import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { Ticket } from './model/ticket.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTickets(): Observable<Ticket[]> {
    return this.appService.getTickets();
  }
}
