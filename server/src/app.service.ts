import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEncodedToken(): string {
    return Buffer.from(process.env.EMAIL + ':' + process.env.PASS).toString(
      'base64',
    );
  }
}
