import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/http.service';
import { DataserviceService } from '../dataservice.service';
import { Md5 } from 'ts-md5/dist/md5';
@Injectable({
  providedIn: 'root'
})
export class ConfigCareServiceService {
  data: any = {};
  editSharedData = {};
  constructor(private storage: Storage,
              private apiService: ApiService,
              private dataService: DataserviceService) {

  }
  getStartEnd() {
    const now = new Date();
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    const start = new Date(now.setDate(diff)).toISOString().split('T')[0];
    const end = new Date(now.setDate(now.getDate() + 6)).toISOString().split('T')[0];
    return {start, end};
  }
  async getConfigCareDetails(){
    const configCareDetails = await this.storage.get('configCareDetails');
    if (!configCareDetails){
      const careCircleId = await this.storage.get('careCircleId');
      const data = await this.apiService.get('configCare', {careCircleId});
      this.storage.set('configCareDetails', data);
      return data;
    }
    else{
      return configCareDetails;
    }
  }

  async saveConfigCareDetails(configCareKey, configCareObject){
    configCareObject.forEach(obj => {
      const now = new Date().getTime() / 1000;
      const hash = configCareKey + now;
      obj.hash = Md5.hashStr(hash);
    });
    const careCircleId = await this.storage.get('careCircleId');
    const {userId} = await this.storage.get('user');
    const response = await this.apiService.post('configCare/?careCircleId=' + careCircleId + '&configCareKey=' + configCareKey + '&userId=' + userId + '', configCareObject);
    const data = await this.storage.get('configCareDetails');
    data.configCareValues[configCareKey] = configCareObject;
    await this.storage.set('configCareDetails', data);
  }
  setConfigEditShared(obj, key, index = 0){
    if (obj){
      this.editSharedData[key] = {index, obj};
    }else{
      this.editSharedData[key] = null;
    }
  }
  getConfigEditShared(key){
    return this.editSharedData[key];
  }
  async getCalendatSchedule(){
    const careCircleId = await this.storage.get('careCircleId');
    const dates = this.getStartEnd();
    const response = await this.apiService.get('bookvitals/schedule', {careCircleId, start: dates.start, end: dates.end});
    return response;
  }
}






