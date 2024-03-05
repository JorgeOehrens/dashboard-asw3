import { useContext } from 'react';
import { TransactionContext } from '../contexts/TransactionContext';

export const useWallet = () => {
  const context = useContext(TransactionContext);

  if (context === undefined) {
    throw new Error('useWallet must be used within a TransactionProvider');
  }

  // Aquí puedes añadir más lógica o métodos si es necesario.

  return {
    connectWallet: context.connectWallet,
    currentAccount: context.currentAccount,
    // Añade aquí cualquier otro estado o función que quieras exponer.
  };
};
