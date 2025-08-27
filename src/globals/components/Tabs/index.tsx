'use client'
import { TabsContext, useTabs } from "@/context/tabs.context";
import {
  TabTrigger,
  TTabContent,
  TTabs,
  TTabTriggers,
} from "@/lib/types/Tabs.type";
import { useState } from "react";

export const Tabs = ({
  defaultValue = "",
  children,
  className = "",
  orientation = "horizontal",
}: TTabs) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, orientation }}>
      <div
        className={`border border-gray-300 rounded-lg overflow-hidden ${className} ${
          orientation === "vertical" ? "flex" : "flex flex-col"
        }`}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// Triggers component
export const TabTriggers = ({
  triggerList = [],
  className = "",
  activeClassName = "text- bg-[var(--primary)]",
  inactiveClassName = "text-gray-600",
  disabledClassName = "text-gray-400 cursor-not-allowed",
}: TTabTriggers) => {
  const { activeTab, setActiveTab, orientation } = useTabs();

  return (
    <div
      className={`bg-gray-100 ${
        orientation === "vertical"
          ? "flex flex-col border-r border-gray-300 min-w-[150px]"
          : "flex border-b border-gray-300"
      } ${className}`}
      role="tablist"
    >
      {triggerList.map(({ value, label, disabled }: TabTrigger) => (
        <button
          key={value}
          role="tab"
          aria-selected={activeTab === value}
          aria-disabled={disabled}
          onClick={() => !disabled && setActiveTab(value)}
          className={`px-4 py-3 font-medium transition-all duration-200 relative ${
            activeTab === value ? activeClassName : inactiveClassName
          } ${disabled ? disabledClassName : "hover:bg-gray-200"} ${
            orientation === "vertical" ? "text-left" : "text-center"
          }`}
          disabled={disabled}
        >
          {label}
          {activeTab === value && (
            <div
              className={`absolute bg-blue-500 ${
                orientation === "vertical"
                  ? "top-0 bottom-0 right-0 w-0.5"
                  : "bottom-0 left-0 right-0 h-0.5"
              }`}
            />
          )}
        </button>
      ))}
    </div>
  );
};

// Content component
export const TabContent = ({
  value = "",
  children,
  className = "",
}: TTabContent) => {
  const { activeTab } = useTabs();

  return (
    <div
      role="tabpanel"
      hidden={activeTab !== value}
      className={`p-5 ${className} ${
        activeTab === value ? "animate-fadeIn" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};
