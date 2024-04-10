import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import LoginMain from "../components/login/LoginMain";

export default function Login() {
    const { isConnected } = useAccount();
    const router = useRouter();
  
    useEffect(() => {
      if (isConnected) {
        router.push('/dashboard'); // Redirige a la página principal
      }
    }, [isConnected, router]);
  
    return <LoginMain />;
  }