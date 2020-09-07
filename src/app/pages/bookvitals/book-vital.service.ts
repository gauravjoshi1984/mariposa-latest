import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/http.service';
import * as moment from 'moment';
import { ConfigCareServiceService } from '../configcare/config-care-service.service';
@Injectable({
    providedIn: 'root'
})
export class BookVitalsService{
    data: any = {};
    constructor(
        private storage: Storage,
        private apiService: ApiService,
        private configCareService: ConfigCareServiceService
    ){}
    getStartEnd() {
        const start = moment().startOf('week').format('YYYY-MM-DD');
        const end = moment().endOf('week').format('YYYY-MM-DD');
        return {start, end};
      }
    async addPost(postType, values){
        const careCircleId = await this.storage.get('careCircleId');
        const {userId} = await this.storage.get('user');
        const date = moment().format('YYYY-MM-DD');
        const response = await this.apiService.post(`bookvitals/addPost?careCircleId=${careCircleId}&userId=${userId}&postType=${postType}&postDate=${date}`, values);
        return response;
    }
    async updatePost(postId, values){
        const response = await this.apiService.put(`bookvitals/updatePost?postId=${postId}`, values);
        return response;
    }
    async getPost(){
        const careCircleId = await this.storage.get('careCircleId');
        const start = moment().subtract(10, 'd').format('YYYY-MM-DD');
        const end = moment().format('YYYY-MM-DD');
        const response = await this.apiService.get(`bookvitals/getPosts`, {careCircleId, start, end});
        return response;
    }
    async editLike(postId, editType){
        const {userId} = await this.storage.get('user');
        const response = await this.apiService.post(`bookvitals/editLikes?postId=${postId}&userId=${userId}&editType=${editType}`, {});
        return response;
    }
    setSelectedPost(post){
        this.storage.set('selectedPost', post);
    }
    async getSelectedPost(){
        return await this.storage.get('selectedPost');
    }
    async editComment(postId, commentObj, editType){
        const response = await this.apiService.post(`bookvitals/editComments?postId=${postId}&editType=${editType}`, commentObj);
        return response;
    }
    async getVitals(week= false){
        const careCircleId = await this.storage.get('careCircleId');
        let start;
        let end;
        if (week){
            const dates = this.getStartEnd();
            start = dates.start;
            end = dates.end;
        }
        else{
            start = moment().format('YYYY-MM-DD');
            end = moment().add(1, 'd').format('YYYY-MM-DD');
        }
        const response = await this.apiService.get(`bookvitals/getVitals`, {careCircleId, start, end});
        return response;
    }
    async addVitals(key, value){
        const careCircleId = await this.storage.get('careCircleId');
        const {userId} = await this.storage.get('user');
        const date = moment().format('YYYY-MM-DD');
        return await this.apiService.post(`bookvitals/addVital?careCircleId=${careCircleId}&createdBy=${userId}&key=${key}&vitalDate=${date}`, value);
    }
    setVitalValues(values){
        const currentDate = moment().format('YYYY-MM-DD');
        const data = {[currentDate]: values};
        this.storage.set('vitalValues', data);
    }
    async getVitalValues(){
        const currentDate = moment().format('YYYY-MM-DD');
        const data = await this.storage.get('vitalValues');
        if (data && data[currentDate]){
            return data[currentDate];
        }
        else{
            this.storage.set('vitalValues', null);
            return {};
        }
    }
    async addActivity(key, values){
        const careCircleId = await this.storage.get('careCircleId');
        return await this.apiService.post(`bookvitals/addActivity?careCircleId=${careCircleId}&key=${key}`, values);
    }
    setReportDetail(key, value= null){
        this.storage.set('reportDetail', {key, value});
    }
    async getReportDetail(){
        return await this.storage.get('reportDetail');
    }
    getVitalsSchedule(configCareDetails){
        const vitalDetails = [];
        const configCareVitalOptions = configCareDetails.configCareConfiguration.VITALS.type;
        const configCareVitals = configCareDetails.configCareValues.VITALS;
        const scheduledVitals = {};
        const currentDay = new Date().getDay();
        configCareVitals.forEach(schedule => {
        const vitalConfig = configCareVitalOptions.find(option => option.value === schedule.type);
        if (schedule.repeatDays.indexOf(currentDay) >= 0) {
            scheduledVitals[schedule.type] = {...schedule, label: vitalConfig.name};
        }
        });
        Object.keys(scheduledVitals).forEach(key => {
            vitalDetails.push(scheduledVitals[key]);
        });
        return vitalDetails;
    }
}
