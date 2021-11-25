import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
        title = 'ng-carousel-demo';
        images = [
                {title: 'Watching inside the sea for a moment', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500"},
                {title: 'Adele goes on holiday for undisclosed reasons', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500"},
                {title: 'Environment issues strongly related to global warming', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500"}
              ];
  constructor(config: NgbCarouselConfig) {
        config.interval = 4000;
        config.keyboard = true;
        config.pauseOnHover = true;
   }

  ngOnInit(): void {
  }

}
