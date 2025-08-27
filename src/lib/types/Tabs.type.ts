import { ReactNode } from "react";

export type TabTrigger = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type TabContent = {
  value: string;
  children: ReactNode;
};

export type TTabs = {
  defaultValue: string;
  children: ReactNode;
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export type TTabTriggers = {
  triggerList: TabTrigger[];
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  disabledClassName?: string;
};

export type TTabContent = {
  value: string;
  children: ReactNode;
  className?: string;
};