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
  panelOpenState = false;
  
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
      // console.log(data);
      let regrouped_logs = this.groupByKey(data, 'EventTemplate');
      console.log(regrouped_logs)
      this.groups = regrouped_logs
      
    }, error => {
      console.log("Not passed")
    });
  }

  groupByKey(array, key) {
    return array.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
 }
 

}
