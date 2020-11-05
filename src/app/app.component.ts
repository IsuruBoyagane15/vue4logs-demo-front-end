import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  groups: any;
  conf_file: any;
  log_file: any;
  arr = {};

  constructor(private dataService: DataService) {
    

  }


  config_fileChanged(e) {
    this.conf_file = e.target.files[0];
    this.uploadConfDocument(this.conf_file);

  }
  log_fileChanged(e) {
    this.log_file = e.target.files[0];
    this.uploadLogDocument(this.log_file);
  }
  uploadConfDocument(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      // console.log(fileReader.result);
      this.arr["conf"] = fileReader.result
      
    }
    fileReader.readAsText(this.conf_file);

  }

  uploadLogDocument(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      // console.log(fileReader.result);
      this.arr["logs"] = fileReader.result
    }

    fileReader.readAsText(this.log_file);
  }

  submit() {
    this.dataService.uploadData(this.arr).subscribe((data) => {
      console.log(data);
      this.groups = data
    }, error => {
      console.log("Not passed")
    });
  }

}
