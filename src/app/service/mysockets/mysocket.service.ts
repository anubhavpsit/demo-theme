import { Injectable } from '@angular/core';
//import { Socket } from 'ng-socket-io';

import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

const SERVER_URL = 'http://localhost:3001';

@Injectable()
export class MysocketService {

  // Our socket connection
  private socket;

  public initSocket(): void {
      this.socket = socketIo(SERVER_URL);
  }

  public send(message): void {
      this.socket.emit('message', message);
  }

  public onMessage(): Observable<any> {
      return new Observable<any>(observer => {
          this.socket.on('message', (data) => observer.next(data));
      });
  }

  public onEvent(event): Observable<any> {
      return new Observable<any>(observer => {
          this.socket.on(event, () => observer.next());
      });
  }

  public subscribeChannel(ChannelName, EnventName): Observable<any> {
      return new Observable<any>(observer => {
          //this.socket.on(event, () => observer.next());
          this.socket.emit('subscribe', {
              channel: ChannelName
          }).on(EnventName, (channel, data) => observer.next(data));
      });
  }
}
