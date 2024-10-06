import DefaultLayout from "@/components/Layouts/DefaultLayouts";
import Image from "next/image";
import { Metadata } from "next";
import Index from "@/components/Dashboard";

export const metadata: Metadata = {
  title: "Protien Bind a leading research platform for drugs discovery",
  description: "this is a medical purpose uses",
};
export default function Home() {
  return (
    <DefaultLayout>
      <Index />
    </DefaultLayout>
  );
}
