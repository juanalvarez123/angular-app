import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first app';

  warningTitle = "Warning !";
  warningMessage = 'This is a warning message';
  warningClass = 'alert-warning';

  successTitle = "Success !";
  successMessage = 'This is a success message';
  successClass = 'alert-success'
}
