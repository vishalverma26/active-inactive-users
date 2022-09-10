import { EventEmitter, Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private counter: CounterService){}

  activeUsers: string[] = [
    'Vishal'
  ];

  inactiveUsers: string[] = [
    'Karan',
    'Himanshu'
  ];

  setToActive(index: number) {
    // this.activeUsers.push(this.inactiveUsers[index]);
    this.activeUsers.splice(index, 0, this.inactiveUsers[index]);
    this.inactiveUsers.splice(index, 1);
    this.counter.incrementedToActive();
  }

  setToInactive(index: any) {
    // this.inactiveUsers.push(this.activeUsers[index]);
    this.inactiveUsers.splice(index, 0 ,this.activeUsers[index]);
    this.activeUsers.splice(index, 1);
    this.counter.increamentedToInactive();
  }
}
