import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-gamme',
  templateUrl: './home-gamme.component.html',
  styleUrls: ['./home-gamme.component.css']
})
export class HomeGammeComponent implements OnInit {
  private card: any

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  lirePlus(event: any) {
    if (event == "magasin") {
      this.router.navigateByUrl("magasin")
    } else if (event == "event")
      this.router.navigateByUrl("events")
    else if (event == 'renovation') this.router.navigateByUrl("renovation")
  }


}
