import {Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit,OnChanges {

  @Input() apptitle:string;

  apptitlegiven : string;
  constructor() {
    this.apptitlegiven = "first title";
    console.log(this.apptitlegiven);
  }

  ngOnChanges() : void{
    console.log(this.apptitle);
  }
  ngOnInit() {
    console.log('Second');
  }

}
