import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

const productData = [
  {
    category: "Ladies wear",
    icon: "/---29--1-4.png",
    totalStyle: "6",
    avgProSmv: "9.12",
    avgCostSmv: "9.12",
  },
  {
    category: "Kids wear",
    icon: "/---29--1-4.png",
    totalStyle: "4",
    avgProSmv: "4.34",
    avgCostSmv: "3.20",
  },
  {
    category: "Mens wear",
    icon: "/---29--1-4.png",
    totalStyle: "4",
    avgProSmv: "5.34",
    avgCostSmv: "4.34",
  },
  {
    category: "Jogger",
    icon: "/---29--1-4.png",
    totalStyle: "1",
    avgProSmv: "23.23",
    avgCostSmv: "5.34",
  },
  {
    category: "Jogger",
    icon: "/---29--1-4.png",
    totalStyle: "4",
    avgProSmv: "34.34",
    avgCostSmv: "1.33",
  },
];

export const ProductDetailsSection = (): JSX.Element => {
  return (
    <Card className="bg-white rounded-2xl shadow-shadow w-full">
      <CardContent className="p-0">
        <div className="flex flex-col items-start justify-center gap-1.5 p-4">
          <h2 className="font-text-lg-font-semibold font-[number:var(--text-lg-font-semibold-font-weight)] text-[#111928] text-[length:var(--text-lg-font-semibold-font-size)] tracking-[var(--text-lg-font-semibold-letter-spacing)] leading-[var(--text-lg-font-semibold-line-height)] [font-style:var(--text-lg-font-semibold-font-style)]">
            Products Wise Details
          </h2>
        </div>

        <div className="px-4 pb-4">
          <div className="rounded-2xl overflow-hidden shadow-shadow">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#374151] hover:bg-[#374151] border-b-0">
                  <TableHead className="font-uppercase-text-xs-font-semibold font-[number:var(--uppercase-text-xs-font-semibold-font-weight)] text-[#d1d5db] text-[length:var(--uppercase-text-xs-font-semibold-font-size)] tracking-[var(--uppercase-text-xs-font-semibold-letter-spacing)] leading-[var(--uppercase-text-xs-font-semibold-line-height)] [font-style:var(--uppercase-text-xs-font-semibold-font-style)] p-4 h-auto">
                    CATEGORY
                  </TableHead>
                  <TableHead className="font-uppercase-text-xs-font-semibold font-[number:var(--uppercase-text-xs-font-semibold-font-weight)] text-[#d1d5db] text-[length:var(--uppercase-text-xs-font-semibold-font-size)] tracking-[var(--uppercase-text-xs-font-semibold-letter-spacing)] leading-[var(--uppercase-text-xs-font-semibold-line-height)] [font-style:var(--uppercase-text-xs-font-semibold-font-style)] p-4 h-auto">
                    TOTAL STYLE
                  </TableHead>
                  <TableHead className="font-uppercase-text-xs-font-semibold font-[number:var(--uppercase-text-xs-font-semibold-font-weight)] text-[#d1d5db] text-[length:var(--uppercase-text-xs-font-semibold-font-size)] tracking-[var(--uppercase-text-xs-font-semibold-letter-spacing)] leading-[var(--uppercase-text-xs-font-semibold-line-height)] [font-style:var(--uppercase-text-xs-font-semibold-font-style)] p-4 h-auto">
                    AVG. PRO. SMV
                  </TableHead>
                  <TableHead className="font-uppercase-text-xs-font-semibold font-[number:var(--uppercase-text-xs-font-semibold-font-weight)] text-[#d1d5db] text-[length:var(--uppercase-text-xs-font-semibold-font-size)] tracking-[var(--uppercase-text-xs-font-semibold-letter-spacing)] leading-[var(--uppercase-text-xs-font-semibold-line-height)] [font-style:var(--uppercase-text-xs-font-semibold-font-style)] p-4 h-auto">
                    AVG. COST. SMV
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productData.map((product, index) => (
                  <TableRow
                    key={index}
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#F3F4F6]'} hover:bg-gray-100 border-b border-gray-200 last:border-b-0`}
                  >
                    <TableCell className="px-4 py-2 h-[50px]">
                      <div className="flex items-center gap-2">
                        <div className="bg-white rounded border border-solid border-[#d1d5db] w-8 h-8 flex items-center justify-center relative">
                          <img
                            className="w-[22px] h-7 object-cover"
                            alt={product.category}
                            src={product.icon}
                          />
                        </div>
                        <span className="[font-family:'Inter',Helvetica] font-medium text-[#111928] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                          {product.category}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-2 h-[50px]">
                      <span className="font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-[#1f2a37] text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] [font-style:var(--text-sm-font-normal-font-style)]">
                        {product.totalStyle}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 py-2 h-[50px]">
                      <span className="font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-[#111928] text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] [font-style:var(--text-sm-font-semibold-font-style)]">
                        {product.avgProSmv}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 py-2 h-[50px]">
                      <span className="font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-[#111928] text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] [font-style:var(--text-sm-font-semibold-font-style)]">
                        {product.avgCostSmv}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
