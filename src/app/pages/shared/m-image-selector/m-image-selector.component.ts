import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  ImagePicker,
  ImagePickerOptions,
} from '@ionic-native/image-picker/ngx';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

@Component({
  selector: 'app-m-image-selector',
  templateUrl: './m-image-selector.component.html',
  styleUrls: ['./m-image-selector.component.scss'],
})
export class MImageSelectorComponent implements OnInit {
  @Output() imageListChange = new EventEmitter();
  imageListArray = [];
  constructor(private imagePicker: ImagePicker) { }

  ngOnInit() {}
  @Input()
  get imageList(){
    return this.imageListArray;
  }
  set imageList(value){
    this.imageListArray = value;
    this.imageListChange.emit(this.imageListArray);
  }
  addImage() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 4,
      outputType: 1
    };
    this.imagePicker.getPictures(options).then(
      (images) => {
        if (images !== 'OK'){
          for (let i = 0; i < images.length; i++){
            this.imageList.push('data:image/jpeg;base64,' + images[i]);
          }
        }
    });
  }
  async addCapImage(){
    try{
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.Base64
      });
      this.imageList.push('data:image/jpeg;base64,' + image.base64String);
    }
    catch (error){
      console.log('Catch statement ------------------------', error);
    }
  }
  removeImg(i) {
    this.imageList.splice(i, 1);
  }
}
