import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1> {{title}}</h1>
  <p>Hello {{name}}<{{email}}></p>
  <p><strong>Address:</strong>
    {{address.line1}}<br>
    {{address.line2}}<br>
    {{address.line3}}
  </p>
  <button (click)="toggleHobbies()"> {{showhobby ? "Hide":"Show" }} Hobbies</button>
  <div *ngIf="showhobby">
  <p><strong>Hobbies:</strong></p>
  <ul>
    <li *ngFor="let hobby of hobbies; let i=index">
    {{hobby}} <button type="button" (click)="deleteHobby(i)">X</button>
    </li>
  </ul>
  <p><strong>Hobbies:</strong>
   {{hobbies}}
   </p>
   <form (submit)="addHobby(hobby.value)">
  <label> Add Hobbies </label> <br />  
  <input type="text" name="hobby" #hobby  /><br> 
  </form>
  <br>
  <br>
  <hr>
  </div>
  <form>
  <label> Name </label> <br />  
  <input type="text" name="name" [(ngModel)]="name" /><br>
  <label> Email </label> <br />  
  <input type="text" name="email" [(ngModel)]="email" /><br>
  <label> Address </label> <br />  
  <input type="text" name="address[]" [(ngModel)]="address.line1" /><br>
  <input type="text" name="address[]" [(ngModel)]="address.line2" /><br>
  <input type="text" name="address[]" [(ngModel)]="address.line3" /><br>
  </form>
  `
})
// 
export class UserComponent  { 
    title:string;
    name:string;
    email:string;
    address:address;
    hobbies:string[]; 
    showhobby:boolean; 

     constructor(){
      this.title = 'user Component'; 
      this.name = 'Anguler'; 
      this.email = 'Angular@email.com'; 
      this.address={
          line1:'line1 address',
          line2:'line2 address',
          line3:'line3 address'
      }   
      this.hobbies=['hooby1','hooby2','hooby3']
      this.showhobby=false;
     }
     toggleHobbies(){
       if(this.showhobby==true){
         this.showhobby=false;
       }else{
         this.showhobby=true;
       }
     }
     addHobby(hobby){
       
       this.hobbies.push(hobby);

     }
     deleteHobby(i){
       // console.log(i);
       this.hobbies.splice(i,1);
     }
}

interface address{
  line1:string,
  line2:string,
  line3:string,
}
