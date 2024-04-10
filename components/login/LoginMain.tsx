
import Form from "./Form";
import Image from "next/image";
import desktop from "/public/images/hero-desktop.png";
        

const LoginMain = () => {

    return (

        <div className="flex w-full h-screen">
          <div className="w-full flex items-center justify-center lg:w-2/5">

          <Form/>

          </div>
          <div className="hidden relative lg:flex h-full w-3/5 items-center justify-center">

          <Image src={desktop} alt="logo" />

          </div>

        </div>

       
        


  );

}

export default LoginMain; 