import React, { useState } from "react";
import { TopBar } from "../../components/TopBar";
import { CustomerDrawer } from "../../components/CustomerDrawer";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { SearchBar } from "../../components/SearchBar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

interface Customer {
  id: number;
  name: string;
  brandCount: number;
  factoryName: string;
  customerType: string;
  phone: string;
  email: string;
}

const mockCustomers: Customer[] = [
  {
    id: 1,
    name: "Adidas",
    brandCount: 3,
    factoryName: "GreenTextiles",
    customerType: "Retailer",
    phone: "+91 9988776655",
    email: "greentextiles@gmail.com",
  },
  {
    id: 2,
    name: "Nike",
    brandCount: 5,
    factoryName: "SustainableWear",
    customerType: "Wholesaler",
    phone: "+91 2233445566",
    email: "sustainablewear@gmail.com",
  },
  {
    id: 3,
    name: "Puma",
    brandCount: 4,
    factoryName: "EcoFabrics",
    customerType: "Distributor",
    phone: "+91 5566778899",
    email: "ecofabrics@gmail.com",
  },
  {
    id: 4,
    name: "Reebok",
    brandCount: 2,
    factoryName: "EcoThreads",
    customerType: "Consumer",
    phone: "+91 4455667788",
    email: "ecothreads@gmail.com",
  },
];

export const Customers = (): JSX.Element => {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="bg-[#f3f4f6] w-full min-h-screen">
      <main className="flex flex-1 relative flex-col items-end gap-6 px-6 py-0 overflow-x-auto">
        <TopBar />
        <CustomerDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

        <div className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="[font-family:'Nunito_Sans',Helvetica] font-bold text-[#1f2a37] text-[28px] tracking-[-0.11px] leading-normal">
              Customers
            </h2>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white rounded-lg border border-solid border-[#d1d5db] hover:bg-gray-50"
              >
                <img
                  src="/arrow-down-to-bracket.svg"
                  alt="Download"
                  className="w-4 h-4"
                />
                <span className="font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-[#374151] text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)]">
                  Download report
                </span>
              </Button>
              <Button
                onClick={() => setIsDrawerOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1c64f2] hover:bg-[#1a56db] rounded-lg border-0"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="font-text-sm-font-medium font-[number:var(--text-sm-font-medium-font-weight)] text-white text-[length:var(--text-sm-font-medium-font-size)] tracking-[var(--text-sm-font-medium-letter-spacing)] leading-[var(--text-sm-font-medium-line-height)] [font-style:var(--text-sm-font-medium-font-style)]">
                  Add new customer
                </span>
              </Button>
            </div>
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
                <span className="font-text-sm-font-medium text-[#374151]">
                  Sort by
                </span>
                <img
                  className="w-3.5 h-3.5"
                  alt="Chevron down"
                  src="/chevron-down-1.svg"
                />
              </Button>
              <div className="inline-flex items-center bg-white border border-gray-300 rounded-lg p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`w-8 h-8 rounded ${
                    viewMode === "grid"
                      ? "bg-[#1c64f2] text-white hover:bg-[#1a56db] hover:text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`w-8 h-8 rounded ${
                    viewMode === "table"
                      ? "bg-[#1c64f2] text-white hover:bg-[#1a56db] hover:text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setViewMode("table")}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {mockCustomers.map((customer) => (
                <Card
                  key={customer.id}
                  className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <div className="w-4 h-4 bg-[#1c64f2] rounded-full" />
                        </div>
                        <h3 className="font-text-base-font-semibold font-[number:var(--text-base-font-semibold-font-weight)] text-[#111928] text-[length:var(--text-base-font-semibold-font-size)] tracking-[var(--text-base-font-semibold-letter-spacing)] leading-[var(--text-base-font-semibold-line-height)] [font-style:var(--text-base-font-semibold-font-style)]">
                          {customer.name}
                        </h3>
                      </div>
                      <span className="px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                        Brand: {customer.brandCount}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">
                          Factory Name
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          {customer.factoryName}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">
                          Customer type
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          {customer.customerType}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Phone</p>
                        <p className="text-sm font-medium text-gray-900">
                          {customer.phone}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-1">Email</p>
                        <p className="text-sm font-medium text-gray-900">
                          {customer.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-gray-200">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8 text-purple-600 hover:bg-purple-50 hover:text-purple-600"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8 text-blue-600 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-8 h-8 text-red-600 hover:bg-red-50 hover:text-red-600"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#374151] hover:bg-[#374151] border-b-0">
                    <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                      SNO.
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                      COSTUMER NAME
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                      FACTORY NAME
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                      CUSTOMER TYPE
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                      NO. OF BRAND
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                      EMAIL
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">
                      PHONE
                    </TableHead>
                    <TableHead className="text-xs uppercase tracking-wider text-right whitespace-nowrap">
                      ACTION
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCustomers.map((customer, index) => (
                    <TableRow key={customer.id} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F3F4F6]'}`}>
                      <TableCell className="font-medium text-gray-900 py-2">
                        {index + 1}
                      </TableCell>
                      <TableCell className="font-medium text-gray-900 py-2">
                        {customer.name}
                      </TableCell>
                      <TableCell className="text-gray-600 py-2">
                        {customer.factoryName}
                      </TableCell>
                      <TableCell className="text-gray-600 py-2">
                        {customer.customerType}
                      </TableCell>
                      <TableCell className="text-gray-600 py-2">
                        {customer.brandCount}
                      </TableCell>
                      <TableCell className="text-gray-600 py-2">{customer.email}</TableCell>
                      <TableCell className="text-gray-600 py-2">{customer.phone}</TableCell>
                      <TableCell className="text-right py-2">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-8 h-8 text-blue-600 hover:bg-blue-50 hover:text-blue-600"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="w-8 h-8 text-red-600 hover:bg-red-50 hover:text-red-600"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
