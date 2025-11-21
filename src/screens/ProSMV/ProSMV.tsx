import React, { useState } from "react";
import { TopBar } from "../../components/TopBar";

interface TableRow {
  id: string;
  sno: number;
  code: string;
  freq: number;
  description: string;
  tmu: number;
  extTmu: number;
  allow: number;
}

const mockTableData: TableRow[] = [
  {
    id: "1",
    sno: 1,
    code: "P1",
    freq: 1,
    description: "Sew to hold",
    tmu: 65,
    extTmu: 65,
    allow: 9.12,
  },
  {
    id: "2",
    sno: 2,
    code: "M2",
    freq: 1,
    description: "Sew to hold",
    tmu: 127,
    extTmu: 127,
    allow: 4.34,
  },
  {
    id: "3",
    sno: 3,
    code: "C6",
    freq: 1,
    description: "Sew to hold",
    tmu: 534,
    extTmu: 534,
    allow: 5.34,
  },
  {
    id: "4",
    sno: 4,
    code: "S3",
    freq: 1,
    description: "Sew to hold",
    tmu: 231,
    extTmu: 231,
    allow: 23.23,
  },
  {
    id: "5",
    sno: 5,
    code: "D5",
    freq: 1,
    description: "Sew to hold",
    tmu: 423,
    extTmu: 423,
    allow: 34.34,
  },
];

