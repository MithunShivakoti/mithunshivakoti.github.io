import type { Metadata } from "next";
import { siteConfig } from "@/data/portfolio";
import ResearchPage from "./ResearchPage";

export const metadata: Metadata = {
  title: "Research Archive",
  description: `All publications and research contributions by ${siteConfig.name}. Papers at ICLR, NeurIPS, IJCAI, and more.`,
};

export default function Page() {
  return <ResearchPage />;
}
