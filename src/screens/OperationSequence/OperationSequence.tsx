import React, { useState } from "react";
import { TopBar } from "../../components/TopBar";
import { SearchBar } from "../../components/SearchBar";

interface OperationSequenceItem {
  id: string;
  seqNo: number;
  opno: string;
  description: string;
  smv: number;
  machine: string;
  grade: string;
  remarks: string;
  checked: boolean;
}

const mockOperationSequence: OperationSequenceItem[] = [
  {
    id: "1",
    seqNo: 1,
    opno: "12345",
    description: "Introducing the Serger 3000, yo...",
    smv: 0.233,
    machine: "SNLS-UBT",
    grade: "Collar",
    remarks: "",
    checked: false,
  },
  {
    id: "2",
    seqNo: 2,
    opno: "12456",
    description: "Introducing the Serger 3000, yo...",
    smv: 0.233,
    machine: "SNL@300",
    grade: "Collar",
    remarks: "",
    checked: false,
  },
  {
    id: "3",
    seqNo: 3,
    opno: "12456",
    description: "Introducing the Serger 3000, yo...",
    smv: 0.233,
    machine: "Manual",
    grade: "Assembly",
    remarks: "",
    checked: false,
  },
  {
    id: "4",
    seqNo: 4,
    opno: "12456",
    description: "Introducing the Serger 3000, yo...",
    smv: 0.233,
    machine: "SNL@300",
    grade: "Sleeve",
    remarks: "",
    checked: false,
  },
  {
    id: "5",
    seqNo: 5,
    opno: "12456",
    description: "Introducing the Serger 3000, yo...",
    smv: 0.233,
    machine: "SNLS-UBT",
    grade: "Sleeve",
    remarks: "",
    checked: false,
  },
  {
    id: "6",
    seqNo: 6,
    opno: "12456",
    description: "Introducing the Serger 3000, yo...",
    smv: 0.233,
    machine: "SNLS-UBT",
    grade: "Collar",
    remarks: "",
    checked: false,
  },
  {
    id: "7",
    seqNo: 7,
    opno: "12456",
    description: "Introducing the Serger 3000, yo...",
    smv: 0.233,
    machine: "SNLS-UBT",
    grade: "Collar",
    remarks: "",
    checked: false,
  },
  {
    id: "8",
    seqNo: 8,
    opno: "12456",
    description: "Introducing the Serger 3000, yo...",
    smv: 0.233,
    machine: "SNL@3000",
    grade: "Cuff",
    remarks: "",
    checked: false,
  },
  {
    id: "9",
    seqNo: 9,
    opno: "12456",
    description: "Introducing the Serger 3000, yo...",
    smv: 0.233,
    machine: "PRESSING",
    grade: "Cuff",
    remarks: "",
    checked: false,
  },
];

