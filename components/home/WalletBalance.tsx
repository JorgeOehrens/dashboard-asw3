import BalanceCard from "../cards/BalanceCard";
import RadialBar from "../charts/RadialBar";

type PropsType = {
  balanceWalletETH: string;
  balanceWalletUSD: string;

};
const WalletBalance = ({balanceWalletETH, balanceWalletUSD } : PropsType)  => {
  return (
    <BalanceCard balance={balanceWalletETH}  balance_usd={balanceWalletUSD} title="Wallet Balance">
      <div className="w-[52px] max-h-[52px] flex items-center justify-center">
        {/* Radial Bar */}
        <RadialBar darkColor="#F44336" lightColor="#448aff" />
      </div>
    </BalanceCard>
  );
};

export default WalletBalance;
