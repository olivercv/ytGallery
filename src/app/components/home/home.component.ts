import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { YoutubeService } from 'src/app/services/youtube.service';
// import { $ } from 'protractor';

declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  misVideos: any[] = [];
  videoId: string;
  // searchTerm: string;
  searchTerm = null;
  subcription: Subscription;

  constructor(private _youtube: YoutubeService) {
    this.subcription = this._youtube.obtenerVideos().subscribe((resp: any) => {
      console.log(resp);
      this.misVideos = resp.items;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
  detalleVideo(detalle: string) {
    console.log(detalle);
    this.videoId = detalle;
    $('#exampleModal').modal();
  }

  cerrarModal() {
    this.videoId = null;
    $('#exampleModal').modal('hide');
  }
}
