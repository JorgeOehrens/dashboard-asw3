import BalanceCard from "../cards/BalanceCard";
import RadialBar from "../charts/RadialBar";



type PropsType = {
  balanceWalletETH: string;
  balanceWalletUSD: string;

};

const EarnBalance =  ({balanceWalletETH, balanceWalletUSD } : PropsType) => {
  return (
    <BalanceCard balance={balanceWalletETH} balance_usd={balanceWalletUSD} title="Earn Balance">
      <div className="w-[52px] max-h-[52px] flex items-center justify-center">
        {/* Radial Bar */}
        <RadialBar lightColor="#0B6725" darkColor="#3bdc68" />
      </div>
    </BalanceCard>
  );
};

export default EarnBalance;
