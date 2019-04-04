import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { }

  setToInactive(id: number) {
    this.counterService.log(this.activeUsers[id], 'INACTIVE');

    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  setToActive(id: number) {
    this.counterService.log(this.inactiveUsers[id], 'ACTIVE');

    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
