import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'videoFilter'
})

export class VideofilterPipe implements PipeTransform {

  transform(videoList: any[] , searchItem: string): any[] {
    if (!videoList || !searchItem) {
      return videoList;
    }
    

    const result = [];

    for ( const video of videoList ) {
      // console.log('Llegó: ', video.snippet);
        if ( video.snippet.description.indexOf(searchItem) > -1 ) {
          result.push(video);
        }
    }

    return result;

    
  }

}
