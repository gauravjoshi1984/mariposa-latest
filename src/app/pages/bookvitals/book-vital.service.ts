import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/http.service';
import { DataserviceService } from '../dataservice.service';
import * as moment from 'moment';
@Injectable({
    providedIn: 'root'
})
export class BookVitalsService{
    data: any = {};
    constructor(
        private storage: Storage,
        private apiService: ApiService,
        private dataService: DataserviceService
    ){}
    async addPost(postType, values){
        const careCircleId = await this.storage.get('careCircleId');
        const {userId} = await this.storage.get('user');
        const date = new Date().toISOString().split('T')[0];
        const response = await this.apiService.post(`bookvitals/addPost?careCircleId=${careCircleId}&userId=${userId}&postType=${postType}&postDate=${date}`, values);
        return response;
    }
    async getPost(){
        const careCircleId = await this.storage.get('careCircleId');
        const start = moment().subtract(5, 'd').format('YYYY-MM-DD');
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
}
