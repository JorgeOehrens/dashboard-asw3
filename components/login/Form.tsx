
import { ConnectButton } from '@rainbow-me/rainbowkit';

// import { signIn } from 'next-auth/react';

const Form = () =>{


    return <>
    <div className=" bg-white px-10 py-20 rounded-3xl border-3 border-gray-100">
        <h1 className="text-5xl font-semibold text-center m-4">
            Welcome back!
        </h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
            Welcome back! Please connect in Assets Web 
        </p>
{/* 

        <div className="mt-8">
            <div >
                <ConnectButton/>
            </div>

        </div>
        <div className="mt-10 grid grid-cols-3 item-center text-gray-400">

            <hr  className="border-gray-400"/>
            <p className="text-center text-sm"> OR </p>
            <hr  className="border-gray-400" />

        </div>
        <button 
        // onClick={() => signIn()}
        className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25"  viewBox="0 0 48 48">
            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            Login with Google



        </button> */}

    </div>

    
    
    </>

}


export default Form;