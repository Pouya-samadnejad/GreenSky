import React from "react";
import { type LayoutProps } from "@/.next/types/app/main/layout";

export default function layout({ children }: LayoutProps) {
  return <div className=" px-[70px]">{children}</div>;
}
