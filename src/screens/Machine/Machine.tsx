import React, { useState } from "react";
import { TopBar } from "../../components/TopBar";
import { Button } from "../../components/ui/button";
import { MachineGrid } from "./components/MachineGrid";
import { MachineTable } from "./components/MachineTable";
import { SearchBar } from "../../components/SearchBar";

interface Machine {
  id: string;
  name: string;
  rpm: number;
  allowance: number;
  machineType: string;
  stitchClass: string;
  threadWaste: number;
  factory: string;
  image: string;
}

const mockMachines: Machine[] = [
  {
    id: "67890",
    name: "Serger 3000",
    rpm: 6000,
    allowance: 6,
    machineType: "Sewing",
    stitchClass: "XLR-450",
    threadWaste: 9.12,
    factory: "TechNova Solutions",
    image: "/computer-speaker.svg",
  },
  {
    id: "54321",
    name: "Overlock Pro 500",
    rpm: 4000,
    allowance: 4,
    machineType: "Manual",
    stitchClass: "QRT-220",
    threadWaste: 4.34,
    factory: "Quantum Innovations",
    image: "/computer-speaker.svg",
  },
  {
    id: "98765",
    name: "StitchMaster 700",
    rpm: 4000,
    allowance: 4,
    machineType: "Sewing",
    stitchClass: "MNB-780",
    threadWaste: 5.34,
    factory: "AeroDynamics Corp",
    image: "/computer-speaker.svg",
  },
  {
    id: "13579",
    name: "Speedy Stitcher...",
    rpm: 1000,
    allowance: 1,
    machineType: "Sewing",
    stitchClass: "ZXY-910",
    threadWaste: 23.23,
    factory: "NexGen Technologies",
    image: "/computer-speaker.svg",
  },
  {
    id: "24680",
    name: "Quick Sew Jogg...",
    rpm: 4000,
    allowance: 4,
    machineType: "Sewing",
    stitchClass: "ABC-123",
    threadWaste: 34.34,
    factory: "FusionWorks Inc.",
    image: "/computer-speaker.svg",
  },
  {
    id: "11223",
    name: "Easy Stitch Jog...",
    rpm: 3000,
    allowance: 3,
    machineType: "Sewing",
    stitchClass: "JKL-456",
    threadWaste: 1.33,
    factory: "Vertex Systems",
    image: "/computer-speaker.svg",
  },
  {
    id: "33445",
    name: "Jogger Stitcher...",
    rpm: 3000,
    allowance: 3,
    machineType: "Sewing",
    stitchClass: "PQR-789",
    threadWaste: 1.33,
    factory: "Synergy Labs",
    image: "/computer-speaker.svg",
  },
  {
    id: "55667",
    name: "Jogger Pro 800",
    rpm: 3000,
    allowance: 3,
    machineType: "Sewing",
    stitchClass: "STU-321",
    threadWaste: 1.33,
    factory: "Pinnacle Enterprises",
    image: "/computer-speaker.svg",
  },
  {
    id: "77889",
    name: "Jogger Elite 900",
    rpm: 3000,
    allowance: 3,
    machineType: "Sewing",
    stitchClass: "VWX-654",
    threadWaste: 1.33,
    factory: "Optimum Dynamics",
    image: "/computer-speaker.svg",
  },
];

export const Machine = (): JSX.Element => {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-[#f3f4f6] w-full min-h-screen">
      <main className="flex flex-1 relative flex-col items-end gap-6 px-6 py-0 overflow-x-auto">
        <TopBar />

        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-[#1f2a37] text-[28px] leading-normal">
              Machine
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
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1c64f2] hover:bg-[#1a56db] rounded-lg border-0"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="text-white text-sm font-medium">
                  Add new machine
                </span>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 mb-6">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search Machine"
            />

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-white border border-[#d1d5db] rounded-lg">
                <span className="text-sm text-[#6b7280]">Sort by</span>
                <svg className="w-4 h-4 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className="flex items-center gap-2">
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
              </div>
            </div>
          </div>

          {viewMode === "grid" ? (
            <MachineGrid data={mockMachines} />
          ) : (
            <MachineTable data={mockMachines} />
          )}
        </div>
      </main>
    </div>
  );
};
