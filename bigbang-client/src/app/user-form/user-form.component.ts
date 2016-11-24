import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  
  constructor(private af:AngularFire ) { 
    
      
  }

replaceAll(target:string, search, replacement) {
    var answer =  target.replace(search, replacement);
    if(answer.indexOf(search) > -1)
      return this.replaceAll(answer, search, replacement);
    return answer

};

  encodeKey(s:string) { 
    return this.replaceAll(encodeURIComponent(s), '.', '%2E'); 
  }

  ngOnInit() {
    console.log('init yo');
   // document.getElementById('fileinput').addEventListener('change', this.readSingleFile, false);
    
  }

  readCSV(lines:Array<any>){
    
    //console.log(lines);
    lines.forEach(item => {
      console.log(item)
      let ppl:any = {};
      ppl.email = item[3];
      ppl.first_name = item[1];
      ppl.last_name = item[2];
      ppl.phone = item[4]
      if(item[5] == "Leader")
        ppl.is_lead = true;
      else
        ppl.is_lead = false;
      ppl.diet = item[6];
      ppl.payment = {};
      ppl.payment.Package = item[7];
      ppl.payment.JackAndJill = item[10]

      ppl.payment.BusBooking = item[12]
      ppl.payment.AdditionalWorkshop = item[14];
      console.log(ppl);
      let key = this.encodeKey(ppl.email);
      console.log('key : ' + key)
      console.log('users/' + key)
      
      this.af.database.object(encodeURI("users/" + key)).set(ppl);
    })
    //console.log(lines[0][3]);
    //console.log(lines[0][3]);
  }



  extractData(csvData) {

    //let csvData = res['_body'] || '';
    let allTextLines = csvData.split(/\r\n|\n/);
    console.log(allTextLines)
    let headers = allTextLines[0].split(',');
    let lines = [];
    //remove header so start at 1
    for ( let i = 1; i < allTextLines.length; i++) {
        // split content based on comma
        let data = allTextLines[i].split(',');
        let tarr = [];
        for ( let j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
        }
        lines.push(tarr);
        
    }
    return lines;
  }

    onChange(evt) {
      console.log('read file')
      //Retrieve the first (and only!) File from the FileList object
      var f = evt.target.files[0]; 
      let r = new FileReader();;
     
      if (f) {
        
        
        let p = new Promise<any>( (resolve, reject) => {
            r.onload = (e:any) => { 
              var contents = e.target.result;
              alert( "Got the file.n" 
                    +"name: " + f.name + "n"
                    +"type: " + f.type + "n"
                    +"size: " + f.size + " bytesn"
                    + "starts with: " + contents.substr(1, contents.indexOf("n"))
              );  
           //   console.log(contents)
              resolve(contents)
            }
            r.readAsText(f);
        } ) 
        p.then( csvData => {
          //console.log(csvData);
          //console.log(this.extractData(csvData));
          this.readCSV(this.extractData(csvData));
          
        })
      } else { 
        alert("Failed to load file");
        
      }
    }

}
