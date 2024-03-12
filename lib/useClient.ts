import { useAccount, useBalance } from 'wagmi';
import wagmiClient from "@/lib/wagmiClient";

export const useClient = () => {
  const { address } = useAccount(); // Obtiene la dirección de la wallet conectada


  return { address: address };
};


export default useClient ;