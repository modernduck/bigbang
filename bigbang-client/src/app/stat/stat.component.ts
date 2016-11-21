import { Component, OnInit } from '@angular/core';
import { BigbangPackage, BusPackage, JackAndJill, AdditionalWorkshop } from "../config/enum"
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  users:any;
  leadCount:Number;
  followCount:Number;
  packages:Array<any>;
  package_names:Array<string>
  sumPackage:number;

  bus_packages:Array<any>;
  bus_package_names:Array<string>;
  
  jack_jill_names:Array<string>;
  jack_jills:Array<any>;

  workshops:Array<any>;
  workshop_names:Array<string>;

  constructor(private af:AngularFire){
    this.package_names = BigbangPackage.PACKAGE_NAMES;
    this.bus_package_names = BusPackage.PACKAGE_NAMES;
    this.jack_jill_names = JackAndJill.PACKAGE_NAMES;
    this.workshop_names = AdditionalWorkshop.PACKAGE_NAMES;
  }

  transform(data){
    //reset data
    this.users = data;
    this.packages = [];
    this.bus_packages = [];
    this.jack_jills = [];
    this.workshops = [];
    this.sumPackage = 0;
    //give em each data
    console.log(this.users)
    let items = this.users.filter( item =>{
      
      return item.is_lead;
    } )
    this.leadCount = items.length;
    this.followCount = this.users.length - Number(this.leadCount);

    this.users.forEach( item => {
      
      let package_key = BigbangPackage.find(item.payment.Package)
      //console.log('package_key : ' + package_key)
      if( typeof this.packages[package_key] == "object")
      {
        if(item.is_lead)
          this.packages[package_key].lead++
        else
          this.packages[package_key].follow++;
      }else{
        this.packages[package_key] = {lead:0, follow:0}
        if(item.is_lead)
          this.packages[package_key].lead = 1;
        else
          this.packages[package_key].follow = 1;
      }

      this.sumPackage = this.sumPackage + 1;
      // bus stuff
      let bus_package_key = BusPackage.find(item.payment.BusBooking)
      if(bus_package_key != -1)
        if(typeof this.bus_packages[bus_package_key] == "number"){
         
            this.bus_packages[bus_package_key]++;
        }else {
            this.bus_packages[bus_package_key] = 1;
        }
      //jack and jill
      let jack_jill_key = JackAndJill.find(item.payment.JackAndJill);
      if(jack_jill_key != -1){
        if(typeof this.jack_jills[jack_jill_key] == "number")
          this.jack_jills[jack_jill_key]++;
        else
          this.jack_jills[jack_jill_key ] = 1;
      }
/*
      //addition workshop
      let workshop_key = AdditionalWorkshop.find(item.payment.AdditionalWorkshop);
      if(workshop_key != -1){
        if(typeof this.workshops[workshop_key] == "number")
          this.workshops[workshop_key]++;
        else
          this.workshops[workshop_key ] = 1;
      }*/
      

    })

    

  }

  ngOnInit(){
    this.af.database.list('users').subscribe( data => {
      this.transform(data)
    })
  }

}

