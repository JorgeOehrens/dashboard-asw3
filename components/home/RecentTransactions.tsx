import Link from "next/link";
import RecentTransactionItms from "./RecentTransactionItms";
import getAllTransactions from "@/utils/transactionsToken";
import { useEffect, useState } from 'react';
import { Transaction } from "@/utils/types";
import getAllTransactionsData from "@/utils/transactionsToken2";

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

const convertWeiToEther = (wei: string) => {
  // Convertir el valor de wei a ether dividiendo por 10^18
  const ether = parseInt(wei, 16) / Math.pow(10, 18);
  return ether;
};

const RecentTransactions = () => {
  const [transactions2, setTransactions2] = useState<Transaction[]>([]);

  const isClient = useIsClient();

  useEffect(() => {
    const fetchTransactions = async () => {
      if (isClient) {
        try {

          
          const transactionsData2 = await getAllTransactionsData();
          setTransactions2(transactionsData2);
  
        } catch (error) {
          console.error('Error fetching transactions:', error);
        }
      }
    };

    fetchTransactions();
  }, [isClient]);
  console.log("TRANSACTIONS: ",transactions2);

  return (
    <div className="flex flex-col gap-6 bg-white dark:bg-[var(--color-gray-7)] rounded-lg p-3">
      <div className="flex items-center justify-between">
        <h5 className="text-lg leading-[150%] font-bold">
          Recent Transactions
        </h5>
      
      </div>

  

      {/* Aquí podrías pasar las transacciones a RecentTransactionItms si necesitas mostrarlas de otra manera */}
      <RecentTransactionItms transactions={transactions2} />
    </div>
  );
};

export default RecentTransactions;
