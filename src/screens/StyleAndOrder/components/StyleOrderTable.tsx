import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

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

interface StyleOrderTableProps {
  data: StyleOrder[];
}

export const StyleOrderTable = ({ data }: StyleOrderTableProps): JSX.Element => {
  return (
    <div className="bg-white rounded-lg shadow overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#374151] hover:bg-[#374151]">
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">SNO.</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">STYLE</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">COSTUMER NAME</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">FACTORY NAME</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">CUSTOMER TYPE</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">COST SMV</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">ORDERS</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">SIZE GRID</TableHead>
            <TableHead className="text-xs uppercase tracking-wider whitespace-nowrap">PROD. SMV</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={item.id}
              className={`border-b border-[#e5e7eb] hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F3F4F6]'}`}
            >
              <TableCell className="font-medium text-[#1f2a37] py-2">{index + 1}</TableCell>
              <TableCell className="py-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#374151">
                      <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" />
                    </svg>
                  </div>
                  <span className="font-medium text-[#1f2a37]">{item.style}</span>
                </div>
              </TableCell>
              <TableCell className="text-[#6b7280] py-2">{item.customerName}</TableCell>
              <TableCell className="text-[#6b7280] py-2">{item.factoryName}</TableCell>
              <TableCell className="text-[#6b7280] py-2">{item.customerType}</TableCell>
              <TableCell className="text-[#1f2a37] font-medium py-2">{item.costSMV}</TableCell>
              <TableCell className="text-[#1f2a37] font-medium py-2">{item.orders}</TableCell>
              <TableCell className="text-[#1f2a37] font-medium py-2">{item.sizeGrid}</TableCell>
              <TableCell className="text-[#6b7280] py-2">{item.prodSMV}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