export const OperationSequence = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [operations, setOperations] = useState(mockOperationSequence);
  const [selectAll, setSelectAll] = useState(false);

  const handleRemarksChange = (id: string, value: string) => {
    setOperations((prev) =>
      prev.map((op) => (op.id === id ? { ...op, remarks: value } : op))
    );
  };

  const handleGradeChange = (id: string, value: string) => {
    setOperations((prev) =>
      prev.map((op) => (op.id === id ? { ...op, grade: value } : op))
    );
  };

  const handleDelete = (id: string) => {
    setOperations((prev) => prev.filter((op) => op.id !== id));
  };

  const handleCheckboxChange = (id: string) => {
    setOperations((prev) =>
      prev.map((op) => (op.id === id ? { ...op, checked: !op.checked } : op))
    );
  };

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setOperations((prev) =>
      prev.map((op) => ({ ...op, checked: newSelectAll }))
    );
  };

  return (
    <div className="bg-[#f3f4f6] w-full min-h-screen">
      <main className="flex flex-1 relative flex-col items-end gap-6 px-6 py-0 overflow-x-auto">
        <TopBar />

        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-[#1f2a37] text-[28px] leading-normal">
              Operation Sequence
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2.5 bg-white border border-[#d1d5db] rounded-lg">
                <select className="text-sm text-[#6b7280] bg-transparent focus:outline-none">
                  <option>Method demo</option>
                </select>
              </div>
              <div className="px-4 py-2.5 bg-white border border-[#d1d5db] rounded-lg">
                <input
                  type="text"
                  value="Shirt with ragnal sleeve"
                  readOnly
                  className="text-sm text-[#6b7280] bg-transparent focus:outline-none border-0 min-w-[180px]"
                />
              </div>
              <div className="px-4 py-2.5 bg-white border border-[#d1d5db] rounded-lg">
                <select className="text-sm text-[#6b7280] bg-transparent focus:outline-none">
                  <option>Production</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search Operation Sequence"
            />

            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              <button className="p-2.5 bg-white border border-[#d1d5db] rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </button>
              <button className="p-2.5 bg-white border border-[#d1d5db] rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5 text-[#ef4444]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2.5 bg-white border border-[#d1d5db] rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5 text-[#06b6d4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2.5 bg-white border border-[#d1d5db] rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </button>
              <button className="p-2.5 bg-white border border-[#d1d5db] rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5 text-[#ec4899]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2.5 bg-white border border-[#d1d5db] rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2.5 bg-white border border-[#d1d5db] rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5 text-[#6366f1]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </button>
              <button className="p-2.5 bg-white border border-[#d1d5db] rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5 text-[#8b5cf6]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2.5 bg-white border border-[#d1d5db] rounded-lg hover:bg-gray-50">
                <svg className="w-5 h-5 text-[#1c64f2]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full min-w-[1200px]">
              <thead>
                <tr className="bg-[#374151]">
                  <th className="h-[50px] px-4 py-4 text-left align-middle font-semibold text-white text-xs uppercase tracking-wider whitespace-nowrap w-12">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300 text-[#1c64f2] focus:ring-[#1c64f2]"
                    />
                  </th>
                  <th className="h-[50px] px-4 py-4 text-left align-middle font-semibold text-white text-xs uppercase tracking-wider whitespace-nowrap w-12"></th>
                  <th className="h-[50px] px-4 py-4 text-left align-middle font-semibold text-white text-xs uppercase tracking-wider whitespace-nowrap">SEQ NO.</th>
                  <th className="h-[50px] px-4 py-4 text-left align-middle font-semibold text-white text-xs uppercase tracking-wider whitespace-nowrap">OPNO.</th>
                  <th className="h-[50px] px-4 py-4 text-left align-middle font-semibold text-white text-xs uppercase tracking-wider whitespace-nowrap">DESCRIPTION</th>
                  <th className="h-[50px] px-4 py-4 text-left align-middle font-semibold text-white text-xs uppercase tracking-wider whitespace-nowrap">SMV</th>
                  <th className="h-[50px] px-4 py-4 text-left align-middle font-semibold text-white text-xs uppercase tracking-wider whitespace-nowrap">MACHINE</th>
                  <th className="h-[50px] px-4 py-4 text-left align-middle font-semibold text-white text-xs uppercase tracking-wider whitespace-nowrap">GRADE</th>
                  <th className="h-[50px] px-4 py-4 text-left align-middle font-semibold text-white text-xs uppercase tracking-wider whitespace-nowrap">REMARKS</th>
                  <th className="h-[50px] px-4 py-4 text-left align-middle font-semibold text-white text-xs uppercase tracking-wider whitespace-nowrap">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {operations.map((operation, index) => (
                  <tr key={operation.id} className={`border-b border-[#e5e7eb] hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F3F4F6]'}`}>
                    <td className="h-[50px] px-4 py-2 align-middle">
                      <input
                        type="checkbox"
                        checked={operation.checked}
                        onChange={() => handleCheckboxChange(operation.id)}
                        className="rounded border-gray-300 text-[#1c64f2] focus:ring-[#1c64f2]"
                      />
                    </td>
                    <td className="h-[50px] px-4 py-2 align-middle">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                    </td>
                    <td className="h-[50px] px-4 py-2 align-middle text-[#1f2a37] font-medium">{operation.seqNo}</td>
                    <td className="h-[50px] px-4 py-2 align-middle text-[#1f2a37] font-medium">{operation.opno}</td>
                    <td className="h-[50px] px-4 py-2 align-middle text-[#6b7280] max-w-xs truncate">{operation.description}</td>
                    <td className="h-[50px] px-4 py-2 align-middle text-[#1f2a37] font-medium">{operation.smv}</td>
                    <td className="h-[50px] px-4 py-2 align-middle text-[#6b7280]">{operation.machine}</td>
                    <td className="h-[50px] px-4 py-2 align-middle">
                      <select
                        value={operation.grade}
                        onChange={(e) => handleGradeChange(operation.id, e.target.value)}
                        className="w-full min-w-[120px] px-3 py-2 text-sm text-[#6b7280] bg-white border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#1c64f2] focus:border-transparent"
                      >
                        <option>Collar</option>
                        <option>Assembly</option>
                        <option>Sleeve</option>
                        <option>Cuff</option>
                      </select>
                    </td>
                    <td className="h-[50px] px-4 py-2 align-middle">
                      <input
                        type="text"
                        value={operation.remarks}
                        onChange={(e) => handleRemarksChange(operation.id, e.target.value)}
                        placeholder="Enter remark"
                        className="w-full min-w-[150px] px-3 py-2 text-sm text-[#6b7280] bg-white border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#1c64f2] focus:border-transparent placeholder-gray-400"
                      />
                    </td>
                    <td className="h-[50px] px-4 py-2 align-middle">
                      <button
                        onClick={() => handleDelete(operation.id)}
                        className="p-1.5 hover:bg-gray-100 rounded transition-colors"
                      >
                        <svg className="w-5 h-5 text-[#ef4444]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};
