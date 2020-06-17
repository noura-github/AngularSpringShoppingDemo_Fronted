import { Address } from './address';
export class Customer {
    customerId:number;
    firstname:string;
    lastname:string;
    username:string;
    password:string;
    password_confirmation:string;
    gender:string;
    date_of_birth: Date;

    address:Address;
    
    phone:string;
    email:string;
    acceptTerms:boolean;

    constructor(id=-1, firstname="",lastname="",username="",password="", password_confirmation="", gender="Male",
            date_of_birth=new Date(), street="", number=0,city="", state="", pincode=0, 
            phone="",email="", acceptTerms=false){

            this.customerId=id;
            this.firstname=firstname;
            this.lastname=lastname;
            this.username=username;
            this.password=password;
            this.password_confirmation = password_confirmation;
            this.gender=gender;
            this.date_of_birth = date_of_birth;

            /*this.street=street;
            this.number=number;
            this.city=city;
            this.state=state;
            this.zipcode=zipcode;*/

            this.address = new Address();
            this.address.street=street;
            this.address.number=number;
            this.address.city=city;
            this.address.state=state;
            this.address.pincode=pincode;

            this.phone=phone;
            this.email=email;
            this.acceptTerms = acceptTerms;

    }
}
