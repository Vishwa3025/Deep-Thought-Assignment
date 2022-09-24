import React from "react";
import bell from "../images/Bell_pin_light.png";
import user from "../images/item-left.png";
import growpital from "../images/Growpital.png";
import home from "../images/Home.png";
import contact from "../images/Contact Us.png";
import about from "../images/About.png";
import service from "../images/Service.png";
import menu from "../images/Menu.png";
import homeicon from "../images/homeicon.png";
import portfolio from "../images/portfolio.png";
import invest from "../images/invest.png";
import wallet from "../images/wallet.png";
import support from "../images/support.png";
import card from "../images/card.png";
import crdbtn from "../images/crdbtn.png";
import sent from "../images/2.png";
import receive from "../images/1.png";
import failed from "../images/3.png";
import d3000 from "../images/d3000.png";
import i3000 from "../images/i3000.png";
import fail from "../images/fail.png";
import threeth from "../images/threeth.png";
import fiveth from "../images/fiveth.png";
import fiftyth from "../images/fiftyth.png";
import tenth from "../images/tenth.png";
import onelack from "../images/onelack.png";
import popular from "../images/Popular.png";
import bank from "../images/bank.png";

function Page1() {
  return (
    <>
      <div>
        {/* NAVBAR */}

        <div className="flex bg-black">
          <div className="w-4/5 flex m-3">
            <div className="flex items-center ">
              <img src={growpital} alt="" />
            </div>
            <div className="flex justify-evenly w-full ml-10">
              <div className="flex items-center mx-4 my-2">
                <img src={home} alt="" />
              </div>
              <div className="flex items-center mx-4 my-2">
                <img src={about} alt="" />
              </div>
              <div className="flex items-center mx-4 my-2">
                <img src={service} alt="" />
              </div>
              <div className="flex items-center mx-4 my-2">
                <img src={contact} alt="" />
              </div>
            </div>
          </div>
          <div className="w-1/5 ml-28 flex justify-evenly items-center m-3">
            <div className="">
              <img src={bell} alt="" />
            </div>
            <div className="">
              <img src={user} alt="" />
            </div>
          </div>
        </div>

        {/* SIDE MENU */}

        <div className="flex justify-between">
          <div className="w-[180px] h-[480px] mt-10 bg-[#20222B] ">
            <div className="p-3 w-full flex h-auto border-b-2 border-amber-500">
              <div>
                <img src={menu} alt="" />
              </div>
              <div className="ml-3 text-white">Manu</div>
            </div>
            <div className="py-5 px-3 mt-2 w-full flex h-auto">
              <div>
                <img src={homeicon} alt="" />
              </div>
              <div className="ml-3 text-[#ABAFC4]">Home</div>
            </div>
            <div className="py-5 px-3 mt-2 w-full flex h-auto">
              <div>
                <img src={portfolio} alt="" />
              </div>
              <div className="ml-3 text-[#ABAFC4]">Portfolio</div>
            </div>
            <div className="py-5 px-3 mt-2 w-full flex h-auto">
              <div>
                <img src={invest} alt="" />
              </div>
              <div className="ml-4 text-[#ABAFC4]">Invest</div>
            </div>
            <div className="py-5 px-3 mt-2 w-full flex h-auto">
              <div>
                <img src={wallet} alt="" />
              </div>
              <div className="ml-2.5 text-[#ABAFC4]">Wallet</div>
            </div>
            <div className="py-5 px-3 mt-2 w-full flex h-auto">
              <div>
                <img src={support} alt="" />
              </div>
              <div className="ml-5 text-[#ABAFC4]">Support</div>
            </div>
          </div>

          {/* MIDDLE PART */}

          <div className="w-[720px] mt-10 ml-5 bg-black h-auto">
            <div className="h-[220px]">
              <img className="mx-5 absolute z-1" src={card} alt="" />
              <img
                className="relative z-2 left-9 top-32 "
                src={crdbtn}
                alt=""
              />
            </div>
            <div>
              <div className="h-auto w-full flex p-2">
                <div className="w-5/6 text-start font-bold text-white text-xl tracking-wider">
                  Transactions
                </div>
                <div className="w-1/6 text-center mr-5 font-semibold text-yellow-500">
                  view all
                </div>
              </div>

              <div className="h-auto w-full flex items-center p-2">
                <div>
                  <img src={sent} alt="" />
                </div>
                <div className="w-5/6 text-start pl-3 text-sm text-white font-semibold ">
                  Youtube Premium
                  <p className="text-[10px] p-0 text-gray-400">
                    9 Aug 2022 8:30 PM
                  </p>
                </div>
                <div className="w-1/6">
                  <img src={d3000} alt="" />
                </div>
              </div>

              <div className="h-auto w-full flex items-center p-2">
                <div>
                  <img src={receive} alt="" />
                </div>
                <div className="w-5/6 text-start pl-3 text-sm text-white font-semibold">
                  Facebook Ads
                  <p className="text-[10px] p-0 text-gray-400">
                    9 Aug 2022 9:30 PM
                  </p>
                </div>
                <div className="w-1/6">
                  <img src={i3000} alt="" />
                </div>
              </div>

              <div className="h-auto w-full flex items-center p-2">
                <div>
                  <img src={failed} alt="" />
                </div>
                <div className="w-5/6 text-start pl-3 text-sm text-white font-semibold">
                  Facebook Ads
                  <p className="text-[10px] p-0 text-gray-400">
                    6 Aug 2022 6:30 PM
                  </p>
                </div>
                <div className="w-1/6">
                  <img src={threeth} alt="" />
                  <div className="flex m-1">
                    <img src={fail} alt="" />
                    <p className="text-xs pl-1 text-red-800">Failed</p>
                  </div>
                </div>
              </div>

              <div className="h-auto w-full flex items-center p-2">
                <div>
                  <img src={receive} alt="" />
                </div>
                <div className="w-5/6 text-start pl-3 text-sm text-white font-semibold">
                  Hemant kant malviya Sent Money To Bank
                  <p className="text-[10px] p-0 text-gray-400">
                    2 Aug 2022 4:30 PM
                  </p>
                </div>
                <div className="w-1/6">
                  <img src={i3000} alt="" />
                </div>
              </div>

              <div className="h-auto w-full flex items-center p-2">
                <div>
                  <img src={failed} alt="" />
                </div>
                <div className="w-5/6 text-start pl-3 text-sm text-white font-semibold">
                  Facebook Ads
                  <p className="text-[10px] p-0 text-gray-400">
                    6 Aug 2022 3:30 PM
                  </p>
                </div>
                <div className="w-1/6">
                  <img src={threeth} alt="" />
                  <div className="flex m-1">
                    <img src={fail} alt="" />
                    <p className="text-xs pl-1 text-red-800">Failed</p>
                  </div>
                </div>
              </div>

              <div className="h-auto w-full flex items-center p-2">
                <div>
                  <img src={receive} alt="" />
                </div>
                <div className="w-5/6 text-start pl-3 text-sm text-white font-semibold">
                  Facebook Ads
                  <p className="text-[10px] p-0 text-gray-400">
                    9 Aug 2022 9:30 PM
                  </p>
                </div>
                <div className="w-1/6">
                  <img src={i3000} alt="" />
                </div>
              </div>

              <div className="h-auto w-full flex items-center p-2">
                <div>
                  <img src={sent} alt="" />
                </div>
                <div className="w-5/6 text-start pl-3 text-sm text-white font-semibold">
                  Youtube Premium
                  <p className="text-[10px] p-0 text-gray-400">
                    9 Aug 2022 8:30 PM
                  </p>
                </div>
                <div className="w-1/6">
                  <img src={d3000} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="bg-black w-[400px] h-[430px] mt-10 ml-5 mr-0 border-4 border-[#2A2D3C] rounded-lg">
            <div className="ml-8 mt-8">
              <div className="text-white font-semibold text-lg text-start">
                Add Money
              </div>
              <div className="w-[330px] border-2 border-gray-600 rounded-lg mt-5">
                <div className="text-sm text-[#888DAA] text-start pt-1 pl-3">
                  Enter Amount to add
                </div>
                <div className="text-white font-semibold text-start text-lg  pb-2 pl-3">
                  100,000
                </div>
              </div>

              <div className="w-[330px]  mt-4 bg-black">
                <div className="grid grid-cols-4">
                  <div className="col-span-3 pl-[175px] py-1">
                    <img src={popular} alt="" />
                  </div>
                  <div></div>
                  <div className="px-[12px] py-[8px] m-1 rounded-lg bg-[#2A2D3C]">
                    <img src={fiveth} alt="" />
                  </div>
                  <div className="px-[12px] py-[8px] m-1 rounded-lg bg-[#2A2D3C]">
                    <img src={tenth} alt="" />
                  </div>
                  <div className="px-[12px] py-[8px] m-1 rounded-lg bg-[#2A2D3C]">
                    <img src={fiftyth} alt="" />
                  </div>
                  <div className="px-[12px] py-[8px] m-1 rounded-lg bg-[#07E57D]">
                    <img src={onelack} alt="" />
                  </div>
                </div>
              </div>

              <div className="flex w-[330px] border border-gray-600 rounded-lg mt-5 bg-[#ffd50540]">
                <div className="w-1/5 my-4 ml-4">
                  <img src={bank} alt="" />
                </div>
                <div className="w-4/5 py-2">
                  <div className="text-white font-semibold text-lg text-start">
                    Send Money To Bank
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-[#ABAFC4]">RTGS/NEFT/IMPS?</div>
                    <div className="text-[#FEBF32] text-sm flex items-center justify-center">
                      Know More
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-[330px] font-bold text-black rounded-lg mt-5 bg-[#07E67D] py-[12px] px-[16px] flex items-center justify-center">
                Continue
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;
