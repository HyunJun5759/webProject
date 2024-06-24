"use client";

import * as ContextMenu from "@radix-ui/react-context-menu";
import { useState } from "react";

const submenuItem = {
  name: "Plugins",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </svg>
  ),
  submenu: [
    {
      name: "Unsplash",
      command: "",
    },
    {
      name: "Inbox Cleaner",
      command: "",
    },
    {
      name: "Auto layout",
      command: "",
    },
  ],
};

export default function LeftBar({ selectedIpv4Menu, menuItems, onClickIpv4 }) {
  const [ishidden, setIdhidden] = useState({
    icqaServer: false,
    ipv4: false,
    fillter: false,
    ipv6: false,
  });

  function onHidden(hiddenTarget, ishidden) {
    console.log(ishidden);
    setIdhidden((prev) => {
      return {
        ...prev,
        [hiddenTarget]: ishidden,
      };
    });
  }
  return (
    <div className="border border-black w-[25%]">
      <div className="ml-3 overflow-hidden">
        <div className="relative">DHCP</div>

        <div className="relative left-7">
          <div className="flex">
            <button
              onClick={() => {
                ishidden.icqaServer
                  ? onHidden("icqaServer", false)
                  : onHidden("icqaServer", true);
              }}
            >
              +
            </button>
            <span>ICQAServer</span>
          </div>

          <div className={`relative left-7 ${ishidden.icqaServer && "hidden"}`}>
            <ContextMenu.Root>
              <ContextMenu.Trigger onClick={onClickIpv4}>
                <div className="flex">
                  <button
                    onClick={() => {
                      ishidden.ipv4
                        ? onHidden("ipv4", false)
                        : onHidden("ipv4", true);
                    }}
                  >
                    +
                  </button>
                  <span>IPv4</span>
                </div>
              </ContextMenu.Trigger>

              <ContextMenu.Portal>
                <ContextMenu.Content
                  className="w-60 bg-[#FDFDFD] shadow-md border text-[13px]"
                  sideOffset={5}
                  align="end"
                >
                  <div className="flex flex-row">
                    <div className="w-[14%] bg-[#F8F8F8]"></div>
                    <div className="flex flex-col w-[86%] pl-3">
                      {menuItems.map((group, idx) => (
                        <>
                          <ContextMenu.Separator className="h-px bg-gray-200" />
                          {group.map((item) => (
                            <ContextMenu.Item
                              key={idx}
                              disabled={item.disabled}
                              onClick={!item.disabled && item.onClick}
                              className={`${
                                item.disabled
                                  ? "text-[#6E6E6E]"
                                  : "text-black font-bold"
                              }  w-full flex items-center py-1.5 duration-150 outline-none select-none`}
                            >
                              <div className="bg-white w-[85%]">
                                {item.name}
                              </div>
                            </ContextMenu.Item>
                          ))}
                        </>
                      ))}
                    </div>
                  </div>
                </ContextMenu.Content>
              </ContextMenu.Portal>
            </ContextMenu.Root>
            <div className={`relative left-5 ${ishidden.ipv4 && "hidden"}`}>
              <div className="">
                <span>서버옵션</span>
              </div>
              <div>
                <div className="flex">
                  <button
                    onClick={() => {
                      ishidden.fillter
                        ? onHidden("fillter", false)
                        : onHidden("fillter", true);
                    }}
                  >
                    +
                  </button>
                  <span>필터</span>
                </div>

                <div
                  className={`relative left-5 ${ishidden.fillter && "hidden"}`}
                >
                  <div>허용</div>
                  <div>거부</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex">
                <button
                  onClick={() => {
                    ishidden.ipv6
                      ? onHidden("ipv6", false)
                      : onHidden("ipv6", true);
                  }}
                >
                  +
                </button>
                <span>IPv6</span>
              </div>
              <div className={`relative left-5 ${ishidden.ipv6 && "hidden"}`}>
                서버 옵션
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
