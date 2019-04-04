import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first app';

  warningTitle = 'Warning !';
  warningMessage = 'This is a warning message';
  warningClass = 'alert-warning';

  successTitle = 'Success !';
  successMessage = 'This is a success message';
  successClass = 'alert-success';

  loadedFeature = 'recipe';

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  private oddNumbers: number[] = [];
  private evenNumbers: number[] = [];

  addSequence(sequence: number) {
    if (sequence % 2 === 0) {
      this.oddNumbers.push(sequence);
    } else {
      this.evenNumbers.push(sequence);
    }
  }

  onResetGame() {
    this.oddNumbers = [];
    this.evenNumbers = [];
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
