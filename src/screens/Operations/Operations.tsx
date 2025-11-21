import React, { useState } from "react";
import { TopBar } from "../../components/TopBar";
import { Button } from "../../components/ui/button";
import { OperationsTable } from "./components/OperationsTable";
import { OperationDrawer } from "./components/OperationDrawer";
import { SearchBar } from "../../components/SearchBar";

interface Operation {
  id: string;
  opno: string;
  description: string;
  cart: boolean;
  machineType: string;
  sl: number;
  smv: number;
  workAid: string;
  status: string;
  grade: string;
  skill: string;
}

const mockOperations: Operation[] = [
  {
    id: "1",
    opno: "12345",
    description: "Introducing the Serger 3000, your ulti...",
    cart: true,
    machineType: "SNLS-UBT",
    sl: 0,
    smv: 0.233,
    workAid: "--",
    status: "P",
    grade: "Operator",
    skill: "Easy",
  },
  {
    id: "2",
    opno: "12456",
    description: "Introducing the Serger 3000, your ulti...",
    cart: true,
    machineType: "SNLS-UBT",
    sl: 0,
    smv: 0.233,
    workAid: "--",
    status: "E",
    grade: "Operator",
    skill: "Easy",
  },
  {
    id: "3",
    opno: "12456",
    description: "Introducing the Serger 3000, your ulti...",
    cart: true,
    machineType: "SNLS-UBT",
    sl: 0,
    smv: 0.233,
    workAid: "--",
    status: "P",
    grade: "Operator",
    skill: "Easy",
  },
  {
    id: "4",
    opno: "12456",
    description: "Introducing the Serger 3000, your ulti...",
    cart: true,
    machineType: "SNLS-UBT",
    sl: 0,
    smv: 0.233,
    workAid: "--",
    status: "P",
    grade: "Operator",
    skill: "Easy",
  },
  {
    id: "5",
    opno: "12456",
    description: "Introducing the Serger 3000, your ulti...",
    cart: true,
    machineType: "SNLS-UBT",
    sl: 0,
    smv: 0.233,
    workAid: "--",
    status: "E",
    grade: "Operator",
    skill: "Easy",
  },
  {
    id: "6",
    opno: "12456",
    description: "Introducing the Serger 3000, your ulti...",
    cart: true,
    machineType: "SNLS-UBT",
    sl: 0,
    smv: 0.233,
    workAid: "--",
    status: "P",
    grade: "Operator",
    skill: "Easy",
  },
  {
    id: "7",
    opno: "12456",
    description: "Introducing the Serger 3000, your ulti...",
    cart: true,
    machineType: "SNLS-UBT",
    sl: 0,
    smv: 0.233,
    workAid: "--",
    status: "E",
    grade: "Operator",
    skill: "Easy",
  },
  {
    id: "8",
    opno: "12456",
    description: "Introducing the Serger 3000, your ulti...",
    cart: true,
    machineType: "SNLS-UBT",
    sl: 0,
    smv: 0.233,
    workAid: "--",
    status: "P",
    grade: "Operator",
    skill: "Easy",
  },
  {
    id: "9",
    opno: "12456",
    description: "Introducing the Serger 3000, your ulti...",
    cart: true,
    machineType: "SNLS-UBT",
    sl: 0,
    smv: 0.233,
    workAid: "--",
    status: "P",
    grade: "Operator",
    skill: "Easy",
  },
];

export const Operations = (): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-[#f3f4f6] w-full min-h-screen">
      <main className="flex flex-1 relative flex-col items-end gap-6 px-6 py-0 overflow-x-auto">
        <TopBar />
        <OperationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-[#1f2a37] text-[28px] leading-normal">
              Operations
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
                  Add new operation
                </span>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 mb-6">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search Operations"
            />
            <div className="flex items-center gap-2 px-3 py-2 bg-white border border-[#d1d5db] rounded-lg">
              <span className="text-sm text-[#6b7280]">Sort by</span>
              <svg className="w-4 h-4 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <OperationsTable data={mockOperations} />
        </div>
      </main>
    </div>
  );
};
