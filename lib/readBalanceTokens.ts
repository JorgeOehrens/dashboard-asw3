import { useAccount, useBalance } from 'wagmi';
import { TOKEN_ADDRESS} from '@/utils/constants';

export const useTokenBalance = () => {
  const { address } = useAccount(); // Obtiene la dirección de la wallet conectada
  const { data, isError, isLoading } = useBalance({
    address: address, // Usa la dirección de la wallet
    token: TOKEN_ADDRESS, // Dirección del contrato del token
  });

  return { balance: data,address:address, isError, isLoading };
};


export default useTokenBalance ;
