import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  ImagePicker,
  ImagePickerOptions,
} from '@ionic-native/image-picker/ngx';
import { Plugins, CameraResultType } from '@capacitor/core';
import { ApiService } from 'src/app/http.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
const { Camera } = Plugins;

const s3Url = 'https://mariposa-images.s3.amazonaws.com';

@Component({
  selector: 'app-m-image-selector',
  templateUrl: './m-image-selector.component.html',
  styleUrls: ['./m-image-selector.component.scss'],
})
export class MImageSelectorComponent implements OnInit {
  @Output() imageListChange = new EventEmitter();
  folderName = 'assessment';
  imageListArray = [];
  constructor(
    private imagePicker: ImagePicker,
    private http: ApiService,
    private photoViewer: PhotoViewer) { }

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
      const fileName = `Image-${new Date().getTime()}.jpeg`;
      const file = this.dataUrlToFile('data:image/jpeg;base64,' + image.base64String, fileName);
      this.http.post(`image?imageName=${fileName}&folderName=${this.folderName}`, file).then((response: any) => {
        this.imageList.push(response.URL);
        // this.imageList.push(`${s3Url}/${this.folderName}/${fileName}`);
      });
    }
    catch (error){
      console.log('Catch statement ------------------------', error);
    }
  }
  dataUrlToFile(dataUrl, fileName){
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const arrayBuffer = new ArrayBuffer(n);
    const u8arr = new Uint8Array(arrayBuffer);
    while (n--){
      u8arr[n] = bstr.charCodeAt(n);
    }
    const dataView = new DataView(arrayBuffer);
    return new Blob([dataView.buffer], {type: mime});
  }
  removeImg(i) {
    const image = this.imageList[i].split('/');
    this.http.delete(`image?imageName=${image[4]}&folderName=${image[3]}`, {}).then((response) => {
      this.imageList.splice(i, 1);
    });
  }
  viewPhoto(url){
    this.photoViewer.show(url);
  }
}
