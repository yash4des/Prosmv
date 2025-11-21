import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

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

interface MachineTableProps {
  data: Machine[];
}

export const MachineTable = ({ data }: MachineTableProps): JSX.Element => {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#374151] hover:bg-[#374151]">
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">MACHINE ID</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">MACHINE</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">RPM</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">ALLOWANCE</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">MACHINE TYPE</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">STITCH CLASS</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">THREAD WASTE</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">FACTORY</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((machine, index) => (
            <TableRow
              key={machine.id}
              className={`border-b border-[#e5e7eb] hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F3F4F6]'}`}
            >
              <TableCell className="font-medium text-[#1f2a37] py-2">{machine.id}</TableCell>
              <TableCell className="py-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-[#1f2a37]">{machine.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-[#1f2a37] font-medium py-2">{machine.rpm}</TableCell>
              <TableCell className="text-[#1f2a37] font-medium py-2">{machine.allowance}</TableCell>
              <TableCell className="text-[#6b7280] py-2">{machine.machineType}</TableCell>
              <TableCell className="text-[#6b7280] py-2">{machine.stitchClass}</TableCell>
              <TableCell className="text-[#1f2a37] font-medium py-2">{machine.threadWaste}</TableCell>
              <TableCell className="text-[#6b7280] py-2">{machine.factory}</TableCell>
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
