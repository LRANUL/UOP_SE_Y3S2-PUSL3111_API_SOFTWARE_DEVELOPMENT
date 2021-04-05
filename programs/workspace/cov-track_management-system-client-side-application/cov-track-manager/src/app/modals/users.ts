export interface user
{

}

export interface place
{
  name: string,
  address: string,
  sector: string,
  email: string,
  phone:string,
  city: string,
  QRcode: string,
  QRimage: string
}

export interface officers{
  firstName: string,
  middleName: string,
  lastName: string,
  DOB: string,
  email:string,
  password: string,
  phone: string
  address: string,
  city: string,
  userType: string,
  userName: string
}

export interface view{
  email: string
}

export interface officer{
  firstName: string,
  middleName: string,
  lastName: string,
  DOB: string,
  email:string,
  password: string,
  phone: string
  address: string,
  city: string,
  userType: string,
  userName: string,
  createdAt: string,
  updatedAt: string
}
