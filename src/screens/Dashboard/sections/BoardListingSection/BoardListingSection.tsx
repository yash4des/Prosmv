import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

const brandData = [
  {
    id: 1,
    name: "H & M",
    avatar: "/avatar-4.svg",
    totalStyle: "6",
    avgProSmv: "9.12",
    avgCostSmv: "9.12",
    hasImage: true,
  },
  {
    id: 2,
    name: "Methods_Ludhiana",
    avatar: "/avatar-2.png",
    totalStyle: "4",
    avgProSmv: "4.34",
    avgCostSmv: "3.20",
    hasImage: true,
  },
  {
    id: 3,
    name: "Demo_customer1",
    avatar: "/avatar-2.png",
    totalStyle: "4",
    avgProSmv: "5.34",
    avgCostSmv: "4.34",
    hasImage: true,
  },
  {
    id: 4,
    name: "Demo_customer2",
    avatar: "/avatar-3.png",
    totalStyle: "1",
    avgProSmv: "23.23",
    avgCostSmv: "5.34",
    hasImage: true,
  },
  {
    id: 5,
    name: "Demo_customer3",
    avatar: "",
    totalStyle: "4",
    avgProSmv: "34.34",
    avgCostSmv: "1.33",
    hasImage: false,
    fallback: "D",
  },
];

export const BoardListingSection = (): JSX.Element => {
  return (
    <Card className="bg-white rounded-2xl shadow-shadow w-full">
      <CardContent className="p-0">
        <div className="flex flex-col items-start gap-1.5 p-4">
          <h2 className="font-text-lg-font-semibold font-[number:var(--text-lg-font-semibold-font-weight)] text-[#111928] text-[length:var(--text-lg-font-semibold-font-size)] tracking-[var(--text-lg-font-semibold-letter-spacing)] leading-[var(--text-lg-font-semibold-line-height)] [font-style:var(--text-lg-font-semibold-font-style)]">
            Brand Listing
          </h2>
        </div>

        <div className="px-4 pb-4">
          <div className="rounded-2xl overflow-hidden shadow-shadow">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#374151] hover:bg-[#374151] border-b border-gray-200">
                  <TableHead className="font-uppercase-text-xs-font-semibold font-[number:var(--uppercase-text-xs-font-semibold-font-weight)] text-[#d1d5db] text-[length:var(--uppercase-text-xs-font-semibold-font-size)] tracking-[var(--uppercase-text-xs-font-semibold-letter-spacing)] leading-[var(--uppercase-text-xs-font-semibold-line-height)] [font-style:var(--uppercase-text-xs-font-semibold-font-style)] p-4 w-[276px]">
                    BRANDS LISTING
                  </TableHead>
                  <TableHead className="font-uppercase-text-xs-font-semibold font-[number:var(--uppercase-text-xs-font-semibold-font-weight)] text-[#d1d5db] text-[length:var(--uppercase-text-xs-font-semibold-font-size)] tracking-[var(--uppercase-text-xs-font-semibold-letter-spacing)] leading-[var(--uppercase-text-xs-font-semibold-line-height)] [font-style:var(--uppercase-text-xs-font-semibold-font-style)] p-4">
                    TOTAL STYLE
                  </TableHead>
                  <TableHead className="font-uppercase-text-xs-font-semibold font-[number:var(--uppercase-text-xs-font-semibold-font-weight)] text-[#d1d5db] text-[length:var(--uppercase-text-xs-font-semibold-font-size)] tracking-[var(--uppercase-text-xs-font-semibold-letter-spacing)] leading-[var(--uppercase-text-xs-font-semibold-line-height)] [font-style:var(--uppercase-text-xs-font-semibold-font-style)] p-4">
                    AVG. PRO. SMV
                  </TableHead>
                  <TableHead className="font-uppercase-text-xs-font-semibold font-[number:var(--uppercase-text-xs-font-semibold-font-weight)] text-[#d1d5db] text-[length:var(--uppercase-text-xs-font-semibold-font-size)] tracking-[var(--uppercase-text-xs-font-semibold-letter-spacing)] leading-[var(--uppercase-text-xs-font-semibold-line-height)] [font-style:var(--uppercase-text-xs-font-semibold-font-style)] p-4">
                    AVG. COST. SMV
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {brandData.map((brand, index) => (
                  <TableRow
                    key={brand.id}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-[#F3F4F6]"
                    } hover:bg-gray-100 border-b border-gray-200 cursor-pointer`}
                  >
                    <TableCell className="px-4 py-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="w-8 h-8 border border-[#d1d5db]">
                          {brand.hasImage ? (
                            <AvatarImage src={brand.avatar} alt={brand.name} />
                          ) : (
                            <AvatarFallback className="bg-gray-100 font-leading-none-text-xs-font-medium font-[number:var(--leading-none-text-xs-font-medium-font-weight)] text-[#111928] text-[length:var(--leading-none-text-xs-font-medium-font-size)] tracking-[var(--leading-none-text-xs-font-medium-letter-spacing)] leading-[var(--leading-none-text-xs-font-medium-line-height)] [font-style:var(--leading-none-text-xs-font-medium-font-style)]">
                              {brand.fallback}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <span className="[font-family:'Inter',Helvetica] font-medium text-[#111928] text-sm tracking-[0] leading-[21px]">
                          {brand.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      <span className="font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-[#1f2a37] text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] [font-style:var(--text-sm-font-normal-font-style)]">
                        {brand.totalStyle}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      <span className="font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-[#111928] text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] [font-style:var(--text-sm-font-semibold-font-style)]">
                        {brand.avgProSmv}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 py-2">
                      <span className="font-text-sm-font-semibold font-[number:var(--text-sm-font-semibold-font-weight)] text-[#111928] text-[length:var(--text-sm-font-semibold-font-size)] tracking-[var(--text-sm-font-semibold-letter-spacing)] leading-[var(--text-sm-font-semibold-line-height)] [font-style:var(--text-sm-font-semibold-font-style)]">
                        {brand.avgCostSmv}
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
