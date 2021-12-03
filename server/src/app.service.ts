import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';
import { Ticket } from './model/ticket.model';
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
        catchError(() => {
          throw new HttpException(
            'API not reachable',
            HttpStatus.SERVICE_UNAVAILABLE,
          );
        }),
      );
  }
}
