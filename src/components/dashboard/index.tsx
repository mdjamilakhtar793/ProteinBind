"use client";
import dynamic from "next/dynamic";
import React from "react";

import { AtomIcon, MessageCircle, Network, SearchIcon } from "lucide-react";
import CTACart from "./Components/CTAcart";

const DashboardCardMap = dynamic(
  () => import("@/components/Dashboard/Components/DashboardCardMap"),
  {
    ssr: false,
  },
);

const DashboardCardChat = dynamic(
  () => import("@/components/Dashboard/Components/DashboardCardChart"),
  {
    ssr: false,
  },
);

const Index: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CTACart subtitle="get access to more molecules" title="Molecule Bank">
          <AtomIcon />
        </CTACart>
        <CTACart
          subtitle="get access to more molecules"
          title="Generate Molecule"
        >
          <Network />
        </CTACart>
        <CTACart
          subtitle="get access to more molecules"
          title="Search Compounds"
        >
          <SearchIcon />
        </CTACart>
        <CTACart
          subtitle="get access to more molecules"
          title="Collaborative Research"
        >
          <MessageCircle />
        </CTACart>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <DashboardCardChat />
        <DashboardCardMap />
      </div>
    </>
  );
};

export default Index;
