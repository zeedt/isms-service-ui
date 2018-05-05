import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../global.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-add-reg-details',
  templateUrl: './add-reg-details.component.html',
  styleUrls: ['./add-reg-details.component.css']
})
export class AddRegDetailsComponent implements OnInit {

  constructor(private globalService:GlobalService, private httpClient:HttpClient) { }

  formData;
  uploadType = "Form";

  fileToUpload: File = null;

  ngOnInit() {
    this.globalService.setPageTitle("Add/Upload Registration Details");

    this.formData = new FormGroup({
      regNo: new FormControl("",Validators.compose([
        Validators.required, Validators.minLength(4),Validators.maxLength(10)
      ])),
      name: new FormControl("",Validators.compose([
        Validators.required, Validators.minLength(6),Validators.maxLength(30)
      ])),
      userType: new FormControl("",Validators.compose([
        Validators.required
      ])),
      exptYearOfGrad: new FormControl(new Date(),Validators.compose([
        Validators.required
      ])),
    });

  }

  public addRegistrationDetails(formData){
    formData["dateOfReg"] = new Date();
    console.log("Form date to submit is " + JSON.stringify(formData));
    this.postaddRegistrerationDetails(formData);
  }

public showUseFormForUploadd(){
    return false;
}

public setuploadType(type : string){
    this.uploadType = type;
    console.log("changed and set to " + type);
}

public getUploadType(){
    return this.uploadType;
}

  public postaddRegistrerationDetails(requestData: Object){

    var url = this.globalService.getIsmsServiceUrl() + "/regDetails/add";
    this.httpClient.post(url,requestData,this.getHttpOptions()).pipe(
      tap(
        data => {
          console.log("Successfully added registration details");
          console.log("Data gotten is " + JSON.stringify(data));
        },
        error => {
          console.log("Error gotten is " + JSON.stringify(error));
          console.log("Logging data from the error handler " +JSON.stringify(error))
        }
      )
    )
      .subscribe(result => {
        console.log("Result is " + JSON.stringify(result));
      })

  }
  public postuploadRegistrerationDetails(){

    var url = this.globalService.getIsmsServiceUrl() + "/regDetails/uploadBulk";
    var formDatafile  : FormData = new FormData();
    formDatafile.append("file",this.fileToUpload,this.fileToUpload.name);
    this.httpClient.post(url,formDatafile).pipe(
      tap(
        data => {
          console.log("Successfully added registration details");
          console.log("Data gotten is " + JSON.stringify(data));
        },
        error => {
          console.log("Error gotten is " + JSON.stringify(error));
          console.log("Logging data from the error handler " +JSON.stringify(error))
        }
      )
    )
      .subscribe(result => {
        console.log("Result is " + JSON.stringify(result));
      })

  }

  public setFileToUpload(files : FileList) {
    this.fileToUpload = files.item(0);
  }


  private  getHttpOptions () {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': 'Bearer ' + localStorage.getItem("isms_access_token")
      })
    };
    return httpOptions;
  }

}
