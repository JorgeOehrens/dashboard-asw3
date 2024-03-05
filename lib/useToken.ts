import { useToken } from 'wagmi';
import { contractAddress} from '../utils/constants';

function useTokenSelect() {
  const { data, isError, isLoading } = useToken({
    address: contractAddress, // Dirección del token
  });

  // Aquí puedes acceder a data.name, data.symbol, etc.
  
  return { token: data, isError, isLoading };
}

export default useTokenSelect;
