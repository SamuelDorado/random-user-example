export class User {
    profileImg:string;
    name: string;
    gender:string;
    address:Address;
    email:string;
    registered: Date;
    constructor(){
        this.profileImg = '';
        this.name=''
        this.gender=''
        this.address= {direction:'',postcode:28001};
        this.email=''
        this.registered=new Date();
    }
}

export class Address{
    direction:string;
    postcode:number;
}

