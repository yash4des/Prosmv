import React, { useState } from "react";
import { TopBar } from "../../components/TopBar";
import { Button } from "../../components/ui/button";
import { StyleOrderTable } from "./components/StyleOrderTable";
import { StyleOrderGrid } from "./components/StyleOrderGrid";
import { StyleOrderDrawer } from "../../components/StyleOrderDrawer";
import { SearchBar } from "../../components/SearchBar";

interface StyleOrder {
  id: number;
  style: string;
  customerName: string;
  factoryName: string;
  customerType: string;
  costSMV: number;
  orders: number;
  sizeGrid: string;
  prodSMV: string;
  image: string;
}

const mockStyleOrders: StyleOrder[] = [
  {
    id: 1,
    style: "Skirt",
    customerName: "Liam",
    factoryName: "MethodDemo",
    customerType: "Customer",
    costSMV: 7,
    orders: 12000,
    sizeGrid: "M",
    prodSMV: "Customer",
    image: "/avatar.png",
  },
  {
    id: 2,
    style: "Jogger",
    customerName: "Kumar Overlook Pro 500",
    factoryName: "MethodDemo",
    customerType: "Customer",
    costSMV: 3,
    orders: 12000,
    sizeGrid: "L",
    prodSMV: "Customer",
    image: "/avatar.png",
  },
  {
    id: 3,
    style: "Jogger",
    customerName: "Lisa's StitchMaster 700",
    factoryName: "MethodDemo",
    customerType: "Customer",
    costSMV: 5,
    orders: 12000,
    sizeGrid: "S",
    prodSMV: "Customer",
    image: "/avatar.png",
  },
  {
    id: 4,
    style: "Jogger",
    customerName: "Sam's Speedy Stitcher...",
    factoryName: "MethodDemo",
    customerType: "Customer",
    costSMV: 9,
    orders: 12000,
    sizeGrid: "XL",
    prodSMV: "Customer",
    image: "/avatar.png",
  },
  {
    id: 5,
    style: "Jogger",
    customerName: "Kumar's Quick Sew Jog...",
    factoryName: "MethodDemo",
    customerType: "Customer",
    costSMV: 1,
    orders: 12000,
    sizeGrid: "XXL",
    prodSMV: "Customer",
    image: "/avatar.png",
  },
  {
    id: 6,
    style: "Jogger",
    customerName: "Rajesh's Easy Stitch Jo...",
    factoryName: "MethodDemo",
    customerType: "Customer",
    costSMV: 4,
    orders: 12000,
    sizeGrid: "M",
    prodSMV: "Customer",
    image: "/avatar.png",
  },
];

export const StyleAndOrder = (): JSX.Element => {
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-[#f3f4f6] w-full min-h-screen">
      <main className="flex flex-1 relative flex-col items-end gap-6 px-6 py-0 overflow-x-auto">
        <TopBar />
        <StyleOrderDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-[#1f2a37] text-[28px] leading-normal">
              Style and Order
            </h2>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-solid border-[#d1d5db] hover:bg-gray-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span className="text-[#374151] text-sm font-medium">
                  Download report
                </span>
              </Button>
              <Button
                onClick={() => setIsDrawerOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1c64f2] hover:bg-[#1a56db] rounded-lg border-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-white text-sm font-medium">
                  Add new style
                </span>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 mb-6">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search Style & Order"
            />

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-white border border-[#d1d5db] rounded-lg">
                <span className="text-sm text-[#6b7280]">Sort by</span>
                <svg className="w-4 h-4 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 bg-white border border-[#d1d5db] rounded hover:bg-gray-50">
                  <svg className="w-5 h-5 text-[#ef4444]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </button>

                <button
                  onClick={() => setViewMode("table")}
                  className={`p-2 border rounded ${
                    viewMode === "table"
                      ? "bg-[#dbeafe] border-[#3b82f6]"
                      : "bg-white border-[#d1d5db] hover:bg-gray-50"
                  }`}
                >
                  <svg className="w-5 h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
                  </svg>
                </button>

                <button className="p-2 bg-white border border-[#d1d5db] rounded hover:bg-gray-50">
                  <svg className="w-5 h-5 text-[#8b5cf6]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm8 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zM3 12a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4zm8 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                </button>

                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 border rounded ${
                    viewMode === "grid"
                      ? "bg-[#dbeafe] border-[#3b82f6]"
                      : "bg-white border-[#d1d5db] hover:bg-gray-50"
                  }`}
                >
                  <svg className="w-5 h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>

                <button className="p-2 bg-white border border-[#d1d5db] rounded hover:bg-gray-50">
                  <svg className="w-5 h-5 text-[#6b7280]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {viewMode === "table" ? (
            <StyleOrderTable data={mockStyleOrders} />
          ) : (
            <StyleOrderGrid data={mockStyleOrders} />
          )}
        </div>
      </main>
    </div>
  );
};
