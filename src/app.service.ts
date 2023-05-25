import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const date = "Date of today 21, May, 2023";
    return date;
  }
}
