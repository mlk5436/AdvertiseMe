//our root app component
import {Component, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <div id="particles-js"></div>
    </div>
  `,
})
export class AppComponent{
  name:string;
  constructor() {
    this.name = `Angular! v${VERSION.full}`
  }

}
