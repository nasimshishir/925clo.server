import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const date = new Date();
    return {
      date,
      status: "App is running on port : 8000"
    }
  }
}
