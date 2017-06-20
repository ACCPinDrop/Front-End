import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	data: string;
	postdata: string;
	newCategory: string;
	constructor (private _http: Http) {}
  
  test() {
    if (this.data){
      return true;
    } else {
      return false;
    }
  }


  getData() {
    this.newCategory = '';
    return this._http.get('http://199.101.49.43/categories/')
              .map(res => res.json())
              .subscribe(
                data => this.data = data,
                error => alert(error),
                () => console.log("Finished!")
  	          );
  }

  postData() {
  	console.log("postData");
  	var dataJson = JSON.stringify({ 'category_name': this.newCategory});
  	var params = dataJson;
  	var headers = new Headers();
  	headers.append('content-type', 'application/json' );

  	return this._http.post('http://199.101.49.43/categories/', params, { headers: headers})
  	                  .map(res => res.json())
  	                  .subscribe(
                        data => {this.postdata = JSON.stringify(data), this.getData()},
                        error => alert(error),
                        () => console.log("Post Finished!")
  	                  );
  }

  deleteData(pk) {
  	console.log(pk.id);
  	var url = 'http://199.101.49.43/categories/' + pk.id + '/';
    var headers = new Headers();
  	headers.append('content-type', 'application/json' );

  	return this._http.delete(url, { headers: headers})
  	                  .map(res => res.json())
  	                  .subscribe(
                        data => {console.log(data), this.getData()},
                        error => alert(error),
                        () => console.log("Deleted!")
  	                  );
  }

}
//  console.log(people[0].id)