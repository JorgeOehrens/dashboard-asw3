import { Switch } from "@headlessui/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import logo from "/public/images/logo.png";
import logo_icon from "/public/images/asset_digital.png";
import { useAccount } from 'wagmi';

const SideBar = ({ showText, setShowText, openSidBar, setOpenSidBar }: any) => {

  const { isConnected } = useAccount();

  const [enabled, setEnabled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [show, setShow] = useState(true);
  const [sideBarShow, setSideBarShow] = useState(false);

  // responsive check
  const responsive = useMediaQuery({
    query: "(max-width: 1200px)",
  });

  // get router path
  const { route } = useRouter();

  const onMouseOverHandler = () => {
    if (sideBarShow) {
      setShowText(true);
    }
  };

  const onMouseLeaveHandler = () => {
    if (sideBarShow) {
      setShow(true);
      setShowText(false);
    }
  };

  const onClickHandler = () => {
    setShow(true);
    setSideBarShow(!sideBarShow);
    setShowText(!showText);
  };

  const handleClick = () => {
    setTheme(theme === "dark" || theme === "system" ? "light" : "dark");
  };

  useEffect(() => setEnabled(true), []);

  if (!enabled) return null;

  return (
    <>
      {responsive && openSidBar ? (
        <div className="w-full bg-gray-950 bg-opacity-70 h-[100vh] fixed top-0 left-0 z-30"></div>
      ) : (
        ""
      )}

      <motion.section
        className={`fixed left-0 top-0 z-30 container overflow-y-scroll lg:overflow-auto ${
          showText ? "w-[212px] 2xl:w-[312px]" : "w-auto"
        } border dark:border-[var(--color-dark)] bg-white dark:bg-[var(--color-gray-7)] px-6 pt-6 pb-10 ${
          openSidBar ? "block" : "hidden lg:block"
        }`}
        animate={{
          width: showText ? (responsive ? 212 : 312) : 150,
        }}
        transition={{ duration: 0.5 }}
      >

        <div className="h-[calc(100vh-65px)] flex flex-col justify-between">
          <div className="clss">
            <div className="flex items-center gap-10">
              <Link href="/">
                <Image
                  src={showText ? logo_icon : logo_icon}
                  alt="logo"
                  className="flex-shrink-0"
                />
              </Link>
              <button type={"button"} onClick={onClickHandler}>
                <span className="material-symbols-outlined">menu_open</span>
              </button>
            </div>
            <div className="mt-[60px]">
                {
                isConnected ? (
                  <ul>
<li
                    className="pb-3"
                    onMouseOver={onMouseOverHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    <Link
                      href="https://www.assetsweb3.com/"
                      className={`flex items-center gap-2 p-3 ${
                        showText ? "" : "justify-center"
                      } ${route === "/a" ? "side-bar-active" : ""}`}
                      onClick={() => setOpenSidBar(false)}
                    >
                      <span className="material-symbols-outlined">public</span>
                      <span
                        className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                      >
                        {showText ? "Home" : ""}
                      </span>
                    </Link>
                  </li>
                  <li
                    className="pb-3"
                    onMouseOver={onMouseOverHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    <Link
                      href="https://docs.assetsweb3.com/"
                      className={`flex items-center gap-2 p-3 ${
                        showText ? "" : "justify-center"
                      } ${route === "/a" ? "side-bar-active" : ""}`}
                      onClick={() => setOpenSidBar(false)}
                    >
                      <span className="material-symbols-outlined">public</span>
                      <span
                        className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                      >
                        {showText ? "White paper" : ""}
                      </span>
                    </Link>
                  </li>
                  <hr />
                  <li
                    className="pb-3"
                    onMouseOver={onMouseOverHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    <Link
                      href="/dashboard"
                      className={`flex items-center gap-2 p-3 ${
                        showText ? "" : "justify-center"
                      } ${route === "/dashboard" ? "side-bar-active" : ""}`}
                      onClick={() => setOpenSidBar(false)}
                    >
                      <span className="material-symbols-outlined">cottage</span>
                      <span
                        className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                      >
                        {showText ? "Dashboard" : ""}
                      </span>
                    </Link>
                  </li>
                  <li
                    className="pb-3"
                    onMouseOver={onMouseOverHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    <Link
                      href="/dashboard/buy"
                      className={`flex items-center gap-2 p-3 ${
                        showText ? "" : "justify-center"
                      } ${route === "/dashboard/buy" ? "side-bar-active" : ""}`}
                      onClick={() => setOpenSidBar(false)}
                    >
                      <span className="material-symbols-outlined">
                        swap_horiz
                      </span>
                      <span
                        className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                      >
                        {showText ? "Buy" : ""}
                      </span>
                    </Link>
                  </li>
                  <li
                    className="pb-3"
                    onMouseOver={onMouseOverHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    <Link
                      href="/dashboard/withdraw"
                      className={`flex items-center gap-2 p-3 ${
                        showText ? "" : "justify-center"
                      } ${route === "/dashboard/withdraw" ? "side-bar-active" : ""}`}
                      onClick={() => setOpenSidBar(false)}
                    >
                      <span className="material-symbols-outlined">
                        hourglass_empty
                      </span>
                      <span
                        className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                      >
                        {showText ? "Profit" : ""}
                      </span>
                    </Link>
                  </li>
                  <li
                    className="pb-3"
                    onMouseOver={onMouseOverHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    <Link
                      href="/dashboard/portfolio"
                      className={`flex items-center gap-2 p-3 ${
                        showText ? "" : "justify-center"
                      } ${route === "/dashboard/portfolio" ? "side-bar-active" : ""}`}
                      onClick={() => setOpenSidBar(false)}
                    >
                      <span className="material-symbols-outlined">dns</span>
                      <span
                        className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                      >
                        {showText ? "Portafolio" : ""}
                      </span>
                    </Link>
                  </li>
                  
                  
                  <li
                    className="pb-3"
                    onMouseOver={onMouseOverHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    <Link
                      href="/dashboard/marketplace"
                      className={`flex items-center gap-2 p-3 ${
                        showText ? "" : "justify-center"
                      } ${route === "/dashboard/marketplace" ? "side-bar-active" : ""}`}
                      onClick={() => setOpenSidBar(false)}
                    >
                      <span className="material-symbols-outlined">explore</span>
                      <span
                        className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                      >
                        {showText ? "Marketplace" : ""}
                      </span>
                    </Link>
                  </li>
                 
               
              
                  
                </ul>
                ) : (
                  <ul>
                    
                <li
                    className="pb-3"
                    onMouseOver={onMouseOverHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    <Link
                      href="https://www.assetsweb3.com/"
                      className={`flex items-center gap-2 p-3 ${
                        showText ? "" : "justify-center"
                      } ${route === "/a" ? "side-bar-active" : ""}`}
                      onClick={() => setOpenSidBar(false)}
                    >
                      <span className="material-symbols-outlined">public</span>
                      <span
                        className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                      >
                        {showText ? "Home" : ""}
                      </span>
                    </Link>
                  </li>
              
                  <li
                    className="pb-3"
                    onMouseOver={onMouseOverHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    <Link
                      href="https://docs.assetsweb3.com/"
                      className={`flex items-center gap-2 p-3 ${
                        showText ? "" : "justify-center"
                      } ${route === "/a" ? "side-bar-active" : ""}`}
                      onClick={() => setOpenSidBar(false)}
                    >
                      <span className="material-symbols-outlined">public</span>
                      <span
                        className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                      >
                        {showText ? "White paper" : ""}
                      </span>
                    </Link>
                  </li>
                 
                  
                
                  
                  
                  <li
                    className="pb-3"
                    onMouseOver={onMouseOverHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    <Link
                      href="/explore-nfts"
                      className={`flex items-center gap-2 p-3 ${
                        showText ? "" : "justify-center"
                      } ${route === "/explore-nfts" ? "side-bar-active" : ""}`}
                      onClick={() => setOpenSidBar(false)}
                    >
                      <span className="material-symbols-outlined">explore</span>
                      <span
                        className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                      >
                        {showText ? "Marketplace" : ""}
                      </span>
                    </Link>
                  </li>
                  <li
                    className="pb-3"
                    onMouseOver={onMouseOverHandler}
                    onMouseLeave={onMouseLeaveHandler}
                  >
                    <Link
                      href="/login"
                      className={`flex items-center gap-2 p-3 ${
                        showText ? "" : "justify-center"
                      } ${route === "/login" ? "side-bar-active" : ""}`}
                      onClick={() => setOpenSidBar(false)}
                    >
                      <span className="material-symbols-outlined">login</span>
                      <span
                        className={`text-[var(--color-gray-4)] font-semibold text-[16px] leading-[130%]`}
                      >
                        {showText ? "Login" : ""}
                      </span>
                    </Link>
                  </li>
               
              
                  
                </ul>
                )
              } 

            </div>
          </div>

          <div className="flex items-center justify-center gap-1 mt-10">
            <span className="material-symbols-outlined dark:text-white">
              light_mode
            </span>

            <Switch
              checked={enabled}
              onChange={handleClick}
              className={`${
                theme === "light" ? "border-[#1C1B1F]" : "border-[#fff]"
              } relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-[#1C1B1F] transition-colors duration-200 ease-in-out`}
            >
              <span className="sr-only">Use Setting</span>
              <span
                aria-hidden="true"
                className={`${
                  theme !== "light"
                    ? "translate-x-[20px] bg-[#fff]"
                    : "translate-x-0 bg-[#1C1B1F]"
                } pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out`}
              ></span>
            </Switch>
            <span className="material-symbols-outlined dark:text-white">
              dark_mode
            </span>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default SideBar;
