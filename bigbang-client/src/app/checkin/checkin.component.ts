import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {
  q:any;
  old_q:any;
  _allusers:Array<any>
  users:Array<any>
  constructor(private af:AngularFire) { 
    this.users = [];
    this._allusers = [];
  }

  replaceAll(target:string, search, replacement) {
    var answer =  target.replace(search, replacement);
    if(answer.indexOf(search) > -1)
      return this.replaceAll(answer, search, replacement);
    return answer

};

  encodeKey(s:string) { 
    return encodeURI( this.replaceAll(encodeURIComponent(s), '.', '%2E')); 
  }

  ngOnInit() {
    this.af.database.list('users').subscribe( data => {
      this.updateAllUser(data);  
    })
  }

  updateAllUser(data) {
      this._allusers = data;
      this.updateDisplay(this.old_q);
  }

  updateDisplay(q){
    this.users = this._allusers.filter( item => {
      if(q == "lead" && item.is_lead)
        return true;
      else if(q == "follow" && item.is_lead == false)
        return true;


      if(String(item.first_name).match(q) || String(item.last_name).match(q) || String(item.email).match(q))
          return true;
//          if(item.first_name.match(this.q) || item.lastname.match(this.q) || item.email.match(this.q)  )
      
  })
  }

  checkin(item){
    
    let old_checkin = false;
    if(item.checkin == true)
      old_checkin = true;
    let new_checkin = !old_checkin
    item.checkin = new_checkin    
    this.af.database.object('users/' + this.encodeKey(item.email)).update({
      checkin:new_checkin
    })
  }



  onPress($event){
    if($event.keyCode == 13){
      this.old_q = this.q;
        this.updateDisplay(this.q);


    }
  }
  


}
