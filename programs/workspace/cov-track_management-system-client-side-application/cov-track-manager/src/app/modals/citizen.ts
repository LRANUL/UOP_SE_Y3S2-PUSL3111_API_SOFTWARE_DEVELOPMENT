export interface customers
{ nic :string,
  _id ?:string,
  lastName: string,
  firstName:string,
  dob?:Date,
  heathStatus:string,
  address:string,
  city?:string,
  profession?:string,
  affiliation?:string,
  checkedIn?:boolean,
  mobileNumber:number,
  createdDate?:Date
  emailAddress:string,
  lastCheckedLatitude?:string
  lastCheckedLongitude?:string;

}
