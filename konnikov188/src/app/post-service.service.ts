import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService extends BaseApiService {

  	options: HttpHeaders;

	constructor(public http: HttpClient) {
		super(http);
		this.options = new HttpHeaders();
		this.options = this.options.set('Content-Type', 'application/json');
	}

	async getPosts() {
		return this.get('posts', this.options).toPromise();
	}

	async postPost(data) {
		return this.post('posts', data, this.options).toPromise();
	}

	async putPostById(id, data) {
		return this.put('posts/' + id, data, this.options).toPromise();
	}

	async deletePostsById(id) {
		return this.delete('posts/' + id, this.options).toPromise();
	}
}
