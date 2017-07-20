import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<p>Hello {{name}}<{{email}}></p>
<p>
<strong>Address:</strong>
{{address.line1}}<br>
{{address.line2}}<br>
{{address.line3}}
</p>
  `,
}
}
})
export class UserComponent  { 
    name = 'Angular'; 
    email = 'Angular@email.com'; 
    address={
        line1:'line1 address',
        line2:'line2 address',
        line3:'line3 address'
    }
}
