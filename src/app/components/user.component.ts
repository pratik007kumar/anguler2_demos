import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1> {{title}}</h1>
  <p>Hello {{name}}<{{email}}></p>
  <p><strong>Address:</strong>
    {{address.line1}}<br>
    {{address.line2}}<br>
    {{address.line3}}
  </p>`
})

export class UserComponent  { 
    title = 'user Component'; 
    name = 'Anguler'; 
    email = 'Angular@email.com'; 
    address={
        line1:'line1 address',
        line2:'line2 address',
        line3:'line3 address'
    }
}
