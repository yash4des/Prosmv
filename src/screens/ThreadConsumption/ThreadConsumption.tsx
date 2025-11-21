import React, { useState } from "react";
import { TopBar } from "../../components/TopBar";
import { Button } from "../../components/ui/button";
import { SearchBar } from "../../components/SearchBar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

interface ThreadConsumptionRow {
  id: string;
  seqNo: number;
  opno: string;
  description: string;
  stdMin: number;
  subsection: string;
  machine: string;
  seamLength: number;
  spc: number;
  threadFactor: number;
  totalThread: number;
}

const mockData: ThreadConsumptionRow[] = [
  {
    id: "1",
    seqNo: 1,
    opno: "12345",
    description: "Introducing the Serger 3000, your u...",
    stdMin: 0.233,
    subsection: "Operator",
    machine: "Heat seal",
    seamLength: 42,
    spc: 2.34,
    threadFactor: 0,
    totalThread: 0,
  },
  {
    id: "2",
    seqNo: 2,
    opno: "12456",
    description: "Introducing the Serger 3000, your u...",
    stdMin: 0.233,
    subsection: "Operator",
    machine: "SNLS-SN",
    seamLength: 57,
    spc: 23.4,
    threadFactor: 25,
    totalThread: 25,
  },
  {
    id: "3",
    seqNo: 3,
    opno: "12456",
    description: "Introducing the Serger 3000, your u...",
    stdMin: 0.233,
    subsection: "Operator",
    machine: "3TOL",
    seamLength: 89,
    spc: 44.5,
    threadFactor: 0,
    totalThread: 0,
  },
  {
    id: "4",
    seqNo: 4,
    opno: "12456",
    description: "Introducing the Serger 3000, your u...",
    stdMin: 0.233,
    subsection: "Operator",
    machine: "4TOL",
    seamLength: 34,
    spc: 12.3,
    threadFactor: 23,
    totalThread: 23,
  },
  {
    id: "5",
    seqNo: 5,
    opno: "12456",
    description: "Introducing the Serger 3000, your u...",
    stdMin: 0.233,
    subsection: "Operator",
    machine: "FLATLOCK",
    seamLength: 76,
    spc: 23.2,
    threadFactor: 24,
    totalThread: 24,
  },
  {
    id: "6",
    seqNo: 6,
    opno: "12456",
    description: "Introducing the Serger 3000, your u...",
    stdMin: 0.233,
    subsection: "Operator",
    machine: "3TOL",
    seamLength: 15,
    spc: 3.4,
    threadFactor: 14,
    totalThread: 14,
  },
  {
    id: "7",
    seqNo: 7,
    opno: "12456",
    description: "Introducing the Serger 3000, your u...",
    stdMin: 0.233,
    subsection: "Operator",
    machine: "DNCS",
    seamLength: 63,
    spc: 22.3,
    threadFactor: 16,
    totalThread: 16,
  },
  {
    id: "8",
    seqNo: 8,
    opno: "12456",
    description: "Introducing the Serger 3000, your u...",
    stdMin: 0.233,
    subsection: "Operator",
    machine: "SNLS-UBT",
    seamLength: 28,
    spc: 43.2,
    threadFactor: 19,
    totalThread: 19,
  },
  {
    id: "9",
    seqNo: 9,
    opno: "12456",
    description: "Introducing the Serger 3000, your u...",
    stdMin: 0.233,
    subsection: "Operator",
    machine: "SNLS-UBT",
    seamLength: 91,
    spc: 12.4,
    threadFactor: 34,
    totalThread: 34,
  },
];

export const ThreadConsumption = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-[#f3f4f6] w-full min-h-screen">
      <main className="flex flex-1 relative flex-col items-end gap-6 px-6 py-0 overflow-x-auto">
        <TopBar />

        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-[#1f2a37] text-[28px] leading-normal">
              Thread consumption
            </h2>
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
          </div>

          <div className="flex items-center justify-between gap-4 mb-6">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search Customer"
            />
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-solid border-[#d1d5db] hover:bg-gray-50"
              >
                <span className="text-sm text-[#374151] font-medium">
                  6771 CM/Garment
                </span>
              </Button>
              <Button
                variant="outline"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-solid border-[#d1d5db] hover:bg-gray-50"
              >
                <span className="text-sm text-[#374151] font-medium">
                  T shirt
                </span>
              </Button>
              <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-solid border-[#d1d5db]">
                <span className="text-sm text-[#374151] font-medium">
                  Select Costing
                </span>
                <svg className="w-4 h-4 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#374151] hover:bg-[#374151] border-b-0">
                  <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                    SEQ NO.
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                    OPNO.
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                    DESCRIPTION
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                    STD. MIN.
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                    SUBSECTION
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                    MACHINE
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                    SEAMLENGHT
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                    SPC
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                    THREAD FACTOR
                  </TableHead>
                  <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                    TOTAL THREAD
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.map((row, index) => (
                  <TableRow key={row.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F3F4F6]'}`}>
                    <TableCell className="font-medium text-gray-900 py-2">
                      {row.seqNo}
                    </TableCell>
                    <TableCell className="font-medium text-gray-900 py-2">
                      {row.opno}
                    </TableCell>
                    <TableCell className="text-gray-600 max-w-xs truncate py-2">
                      {row.description}
                    </TableCell>
                    <TableCell className="text-gray-600 py-2">
                      {row.stdMin}
                    </TableCell>
                    <TableCell className="text-gray-600 py-2">
                      {row.subsection}
                    </TableCell>
                    <TableCell className="text-gray-600 py-2">
                      {row.machine}
                    </TableCell>
                    <TableCell className="text-gray-600 py-2">
                      {row.seamLength}
                    </TableCell>
                    <TableCell className="text-gray-600 py-2">
                      {row.spc}
                    </TableCell>
                    <TableCell className="text-gray-600 py-2">
                      {row.threadFactor}
                    </TableCell>
                    <TableCell className="text-gray-600 py-2">
                      {row.totalThread}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  );
};
