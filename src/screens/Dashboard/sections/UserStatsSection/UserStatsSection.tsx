import { ArrowUpIcon } from "lucide-react";
import React from "react";
import { StageWiseBubbleChart } from "../../../../components/charts/StageWiseBubbleChart";
import { StyleAnalysisBarChart } from "../../../../components/charts/StyleAnalysisBarChart";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const legendItems = [
  { color: "bg-[#1a56db]", label: "Total Operation:", value: "3,232" },
  { color: "bg-[#f5bb16]", label: "Total Analysis:", value: "1,230" },
  { color: "bg-[#9061f9]", label: "Video Attached:", value: "1,230" },
];

const chartCategories = [
  {
    name: "Shirts",
    bars: [
      { height: "h-[199px]", color: "bg-[#1a56db]" },
      { height: "h-40", color: "bg-[#f5bb16]" },
      { height: "h-[89px]", color: "bg-[#9061f9]" },
    ],
  },
  {
    name: "Tshirts",
    bars: [
      { height: "h-[215px]", color: "bg-[#1a56db]" },
      { height: "h-[173px]", color: "bg-[#f5bb16]" },
      { height: "h-[88px]", color: "bg-[#9061f9]" },
    ],
  },
  {
    name: "Kids Cargo Pa..",
    bars: [
      { height: "h-[215px]", color: "bg-[#1a56db]" },
      { height: "h-16", color: "bg-[#f5bb16]" },
      { height: "h-[33px]", color: "bg-[#9061f9]" },
    ],
  },
  {
    name: "KCL Jogger",
    bars: [
      { height: "h-[215px]", color: "bg-[#1a56db]" },
      { height: "h-16", color: "bg-[#f5bb16]" },
      { height: "h-[33px]", color: "bg-[#9061f9]" },
    ],
  },
  {
    name: "KCL Hoody",
    bars: [
      { height: "h-[215px]", color: "bg-[#1a56db]" },
      { height: "h-16", color: "bg-[#f5bb16]" },
      { height: "h-[33px]", color: "bg-[#9061f9]" },
    ],
  },
];

const yAxisLabels = ["120", "100", "80", "60", "40", "20", "0"];

const stageLegendItems = [
  { color: "bg-[#1a56db]", label: "Costing" },
  { color: "bg-[#f5bb16]", label: "Production" },
  { color: "bg-[#16bdca]", label: "Fit" },
  { color: "bg-[#9061f9]", label: "Size Set" },
];

export const UserStatsSection = (): JSX.Element => {
  return (
    <section className="flex items-stretch gap-6 w-full">
      <Card className="flex-1 bg-white rounded-2xl shadow-shadow flex flex-col">
        <CardContent className="flex flex-col items-start gap-6 p-6 flex-1">
          <div className="flex flex-col items-start gap-4 w-full">
            <div className="flex items-start justify-between pt-0 pb-4 px-0 w-full border-b border-gray-200">
              <div className="inline-flex items-start gap-2.5">
                <div className="inline-flex flex-col items-start justify-center gap-1">
                  <h2 className="font-[number:var(--leading-none-text-xl-font-bold-font-weight)] text-[#111928] text-[length:var(--leading-none-text-xl-font-bold-font-size)] leading-[var(--leading-none-text-xl-font-bold-line-height)] font-leading-none-text-xl-font-bold tracking-[var(--leading-none-text-xl-font-bold-letter-spacing)] [font-style:var(--leading-none-text-xl-font-bold-font-style)]">
                    Style Analysis
                  </h2>
                  <p className="font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-[#6b7280] text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] whitespace-nowrap [font-style:var(--text-sm-font-normal-font-style)]">
                    Avg. approval in last 3 weeks
                  </p>
                </div>
              </div>
              <Badge className="inline-flex items-center justify-center gap-1 px-2.5 py-0.5 bg-green-100 rounded-md hover:bg-green-100 h-auto">
                <ArrowUpIcon className="w-3.5 h-3.5 text-green-800" />
                <span className="font-text-xs-font-medium font-[number:var(--text-xs-font-medium-font-weight)] text-green-800 text-[length:var(--text-xs-font-medium-font-size)] text-center tracking-[var(--text-xs-font-medium-letter-spacing)] leading-[var(--text-xs-font-medium-line-height)] whitespace-nowrap [font-style:var(--text-xs-font-medium-font-style)]">
                  24%
                </span>
              </Badge>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-[8px_10px] w-full rounded overflow-hidden">
              {legendItems.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex max-w-[170px] items-start gap-1.5"
                >
                  <div className={`w-[13px] h-3.5 ${item.color} rounded`} />
                  <div className="[font-family:'Inter',Helvetica] font-normal text-transparent text-sm tracking-[0] leading-[14px] whitespace-nowrap">
                    <span className="text-[#6b7280]">{item.label} </span>
                    <span className="font-semibold text-[#111928]">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 w-full flex-1">
            <StyleAnalysisBarChart />
          </div>
        </CardContent>
      </Card>

      <Card className="w-[407px] bg-white rounded-2xl shadow-shadow flex flex-col">
        <CardContent className="flex flex-col items-center justify-between p-6 flex-1">
          <div className="flex items-start w-full">
            <div className="flex flex-col items-start justify-center gap-2 flex-1">
              <h2 className="font-[number:var(--leading-none-text-xl-font-bold-font-weight)] text-[#111928] text-[length:var(--leading-none-text-xl-font-bold-font-size)] leading-[var(--leading-none-text-xl-font-bold-line-height)] whitespace-nowrap font-leading-none-text-xl-font-bold tracking-[var(--leading-none-text-xl-font-bold-letter-spacing)] [font-style:var(--leading-none-text-xl-font-bold-font-style)]">
                Stage wise OB
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-center w-full">
            <StageWiseBubbleChart />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-[8px_10px] w-full rounded overflow-hidden">
            {stageLegendItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex max-w-[170px] items-start gap-1.5"
              >
                <div className={`w-[13px] h-3.5 ${item.color} rounded`} />
                <div className="text-[length:var(--leading-none-text-sm-font-normal-font-size)] leading-[var(--leading-none-text-sm-font-normal-line-height)] font-leading-none-text-sm-font-normal font-[number:var(--leading-none-text-sm-font-normal-font-weight)] text-[#6b7280] tracking-[var(--leading-none-text-sm-font-normal-letter-spacing)] whitespace-nowrap [font-style:var(--leading-none-text-sm-font-normal-font-style)]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
