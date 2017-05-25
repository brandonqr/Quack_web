import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenDefault'
})
export class ImagenDefaultPipe implements PipeTransform {

  transform( value: any ): string {
    let imgDefault:string ="assets/img/imageDefault.png";
   if( !value ){
     return imgDefault;
   }
   return ( value.length > 0 ) ? value: imgDefault;
  }

}
