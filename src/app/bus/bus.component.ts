import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BusService } from '../bus.service';
import { images } from './images';


@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  allBuses: any[] = []
  line1Bus: any[] = []
  line2Bus: any[] = []
  filterBus: any[] = []
  searchValue: any = ''
  images: any = images

  @ViewChild('line1') oneline!: ElementRef
  @ViewChild('line2') twoline!: ElementRef
  @ViewChild('error') berror!: ElementRef


  constructor(private busservice: BusService) { }


  ngOnInit(): void {

    //  ***All Buses***
    this.busservice.getData().subscribe(data => {
      this.allBuses = data
    })

    //  ***Line 1 Buses***
    this.busservice.getData().subscribe(data => {
      this.line1Bus = data.filter(d => {
        return d.LineName.includes('Line 1')
      })
    })
  
     //  ***Line 2 Buses***
    this.busservice.getData().subscribe(data => {
      this.line2Bus = data.filter(d => {
        return d.LineName.includes('Line 2')
      })
    })
  }

    //  ***Search Bus by BusModel***
   search() {
    if (this.searchValue.trim() === '') {
      return
    }  
    this.filterBus = this.allBuses.filter(f => {
         return f.BusModel.toLowerCase().includes(this.searchValue.toLowerCase().trim())
    })
    if(this.filterBus.length > 0){
      this.oneline.nativeElement.style.display='none';
      this.twoline.nativeElement.style.display='none';
    }
  }


 
}

