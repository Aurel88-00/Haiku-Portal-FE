'use client'
import { createContext, useContext } from "react";

export const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: (value: string) => void;
  orientation: "horizontal" | "vertical";
} | null>(null);

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a Tabs provider");
  }
  return context;
};