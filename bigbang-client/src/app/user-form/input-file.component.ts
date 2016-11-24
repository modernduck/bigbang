import { Component, OnInit, Renderer, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-file',
  template: '<input id="fileinput" type="file"  name="file" />',
  styleUrls: ['./user-form.component.css']
})
export class InputFileComponent implements OnInit {

    @Output()
    onChange = new EventEmitter();

  constructor(element:ElementRef, renderer: Renderer) {
       
       renderer.listen(element.nativeElement, 'change', (event) => {
      // Do something with 'event'
        this.onChange.emit(event)
    })
      
  }

  

  ngOnInit() {
    
   // document.getElementById('fileinput').addEventListener('change', this.readSingleFile, false);
    
  }

}
