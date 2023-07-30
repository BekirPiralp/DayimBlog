import { Component } from '@angular/core';
import { LoginService } from 'src/services/loginServices/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[LoginService]
})
export class AppComponent {
  title = 'DayimBlog';
}
