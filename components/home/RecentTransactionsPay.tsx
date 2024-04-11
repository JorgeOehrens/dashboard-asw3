import Link from "next/link";
import RecentTransactionItms from "./RecentTransactionItms";
import { useEffect, useState } from 'react';
import { Transaction } from "@/utils/types";
import getAllTransactionsPay from "@/utils/TransactionPay";
import getAllTransactionsToken from "@/utils/TransactionProyect";

// Hook personalizado para determinar si estamos en el lado del cliente
const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Se establece a true cuando el componente se monta
  }, []);

  return isClient;
};

const RecentTransactionsPay = () => {
  const [transactions2, setTransactions2] = useState<Transaction[]>([]);

  const isClient = useIsClient();

  useEffect(() => {
    const fetchTransactions = async () => {
      if (isClient) { // Solo ejecutar en el lado del cliente
        try {
          const transactionsData2 = await getAllTransactionsPay();
          setTransactions2(transactionsData2); // Actualizar el estado con las transacciones obtenidas
        } catch (error) {
          console.error('Error fetching transactions:', error);
        }
      }
    };

    fetchTransactions(); // Llamar a la función al montar el componente y cuando `isClient` cambie
  }, [isClient]);

  return (
    <div className="flex flex-col gap-6 bg-white dark:bg-[var(--color-gray-7)] rounded-lg p-3">
      <div className="flex items-center justify-between">
        <h5 className="text-lg leading-[150%] font-bold">
          Transactions Profit
        </h5>
      </div>

      {/* Pasar las transacciones al componente RecentTransactionItms para mostrarlas */}
      <RecentTransactionItms transactions={transactions2} />
    </div>
  );
};

export default RecentTransactionsPay;
