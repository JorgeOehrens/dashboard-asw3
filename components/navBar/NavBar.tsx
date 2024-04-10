
import Image from "next/image";
import Link from "next/link";
import avatar_photo from "/public/images/user/user_1.png";
import logo_icon from "/public/images/asset_digital.png";
import React, {useContext} from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import useTokenBalance from "@/lib/readBalanceTokens";
import { useEffect, useState } from 'react';
import useTokenSelect from "@/lib/useClient";
import walletBalanceusd from "@/utils/walletBalanceUSD";

type NavbarProps = {
  openSidBar: boolean;
  isOpen?: boolean;
  setIsOpen: (a: boolean) => void;
  setOpenSidBar: (a: boolean) => void;

};

const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

const NavBar = ({
  isOpen,
  setIsOpen,
  setOpenSidBar,
  openSidBar,

}: NavbarProps) => {





  return (
    <nav className="sticky top-0 left-0 z-50 px-2 lg:px-10 shadow-[0px_1px_2px_rgba(0,0,0,0.2)] py-3 md:py-[19px] bg-white dark:bg-[var(--color-gray-7)]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex lg:hidden items-center gap-4">
            <Link href="/">
              <Image src={logo_icon} alt="logo" />
            </Link>
            <button type={"button"} onClick={() => setOpenSidBar(!openSidBar)}>
              <span className="material-symbols-outlined">menu_open</span>
            </button>
          </div>
     
        </div>
        <div className="flex items-center gap-4 md:gap-8">
        
          <div className="flex items-center gap-3 md:gap-6">
                      <ConnectButton  />  

          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default NavBar;
