import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-ccb1';

  qrResultString  ?: string

  clearResult():void{
    this.qrResultString = '';
  }

  onCodeResult(resultString : string) {
    this.qrResultString = resultString
  }

}
