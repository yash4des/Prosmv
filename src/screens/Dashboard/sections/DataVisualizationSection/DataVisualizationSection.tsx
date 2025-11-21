import { TrendingUpIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const metricsData = [
  {
    label: "Total operation",
    value: "2322",
    percentage: "8.5%",
    iconBg: "bg-[#e1effe]",
    iconSrc: "/adjustments-horizontal-1.svg",
  },
  {
    label: "Total analyzed",
    value: "43",
    percentage: "2.5%",
    iconBg: "bg-[#fdf6b2]",
    iconSrc: "/chart-pie-1.svg",
  },
  {
    label: "Approved",
    value: "43",
    percentage: "1.4%",
    iconBg: "bg-[#def7ec]",
    iconSrc: "/badge-check.svg",
  },
  {
    label: "Rejected",
    value: "43",
    percentage: "3.5%",
    iconBg: "bg-[#fde8e8]",
    iconSrc: "/x-circle.svg",
  },
];

export const DataVisualizationSection = (): JSX.Element => {
  return (
    <div className="flex items-center gap-6 w-full">
      {metricsData.map((metric, index) => (
        <Card
          key={index}
          className="flex-1 bg-white rounded-2xl shadow-shadow border-0"
        >
          <CardContent className="flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-1">
                <div className="font-text-base-font-medium font-[number:var(--text-base-font-medium-font-weight)] text-[#6b7280] text-[length:var(--text-base-font-medium-font-size)] tracking-[var(--text-base-font-medium-letter-spacing)] leading-[var(--text-base-font-medium-line-height)] [font-style:var(--text-base-font-medium-font-style)]">
                  {metric.label}
                </div>
                <div className="font-text-2xl-font-bold font-[number:var(--text-2xl-font-bold-font-weight)] text-[#111928] text-[length:var(--text-2xl-font-bold-font-size)] tracking-[var(--text-2xl-font-bold-letter-spacing)] leading-[var(--text-2xl-font-bold-line-height)] [font-style:var(--text-2xl-font-bold-font-style)]">
                  {metric.value}
                </div>
              </div>
              <div
                className={`flex w-[58px] h-[58px] items-center justify-center p-1.5 ${metric.iconBg} rounded-md`}
              >
                <img
                  className="w-[30px] h-[30px]"
                  alt={metric.label}
                  src={metric.iconSrc}
                />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUpIcon className="w-6 h-6 text-[#0e9f6e]" />
              <div className="font-text-base-font-medium font-[number:var(--text-base-font-medium-font-weight)] text-[length:var(--text-base-font-medium-font-size)] tracking-[var(--text-base-font-medium-letter-spacing)] leading-[var(--text-base-font-medium-line-height)] [font-style:var(--text-base-font-medium-font-style)]">
                <span className="text-[#0e9f6e]">{metric.percentage}</span>
                <span className="text-[#6b7280]"> Up from yesterday</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
