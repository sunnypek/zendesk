import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { response } from 'express';
import { catchError, map, Observable } from 'rxjs';
import { Ticket } from './model/ticket.model';
import { TicketCount } from './model/ticketCount.model';
import { ZendeskReponse } from './model/zendeskResponse.model';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  private encodedToken: string = Buffer.from(
    process.env.EMAIL + ':' + process.env.PASS,
  ).toString('base64');

  getTickets(): Observable<Ticket[]> {
    return this.httpService
      .get<ZendeskReponse>(process.env.APIURL, {
        headers: { Authorization: 'Basic ' + this.encodedToken },
      })
      .pipe(
        map((response) => response.data.tickets),
        catchError((error: HttpException) => {
          // log error somewhere
          // console.log('server error\n', error);
          throw new HttpException(
            'API not reachable',
            HttpStatus.SERVICE_UNAVAILABLE,
          );
        }),
      );
  }

  getTicket(id: string): Observable<Ticket> {
    return this.httpService
      .get<Ticket>(process.env.APIURL + '/' + id, {
        headers: { Authorization: 'Basic ' + this.encodedToken },
      })
      .pipe(
        map((response) => response.data),
        catchError((error: HttpException) => {
          // log error somewhere
          // console.log('server error\n', error);
          throw new HttpException(
            'API not reachable',
            HttpStatus.SERVICE_UNAVAILABLE,
          );
        }),
      );
  }

  getTicketsCount(): Observable<TicketCount> {
    return this.httpService
      .get<TicketCount>(process.env.APIURL + '/count', {
        headers: { Authorization: 'Basic ' + this.encodedToken },
      })
      .pipe(
        map((response) => response.data),
        catchError((error: HttpException) => {
          // log error somewhere
          // console.log('server error\n', error);
          throw new HttpException(
            'API not reachable',
            HttpStatus.SERVICE_UNAVAILABLE,
          );
        }),
      );
  }
}
