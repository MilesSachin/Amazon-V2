import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Swiper } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
  
}
