import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { customers } from 'src/app/modals/citizen';
import { CitizenService } from 'src/app/services/citizen.service';
import { StatusChangeComponent } from './status-change/status-change.component';

@Component({
  selector: 'app-citizen-view',
  templateUrl: './citizen-view.component.html',
  styleUrls: ['./citizen-view.component.css']
})
export class CitizenViewComponent implements OnInit {
enteredTitle ="";
enteredContent = "";
mode = "View";
private citizenId :string;
testID = "123";
isLoading =false;
private cititzen:customers;
signupedDate:Date;
logn:string;
lat:string;
form:FormGroup;
healthStatus :string ;
  constructor(private route:ActivatedRoute, private citizenServ:CitizenService,public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'nic':new FormControl(null,{validators:[Validators.required,Validators.minLength(3)]}),
      'email':  new FormControl(null,{validators:[Validators.required]}),
      'firstName': new FormControl(null,{validators:[Validators.required] }),
      'lastName': new FormControl(null,{validators:[Validators.required] }),
      'address': new FormControl(null,{validators:[Validators.required] }),
      'health': new FormControl(null,{validators:[Validators.required] }),
      'phone': new FormControl(null,{validators:[Validators.required] }),

    });

    this.route.paramMap.subscribe((x:ParamMap)=>{

        if(x.has('ViewcitizenId')){
          this.mode = "View"
          console.log(this.mode);
          this.citizenId = x.get('ViewcitizenId');
          console.log(this.citizenId);
          this.citizenServ.getCustomer(this.citizenId).subscribe((x)=>{
            if(x){
              this.cititzen = x;
            console.log(x);
              this.signupedDate = x.createdDate;
              this.logn = x.lastCheckedLatitude
              this.lat = x.lastCheckedLongitude
            this.form.setValue({'nic':this.cititzen.nic,'firstName':this.cititzen.firstName,'lastName':this.cititzen.lastName,'address':this.cititzen.address,'email':this.cititzen.emailAddress,'health':this.cititzen.heathStatus, 'phone':this.cititzen.mobileNumber });
            this.form.disable();
            }
        })

        }else if(x.has('citizenId')) {
          this.mode = "edit";
          this.citizenId = x.get('citizenId');
          console.log(this.mode);
          this.citizenServ.getCustomer(this.citizenId).subscribe((x)=>{
            this.cititzen = x;
            console.log(this.cititzen);
            this.form.setValue({'nic':this.cititzen.nic,'firstName':this.cititzen.firstName,'lastName':this.cititzen.lastName,'address':this.cititzen.address,'email':this.cititzen.emailAddress,'health':this.cititzen.heathStatus, 'phone':this.cititzen.mobileNumber });
            this.healthStatus = this.cititzen.heathStatus;
          })
        }else{
          this.router.navigate(['/']);
        }
    });
  }

  onUpdateCitizen(){
    const citizen:customers ={
      nic :this.form.value.nic,
      lastName: this.form.value.lastName,
      firstName:this.form.value.firstName,
      heathStatus:this.form.value.health,
      address:this.form.value.address,
      mobileNumber:this.form.value.phone,
      emailAddress:this.form.value.email
    }

    this.citizenServ.updateCustomer(citizen,this.citizenId).subscribe((x)=>{
      console.log(x);
      if(this.healthStatus != this.form.value.health && this.form.value.health =="positive"){
        const dialogRef = this.dialog.open(StatusChangeComponent);

        dialogRef.afterClosed().subscribe(result => {
        if(result){this.router.navigate(['/health-inspection/potentialInfected/'+this.citizenId]);}
        });
      }else{
        this.router.navigate(['/health-inspection']);
      }

    })
  }

}
