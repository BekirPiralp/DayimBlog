export class LoginMailPassword{
    email!:string;
    password!:string;

    public constructor(yukle?:Partial<LoginMailPassword>){
        if(yukle) // yükle verimiş ise ata ör: = new LoginUser({email:"asd@mail.com",pasword:"asdasd"})
        Object.assign(this,yukle);
    }
}