import React from "react";
import { Card } from "../../../components/ui/card";

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

interface MachineGridProps {
  data: Machine[];
}

export const MachineGrid = ({ data }: MachineGridProps): JSX.Element => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((machine) => (
        <Card key={machine.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
          <div className="p-0">
            <div className="bg-gray-50 p-8 flex items-center justify-center border-b border-gray-200">
              <div className="w-24 h-24 flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-[#1f2a37] mb-4">Clicking Machine</h3>

              <div className="space-y-3">
                <div>
                  <p className="text-xs text-[#6b7280] mb-1">RPM</p>
                  <p className="text-sm font-semibold text-[#1f2a37]">2999</p>
                </div>

                <div>
                  <p className="text-xs text-[#6b7280] mb-1">Allowance</p>
                  <p className="text-sm font-semibold text-[#1f2a37]">5</p>
                </div>

                <div>
                  <p className="text-xs text-[#6b7280] mb-1">Machine type</p>
                  <p className="text-sm font-semibold text-[#1f2a37]">Manual</p>
                </div>

                <div>
                  <p className="text-xs text-[#6b7280] mb-1">Stitch class</p>
                  <p className="text-sm font-semibold text-[#1f2a37]">N/A</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-gray-200">
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <svg className="w-5 h-5 text-[#8b5cf6]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <svg className="w-5 h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"/>
                    <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"/>
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <svg className="w-5 h-5 text-[#06b6d4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <svg className="w-5 h-5 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <svg className="w-5 h-5 text-[#ef4444]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
