import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {

  log(name: string, action: string) {
    console.log(name + ' pass to ' + action);
  }
}
