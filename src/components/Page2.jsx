import React, { Component } from "react";
import { getData } from "../data.js";
import bell from "../images/Bell_pin_light.png";
import user from "../images/item-left.png";
import growpital from "../images/Growpital.png";
import home from "../images/Home.png";
import contact from "../images/Contact Us.png";
import about from "../images/About.png";
import service from "../images/Service.png";
import close from "../images/close.png";
import receive from "../images/1.png";
import { FaRupeeSign } from "react-icons/fa";
import transaction from "../images/transaction.png";
import rupees from "../images/rupees.png";
import copy from "../images/copy.png";
import helpbtn from "../images/helpbtn.png";

class Page2 extends Component {
  state = {
    data: getData(),
  };
  render() {
    return (
      <>
        <div>
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

          <div className="flex justify-center bg-[#2A2D3C] bg-opacity-80 backdrop-blur-xl">
            <div className="h-auto w-[430px] bg-[#2A2D3C] px-5 py-5 ">
              <div className="flex justify-end w-full">
                <img src={close} alt="" />
              </div>
              <div className="flex justify-between">
                <div className="w-3/5 text-sm text-start text-[#CCCDCC]">
                  Money added to wallet <br />
                  from bank account{" "}
                </div>
                <div className="pr-8 pt-2 text-white">
                  <img src={receive} alt="" />
                </div>
              </div>

              <div>
                {this.state.data.map((d) => (
                  <>
                    <div className="flex">
                      <div className="text-white flex items-center">
                        <FaRupeeSign />
                      </div>
                      <div className="font-bold text-white">
                        {d.transactionamount}
                      </div>
                    </div>
                    <p className="text-xs text-start pt-1 text-gray-400">
                      {d.transactiondate}
                    </p>
                    <div className="pt-3">
                      <img src={transaction} alt="" />
                    </div>
                    <div className="h-auto mt-4">
                      <div className="h-[130px] flex">
                        <div className="w-4/5">
                          <div className="text-sm text-[#FEBF32] text-start pl-2 ">
                            From
                          </div>
                          <div className="text-white font-bold text-start text-lg pl-2">
                            {d.senderDetails.sender}
                          </div>
                          <div className="flex">
                            <div className="italic text-sm text-white pl-2">
                              {d.senderDetails.bank},
                            </div>
                            <div className="italic text-sm text-white pl-1">
                              IFSC
                            </div>
                            <div className="italic text-sm text-white pl-1">
                              {d.senderDetails.IFSC}
                            </div>
                          </div>
                          <div className="flex">
                            <div className="italic text-sm text-white pl-2">
                              A/c No.
                            </div>
                            <div className="italic text-sm text-white pl-2">
                              {d.senderDetails.accountno}
                            </div>
                          </div>
                          <p className="text-xs text-start pt-1 pl-2 text-gray-400">
                            {d.senderDetails.transactiondate}
                          </p>
                        </div>
                        <div className="w-1/5 flex justify-center">
                          <div className="w-[50px] h-[50px] bg-[#242632] rounded-full flex justify-center items-center ">
                            <p className="font-bold text-xl text-white">SM</p>
                          </div>
                        </div>
                      </div>

                      <div className="h-[130px] flex">
                        <div className="w-4/5">
                          <div className="text-sm text-[#FEBF32] text-start pl-2 ">
                            To
                          </div>
                          <div className="text-white font-bold text-start text-lg pl-2">
                            {d.recieverDetails.reciever}
                          </div>
                          <div className="flex">
                            <div className="italic text-sm text-white pl-2">
                              {d.recieverDetails.wallet},
                            </div>
                          </div>
                          <div className="flex">
                            <div className="italic text-sm text-white pl-2">
                              Ref No.
                            </div>
                            <div className="italic text-sm text-white pl-2">
                              {d.recieverDetails.referenceno}
                            </div>
                          </div>
                          <p className="text-xs text-start pt-1 pl-2 text-gray-400">
                            {d.recieverDetails.transactiondate}
                          </p>
                        </div>
                        <div className="w-1/5">
                          <div className="flex justify-center">
                            <img src={rupees} alt="" />
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="">
                          <div className="flex">
                            <div className="text-white font-semibold text-sm">
                              Payment Method :
                            </div>
                            <div className="text-white text-sm pl-1">
                              {d.paymentmethod}
                            </div>
                          </div>
                          <div className="flex">
                            <div className="text-white font-semibold text-sm">
                              Transaction ID :
                            </div>
                            <div className="text-white text-sm pl-1">
                              {d.transactionId}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center pl-2">
                          <img src={copy} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex justify-center mt-5">
                      <img src={helpbtn} alt="" />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Page2;
