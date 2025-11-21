import React from "react";
import { AnalysisChartsSection } from "./sections/AnalysisChartsSection";
import { BoardListingSection } from "./sections/BoardListingSection";
import { DashboardOverviewSection } from "./sections/DashboardOverviewSection";
import { DataVisualizationSection } from "./sections/DataVisualizationSection";
import { ProductDetailsSection } from "./sections/ProductDetailsSection";
import { StyleAnalysisSection } from "./sections/StyleAnalysisSection";
import { UserStatsSection } from "./sections/UserStatsSection";

export const Dashboard = (): JSX.Element => {
  return (
    <div className="bg-[#f3f4f6] w-full min-h-screen flex">
      <main className="flex flex-1 relative flex-col items-end gap-6 px-6 py-6 overflow-x-auto">
        <AnalysisChartsSection />
        <DataVisualizationSection />
        <DashboardOverviewSection />
        <UserStatsSection />
        <StyleAnalysisSection />
        <BoardListingSection />
        <ProductDetailsSection />
      </main>
    </div>
  );
};
