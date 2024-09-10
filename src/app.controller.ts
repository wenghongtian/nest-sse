import { All, Controller, Post, Req, Sse } from '@nestjs/common';
import { Request } from 'express';
import { Observable, interval, map } from 'rxjs';

@Controller('/workflow')
export class WorkflowController {
  @Post('sse/*')
  @Sse()
  sse(@Req() req: Request): Observable<any> {
    console.log('?????');
    req.on('close', () => {
      console.log('request closed');
    });
    return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
  }
}
