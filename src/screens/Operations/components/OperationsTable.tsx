import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

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

interface OperationsTableProps {
  data: Operation[];
}

export const OperationsTable = ({ data }: OperationsTableProps): JSX.Element => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRow = (id: string) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(id)) {
      newExpandedRows.delete(id);
    } else {
      newExpandedRows.add(id);
    }
    setExpandedRows(newExpandedRows);
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#374151] hover:bg-[#374151]">
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap w-[50px]"></TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">OPNO.</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">DESCRIPTION</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">CART</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">MACHINE TYPE</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">SL</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">SMV</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">WORK AID</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">STATUS</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">GRADE</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">SKILL</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((operation, index) => (
            <TableRow
              key={operation.id}
              className={`border-b border-[#e5e7eb] hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F3F4F6]'}`}
            >
              <TableCell className="py-2">
                <button
                  onClick={() => toggleRow(operation.id)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <svg
                    className={`w-4 h-4 text-gray-600 transition-transform ${
                      expandedRows.has(operation.id) ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </TableCell>
              <TableCell className="font-medium text-[#1f2a37] py-2">
                <div className="flex items-center gap-2">
                  {operation.opno}
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
              </TableCell>
              <TableCell className="text-[#6b7280] max-w-xs truncate py-2">
                {operation.description}
              </TableCell>
              <TableCell className="py-2">
                <svg className="w-5 h-5 text-[#ef4444]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </TableCell>
              <TableCell className="text-[#6b7280] py-2">{operation.machineType}</TableCell>
              <TableCell className="text-[#1f2a37] font-medium py-2">{operation.sl}</TableCell>
              <TableCell className="text-[#1f2a37] font-medium py-2">{operation.smv}</TableCell>
              <TableCell className="text-[#6b7280] py-2">{operation.workAid}</TableCell>
              <TableCell className="py-2">
                <span
                  className={`inline-flex items-center justify-center w-8 h-8 rounded text-sm font-semibold ${
                    operation.status === "P"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {operation.status}
                </span>
              </TableCell>
              <TableCell className="text-[#6b7280] py-2">{operation.grade}</TableCell>
              <TableCell className="text-[#6b7280] py-2">{operation.skill}</TableCell>
              <TableCell className="py-2">
                <div className="flex items-center gap-2">
                  <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                    <svg className="w-5 h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                    <svg className="w-5 h-5 text-[#ef4444]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
