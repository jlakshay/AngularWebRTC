import { Component, OnInit } from '@angular/core';
import { WcWindowModule } from 'angular-window-component';
import { AdatperService } from './adatper.service';
import  window from 'webrtcsupport';
import getUserMedia from 'getusermedia';
let video = document.querySelector('video');
let constraints = {
 		 audio: false,
 		 video: true
		};
let n = <any>navigator;
		n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AdatperService]
})

export class AppComponent {
	
	constructor(){
		// this.getUserMedia(constraints, this.successCallback, this.errorCallback);
	}
	// then deal with a weird, positional error handling API 
	successCallback(stream) {
	   window.stream = stream;  // stream available to console
	  if (window.URL) {
	    return video.src = window.URL.createObjectURL(stream);
	  } else {
	    return video.src = stream;
	  }
	}

  errorCallback(error) {
	  return error;
	}

 
	getUserMedia(constraints, successCallback, errorCallback){
 
    if (errorCallback) {
       console.log('failed');
    } 
    else {
       console.log('got a stream', successCallback);  
    }
	};

	ngOnInit(){
		if (n.getUserMedia) {
		   n.getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
		      function(stream) {
		         var video = document.querySelector('video');
		         video.srcObject = stream;
		         video.onloadedmetadata = function(e) {
		           video.play();
		         };
		      },
		      function(err) {
		         console.log("The following error occurred: " + err.name);
		      }
		   );
		}

		else {
	   console.log("getUserMedia not supported");
		}
	}
}
