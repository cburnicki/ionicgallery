import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imageUrl: any;

  constructor() {}

  async openGallery() {
    const image = await Camera.getPhoto({
      source: CameraSource.Photos,
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.imageUrl = image.webPath;
    console.log('IMAGE URL', this.imageUrl);

    // Can be set to the src of an image now
  }
}
