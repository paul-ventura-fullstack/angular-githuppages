import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

        dateTime:Date | undefined;
        time = new Date();
        rxTime = new Date();
        intervalId: any;
        
        constructor() { }

        ngOnInit(): void {
                this.dateTime = new Date();

                this.intervalId = setInterval(() => {
                        this.time = new Date();
                      }, 1000);
        }

}
