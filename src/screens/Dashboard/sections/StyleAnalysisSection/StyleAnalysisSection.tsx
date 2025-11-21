import { ChevronDownIcon, InfoIcon } from "lucide-react";
import React from "react";
import { AverageSMVChart } from "../../../../components/charts/AverageSMVChart";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const legendItems = [
  {
    color: "bg-[#9061f9]",
    label: "Costing average SMV",
    value: "2,023",
    valueColor: "text-[#9061f9]",
  },
  {
    color: "bg-[#1a56db]",
    label: "Production average SVG",
    value: "120",
    valueColor: "text-[#1c64f2]",
  },
];

const yAxisLabels = [
  { value: "20.00", top: "top-[-7px]", left: "left-0" },
  { value: "15.00", top: "top-[91px]", left: "left-0.5" },
  { value: "10.00", top: "top-[190px]", left: "left-0.5" },
  { value: "5.00", top: "top-[290px]", left: "left-2" },
  { value: "0", top: "top-[389px]", left: "left-[26px]" },
];

const xAxisLabels = [
  "01 Feb",
  "02 Feb",
  "03 Feb",
  "04 Feb",
  "05 Feb",
  "06 Feb",
  "07 Feb",
];

const dataPoints = [
  {
    value: "14",
    bgColor: "bg-[#7e3af2]",
    top: "top-[186px]",
    left: "left-[488px]",
  },
  {
    value: "14",
    bgColor: "bg-[#7e3af2]",
    top: "top-[330px]",
    left: "left-[289px]",
  },
  {
    value: "14",
    bgColor: "bg-[#7e3af2]",
    top: "top-[285px]",
    left: "left-[106px]",
  },
  {
    value: "3",
    bgColor: "bg-[#1a56db]",
    top: "top-[448px]",
    left: "left-[106px]",
  },
  {
    value: "5",
    bgColor: "bg-[#1a56db]",
    top: "top-[377px]",
    left: "left-[292px]",
  },
  {
    value: "6",
    bgColor: "bg-[#1a56db]",
    top: "top-[365px]",
    left: "left-[490px]",
  },
  {
    value: "15",
    bgColor: "bg-[#1a56db]",
    top: "top-[172px]",
    left: "left-[678px]",
  },
  {
    value: "13",
    bgColor: "bg-[#1a56db]",
    top: "top-[212px]",
    left: "left-[874px]",
  },
  {
    value: "14",
    bgColor: "bg-[#1a56db]",
    top: "top-[187px]",
    left: "left-[1066px]",
  },
  {
    value: "9",
    bgColor: "bg-[#1a56db]",
    top: "top-[315px]",
    left: "left-[1259px]",
  },
  {
    value: "6",
    bgColor: "bg-[#7e3af2]",
    top: "top-[361px]",
    left: "left-[877px]",
  },
  {
    value: "12",
    bgColor: "bg-[#7e3af2]",
    top: "top-[251px]",
    left: "left-[675px]",
  },
  {
    value: "8",
    bgColor: "bg-[#7e3af2]",
    top: "top-[307px]",
    left: "left-[1069px]",
  },
  {
    value: "6",
    bgColor: "bg-[#7e3af2]",
    top: "top-[359px]",
    left: "left-[1259px]",
  },
];

export const StyleAnalysisSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <Card className="bg-white rounded-2xl shadow-shadow border-0 flex flex-col">
        <CardContent className="flex flex-col items-end gap-6 p-6 flex-1">
          <header className="flex items-start justify-between w-full">
            <div className="inline-flex items-center gap-6">
              {legendItems.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-start gap-1 flex-col justify-center"
                >
                  <div className="inline-flex items-center gap-1">
                    <div className={`${item.color} w-[13px] h-3.5 rounded`} />
                    <div className="w-fit font-[number:var(--leading-none-text-base-font-normal-font-weight)] text-[#6b7280] text-[length:var(--leading-none-text-base-font-normal-font-size)] leading-[var(--leading-none-text-base-font-normal-line-height)] whitespace-nowrap mt-[-1.00px] font-leading-none-text-base-font-normal tracking-[var(--leading-none-text-base-font-normal-letter-spacing)] [font-style:var(--leading-none-text-base-font-normal-font-style)]">
                      {item.label}
                    </div>
                    <InfoIcon className="w-3 h-3 text-[#6b7280]" />
                  </div>
                  <div
                    className={`${item.valueColor} w-fit [font-family:'Inter',Helvetica] font-bold text-base tracking-[0] leading-6 whitespace-nowrap`}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2 px-3 py-2 h-auto rounded-lg border border-solid"
            >
              <span className="mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1f2a37] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                Last week
              </span>
              <ChevronDownIcon className="w-4 h-4" />
            </Button>
          </header>

          <div className="flex items-start justify-center w-full">
            <AverageSMVChart />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