export const ProSMV = (): JSX.Element => {
  const [operationNo, setOperationNo] = useState("8286");
  const [size, setSize] = useState("XS-XXL");
  const [production, setProduction] = useState("Production");
  const [description, setDescription] = useState("Attach elastic at end");
  const [machine, setMachine] = useState("3T LF");
  const [grade, setGrade] = useState("Operator");
  const [persAllowance, setPersAllowance] = useState("11");
  const [costAllowance, setCostAllowance] = useState("3");
  const [sLength, setSLength] = useState("41");
  const [spc, setSpc] = useState("4.5");
  const [bAllowance, setBAllowance] = useState("0.03");
  const [qtAllowance, setQtAllowance] = useState("0");
  const [totalTime, setTotalTime] = useState("412.00");
  const [basicTime, setBasicTime] = useState("0.210");
  const [standardTime, setStandardTime] = useState("0.274");
  const [target, setTarget] = useState("219");

  return (
    <div className="bg-[#f3f4f6] w-full min-h-screen">
      <main className="flex flex-1 relative flex-col items-end gap-6 px-4 md:px-6 py-0">
        <TopBar />

        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-[#1f2a37] text-[28px] leading-normal">
              Pro SMV
            </h2>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 flex items-center justify-center bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#ef4444] hover:bg-[#dc2626] rounded-lg transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#06b6d4] hover:bg-[#0891b2] rounded-lg transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#a855f7] hover:bg-[#9333ea] rounded-lg transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#10b981] hover:bg-[#059669] rounded-lg transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-[#f59e0b] hover:bg-[#d97706] rounded-lg transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mb-6 flex-wrap">
            <div className="px-4 py-2.5 bg-white border border-[#d1d5db] rounded-lg">
              <select
                value="Method demo"
                className="text-sm text-[#6b7280] bg-transparent focus:outline-none"
              >
                <option>Method demo</option>
              </select>
            </div>
            <div className="px-4 py-2.5 bg-white border border-[#d1d5db] rounded-lg">
              <input
                type="text"
                value={operationNo}
                onChange={(e) => setOperationNo(e.target.value)}
                className="text-sm text-[#6b7280] bg-transparent focus:outline-none border-0 w-20"
              />
            </div>
            <div className="px-4 py-2.5 bg-white border border-[#d1d5db] rounded-lg">
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="text-sm text-[#6b7280] bg-transparent focus:outline-none border-0"
              />
            </div>
            <div className="px-4 py-2.5 bg-white border border-[#d1d5db] rounded-lg">
              <select
                value={production}
                onChange={(e) => setProduction(e.target.value)}
                className="text-sm text-[#6b7280] bg-transparent focus:outline-none"
              >
                <option>Production</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border-2 border-[#10b981] rounded-xl p-6 shadow">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-6 bg-[#3b82f6] rounded"></div>
                <h3 className="font-semibold text-[#1f2a37] text-lg">
                  Operation No. {operationNo}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-[#6b7280] mb-1 block">
                      Description
                    </label>
                    <div className="text-sm text-[#1f2a37] font-medium">
                      {description}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-[#6b7280] mb-1 block">
                      Machine
                    </label>
                    <div className="text-sm text-[#1f2a37] font-medium">
                      {machine}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-[#6b7280] mb-1 block">
                      Grade
                    </label>
                    <div className="text-sm text-[#1f2a37] font-medium">
                      {grade}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-[#6b7280] mb-1 block">
                      Pers. Allowance
                    </label>
                    <div className="text-sm text-[#1f2a37] font-medium">
                      {persAllowance}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-[#6b7280] mb-1 block">
                      Cost Allowance
                    </label>
                    <div className="text-sm text-[#1f2a37] font-medium">
                      {costAllowance}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-[#6b7280] mb-1 block">
                      S Length
                    </label>
                    <div className="text-sm text-[#1f2a37] font-medium">
                      {sLength}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-[#6b7280] mb-1 block">SPC</label>
                    <select
                      value={spc}
                      onChange={(e) => setSpc(e.target.value)}
                      className="w-full px-3 py-2 text-sm text-[#1f2a37] bg-white border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#1c64f2] focus:border-transparent"
                    >
                      <option>4.5</option>
                      <option>5.0</option>
                      <option>5.5</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-[#6b7280] mb-1 block">
                      B Allowance
                    </label>
                    <select
                      value={bAllowance}
                      onChange={(e) => setBAllowance(e.target.value)}
                      className="w-full px-3 py-2 text-sm text-[#1f2a37] bg-white border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#1c64f2] focus:border-transparent"
                    >
                      <option>0.03</option>
                      <option>0.05</option>
                      <option>0.10</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-[#6b7280] mb-1 block">
                      Qt Allowance
                    </label>
                    <input
                      type="text"
                      value={qtAllowance}
                      onChange={(e) => setQtAllowance(e.target.value)}
                      className="w-full px-3 py-2 text-sm text-[#1f2a37] bg-white border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#1c64f2] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                  <div>
                    <label className="text-xs text-[#6b7280] mb-1 block">
                      Total time
                    </label>
                    <input
                      type="text"
                      value={totalTime}
                      readOnly
                      className="w-full px-3 py-2 text-sm text-[#1f2a37] font-medium bg-[#f9fafb] border border-[#d1d5db] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#6b7280] mb-1 block">
                      Basic time
                    </label>
                    <input
                      type="text"
                      value={basicTime}
                      readOnly
                      className="w-full px-3 py-2 text-sm text-[#1f2a37] font-medium bg-[#f9fafb] border border-[#d1d5db] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#6b7280] mb-1 block">
                      Standard time
                    </label>
                    <input
                      type="text"
                      value={standardTime}
                      readOnly
                      className="w-full px-3 py-2 text-sm text-[#1f2a37] font-medium bg-[#f9fafb] border border-[#d1d5db] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#6b7280] mb-1 block">
                      Target
                    </label>
                    <input
                      type="text"
                      value={target}
                      readOnly
                      className="w-full px-3 py-2 text-sm text-[#1f2a37] font-medium bg-[#f9fafb] border border-[#d1d5db] rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 pt-4">
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#047857] hover:bg-[#065f46] text-white rounded-lg text-sm font-medium transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Approve
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#f59e0b] hover:bg-[#d97706] text-white rounded-lg text-sm font-medium transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    Send
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#ec4899] hover:bg-[#db2777] text-white rounded-lg text-sm font-medium transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                    </svg>
                    Save
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#dc2626] hover:bg-[#b91c1c] text-white rounded-lg text-sm font-medium transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                    </svg>
                    Disapprove
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#374151]">
                    <th className="text-white font-semibold uppercase text-xs px-4 py-3 text-left">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="text-white font-semibold uppercase text-xs px-4 py-3 text-center">SNO.</th>
                    <th className="text-white font-semibold uppercase text-xs px-4 py-3 text-center">CODE</th>
                    <th className="text-white font-semibold uppercase text-xs px-4 py-3 text-center">FREQ.</th>
                    <th className="text-white font-semibold uppercase text-xs px-4 py-3 text-left">DESCRIPTION</th>
                    <th className="text-white font-semibold uppercase text-xs px-4 py-3 text-center">TMU</th>
                    <th className="text-white font-semibold uppercase text-xs px-4 py-3 text-center">EXT TMU</th>
                    <th className="text-white font-semibold uppercase text-xs px-4 py-3 text-center">ALLOW</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTableData.map((row, index) => (
                    <tr key={row.id} className={`border-b border-[#e5e7eb] hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F3F4F6]'}`}>
                      <td className="px-4 py-2">
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-4 py-2 text-center text-[#1f2a37] font-medium text-sm">{row.sno}</td>
                      <td className="px-4 py-2 text-center text-[#1f2a37] font-medium text-sm">{row.code}</td>
                      <td className="px-4 py-2 text-center text-[#1f2a37] text-sm">{row.freq}</td>
                      <td className="px-4 py-2 text-left text-[#6b7280] text-sm">{row.description}</td>
                      <td className="px-4 py-2 text-center text-[#1f2a37] text-sm">{row.tmu}</td>
                      <td className="px-4 py-2 text-center text-[#1f2a37] text-sm">{row.extTmu}</td>
                      <td className="px-4 py-2 text-center text-[#1f2a37] font-medium text-sm">{row.allow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="font-semibold text-[#1f2a37] text-lg mb-4">Analyst</h3>
            <div className="flex items-center gap-4">
              <button className="p-3 bg-[#ec4899] hover:bg-[#db2777] rounded-lg transition-colors">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="flex-1">
                <select className="w-full px-4 py-2.5 text-sm text-[#9ca3af] bg-white border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#1c64f2] focus:border-transparent">
                  <option>Select Analyst</option>
                </select>
              </div>
              <button className="p-3 bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg transition-colors">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-[#374151] rounded-lg p-4 mb-6">
            <div className="flex flex-wrap items-center gap-4 justify-center">
              <button className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium hover:bg-[#4b5563] rounded transition-colors">
                <span>PICK</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium hover:bg-[#4b5563] rounded transition-colors">
                <span>FOLD</span>
                <div className="w-4 h-4 border border-white rounded"></div>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium hover:bg-[#4b5563] rounded transition-colors">
                <span>LN. UP</span>
                <div className="w-4 h-4 border-2 border-white rounded"></div>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium hover:bg-[#4b5563] rounded transition-colors">
                <span>M/C</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium hover:bg-[#4b5563] rounded transition-colors">
                <span>CUT</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                </svg>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium hover:bg-[#4b5563] rounded transition-colors">
                <span>DPSE</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium hover:bg-[#4b5563] rounded transition-colors">
                <span>BASIC</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium hover:bg-[#4b5563] rounded transition-colors">
                <span>MTM</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            <button className="px-4 py-3 bg-white border-2 border-[#10b981] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>P1</span>
              <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#10b981] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>F1</span>
              <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#10b981] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>L1</span>
              <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#10b981] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>M1</span>
              <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#10b981] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>C1</span>
              <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#10b981] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>D1</span>
              <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#f59e0b] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>G1</span>
              <svg className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#f59e0b] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>A</span>
              <svg className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#10b981] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>P2</span>
              <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#10b981] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>F2</span>
              <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#10b981] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>L2</span>
              <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#10b981] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>M2</span>
              <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#10b981] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>C2</span>
              <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#10b981] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>D2</span>
              <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#f59e0b] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>G2</span>
              <svg className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <button className="px-4 py-3 bg-white border-2 border-[#f59e0b] rounded-lg text-sm font-medium text-[#1f2a37] hover:bg-gray-50 transition-colors flex items-center justify-between">
              <span>B</span>
              <svg className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
