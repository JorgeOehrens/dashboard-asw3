import { useToken } from 'wagmi';
import { TOKEN_ADDRESS} from '../utils/constants';

function useTokenSelect() {
  const { data, isError, isLoading } = useToken({
    address: TOKEN_ADDRESS, // Dirección del token
  });

  // Aquí puedes acceder a data.name, data.symbol, etc.


  const suply = data?.totalSupply
  
  return suply;
}

export default useTokenSelect;
