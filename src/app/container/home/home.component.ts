import { Component, OnInit, Input } from '@angular/core';
import { LANG } from '../../theme/pt'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Array<any> = []

  public lang = LANG

  constructor() {
    this.items = [
      { name: '../../../assets/media/imgm/ate-min.png' },
      { name: '../../../assets/media/imgm/axios-min.png' },
      { name: '../../../assets/media/imgm/bfx-min.png' },
      { name: '../../../assets/media/imgm/boch-min.png' },
      { name: '../../../assets/media/imgm/Brosol-min.png' },
      { name: '../../../assets/media/imgm/cartego-min.png' },
      { name: '../../../assets/media/imgm/cofap-min.png' },
      { name: '../../../assets/media/imgm/continental-min.png' },
      { name: '../../../assets/media/imgm/controil-min.png' },
      { name: '../../../assets/media/imgm/cral-min.png' },
      { name: '../../../assets/media/imgm/fabrini-min.png' },
      { name: '../../../assets/media/imgm/frasle-min.png' },
      { name: '../../../assets/media/imgm/fte-min.png' },
      { name: '../../../assets/media/imgm/gates-min.png' },
      { name: '../../../assets/media/imgm/havoline-min.png' },
      { name: '../../../assets/media/imgm/heliar-min.png' },
      { name: '../../../assets/media/imgm/hieprfreios-min.png' },
      { name: '../../../assets/media/imgm/ima-min.png' },
      { name: '../../../assets/media/imgm/indisa-min.png' },
      { name: '../../../assets/media/imgm/ipiranga-min.png' },
      { name: '../../../assets/media/imgm/logo-nakata-min.png' },
      { name: '../../../assets/media/imgm/logoa-min.png' },
      { name: '../../../assets/media/imgm/lubrax-min.png' },
      { name: '../../../assets/media/imgm/luk-min.png' },
      { name: '../../../assets/media/imgm/magneti-min.png' },
      { name: '../../../assets/media/imgm/metalleve-min.png' },
      { name: '../../../assets/media/imgm/monroe-min.png' },
      { name: '../../../assets/media/imgm/moura-min.png' },
      { name: '../../../assets/media/imgm/nkg-min.png' },
      { name: '../../../assets/media/imgm/nytron-min.png' },
      { name: '../../../assets/media/imgm/petronas-min.png' },
      { name: '../../../assets/media/imgm/sabo-min.png' },
      { name: '../../../assets/media/imgm/sachs-min.png' },
      { name: '../../../assets/media/imgm/sampel-min.png' },
      { name: '../../../assets/media/imgm/schadek-min.png' },
      { name: '../../../assets/media/imgm/skf-min.png' },
      { name: '../../../assets/media/imgm/taranto-min.png' },
      { name: '../../../assets/media/imgm/tecfil-min.png' },
      { name: '../../../assets/media/imgm/trw-min.png' },
      { name: '../../../assets/media/imgm/valeo-min.png' },
      { name: '../../../assets/media/imgm/visconde-min.png' },

    ]

  }

  ngOnInit() {
  }
  slideConfig = {
    "slidesToShow": 8,
    "slidesToScroll": 2,
    "arrows": false,
    "autoplay": true,
    "autoplaySpeed": 600,


  };
  
  slideConfigM = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "arrows": false,
    "autoplay": false,
    "autoplaySpeed": 600,


  };

  // getUrl()
  // {
  //   return `url('${this.items.name}')`;
  // }
  imgCarousel1()
  {
    return "url('../../../assets/media/image2.png')";

  }
  imgCarousel2()
  {
    return "url('../../../assets/media/img-carousel1w.png')";

  }
  imgCarousel3()
  {
    return "url('../../../assets/media/image3.png')";
  }
}
