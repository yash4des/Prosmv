import { DownloadIcon, InfoIcon } from "lucide-react";
import React from "react";
import { AnalysisDataChart } from "../../../../components/charts/AnalysisDataChart";
import { ApprovalTrendChart } from "../../../../components/charts/ApprovalTrendChart";
import { ProSMVUsageChart } from "../../../../components/charts/ProSMVUsageChart";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const legendItems = [
  { color: "bg-[#1a56db]", label: "Utilized" },
  { color: "bg-[#f5bb16]", label: "Unutilized" },
];

const analysisLegendItems = [
  { color: "bg-[#1a56db]", label: "Approved: ", value: "3,232" },
  { color: "bg-[#f5bb16]", label: "Unapproved: ", value: "1,230" },
];

const analysisStats = [
  {
    value: "10",
    label: "Approved",
    bgColor: "bg-[#edfafa]",
    badgeBg: "bg-[#d5f5f6]",
    textColor: "text-[#047481]",
  },
  {
    value: "5",
    label: "Und. Appr.",
    bgColor: "bg-[#fdfdea]",
    badgeBg: "bg-[#fdf6b2]",
    textColor: "text-[#9f580a]",
  },
  {
    value: "18",
    label: "Analysis",
    bgColor: "bg-[#f6f5ff]",
    badgeBg: "bg-[#edebfe]",
    textColor: "text-[#7e3af2]",
  },
  {
    value: "18",
    label: "Operations",
    bgColor: "bg-[#ebf5ff]",
    badgeBg: "bg-[#e1effe]",
    textColor: "text-[#1c64f2]",
  },
];

const radarLabels = [
  { text: "Operations", color: "text-[#1a56db]" },
  { text: "Analysis", color: "text-[#7e3af2]" },
  { text: "Under App.", color: "text-[#e3a008]" },
  { text: "Approved", color: "text-[#0694a2]" },
];

const chartYAxisLabels = ["0", "20", "40", "60", "80", "100", "120"];
const chartXAxisLabels = ["June 2025", "July 2025", "August 2025"];

export const DashboardOverviewSection = (): JSX.Element => {
  return (
    <section className="flex items-stretch gap-6 w-full">
      <Card className="flex-1 bg-white rounded-2xl shadow-shadow border-0 flex flex-col">
        <CardContent className="p-6 flex flex-col justify-between flex-1">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5">
                <h2 className="font-[number:var(--leading-tight-text-xl-font-bold-font-weight)] text-[#111928] text-[length:var(--leading-tight-text-xl-font-bold-font-size)] leading-[var(--leading-tight-text-xl-font-bold-line-height)] font-leading-tight-text-xl-font-bold tracking-[var(--leading-tight-text-xl-font-bold-letter-spacing)] [font-style:var(--leading-tight-text-xl-font-bold-font-style)]">
                  ProSMV Usage
                </h2>
                <InfoIcon className="w-3 h-3 text-gray-500" />
              </div>
              <DownloadIcon className="w-4 h-4 text-gray-500" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              {legendItems.map((item, index) => (
                <div key={index} className="inline-flex items-start gap-1.5">
                  <div className={`w-[13px] h-3.5 ${item.color} rounded`} />
                  <span className="font-leading-none-text-sm-font-normal font-[number:var(--leading-none-text-sm-font-normal-font-weight)] text-[#6b7280] text-[length:var(--leading-none-text-sm-font-normal-font-size)] tracking-[var(--leading-none-text-sm-font-normal-letter-spacing)] leading-[var(--leading-none-text-sm-font-normal-line-height)] [font-style:var(--leading-none-text-sm-font-normal-font-style)]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <ProSMVUsageChart />
          </div>

          <div className="flex flex-col items-center gap-2 px-1.5 py-3 bg-[#ebf5ff] rounded-lg">
            <div className="flex w-24 h-8 items-center justify-center bg-[#e1effe] rounded-full">
              <span className="font-leading-none-text-sm-font-medium font-[number:var(--leading-none-text-sm-font-medium-font-weight)] text-[#1c64f2] text-[length:var(--leading-none-text-sm-font-medium-font-size)] tracking-[var(--leading-none-text-sm-font-medium-letter-spacing)] leading-[var(--leading-none-text-sm-font-medium-line-height)] [font-style:var(--leading-none-text-sm-font-medium-font-style)]">
                1200
              </span>
            </div>
            <span className="text-[#1c64f2] font-leading-none-text-sm-font-medium font-[number:var(--leading-none-text-sm-font-medium-font-weight)] text-[length:var(--leading-none-text-sm-font-medium-font-size)] tracking-[var(--leading-none-text-sm-font-medium-letter-spacing)] leading-[var(--leading-none-text-sm-font-medium-line-height)] [font-style:var(--leading-none-text-sm-font-medium-font-style)]">
              Total Operations
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className="flex-1 bg-white rounded-2xl shadow-shadow border-0 flex flex-col">
        <CardContent className="p-6 flex flex-col gap-6 flex-1">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5">
              <h2 className="font-[number:var(--leading-tight-text-xl-font-bold-font-weight)] text-[#111928] text-[length:var(--leading-tight-text-xl-font-bold-font-size)] leading-[var(--leading-tight-text-xl-font-bold-line-height)] font-leading-tight-text-xl-font-bold tracking-[var(--leading-tight-text-xl-font-bold-letter-spacing)] [font-style:var(--leading-tight-text-xl-font-bold-font-style)]">
                Analysis Data
              </h2>
              <InfoIcon className="w-3 h-3 text-gray-500" />
            </div>
            <DownloadIcon className="w-4 h-4 text-gray-500" />
          </div>

          <AnalysisDataChart />

          <div className="flex flex-wrap items-center gap-2">
            {analysisStats.map((stat, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-1.5 py-3 flex-1 ${stat.bgColor} rounded-lg flex-col justify-center`}
              >
                <div
                  className={`flex w-8 h-8 items-center justify-center ${stat.badgeBg} rounded-full`}
                >
                  <span
                    className={`font-leading-none-text-sm-font-medium font-[number:var(--leading-none-text-sm-font-medium-font-weight)] ${stat.textColor} text-[length:var(--leading-none-text-sm-font-medium-font-size)] tracking-[var(--leading-none-text-sm-font-medium-letter-spacing)] leading-[var(--leading-none-text-sm-font-medium-line-height)] [font-style:var(--leading-none-text-sm-font-medium-font-style)]`}
                  >
                    {stat.value}
                  </span>
                </div>
                <span
                  className={`${stat.textColor} font-leading-none-text-sm-font-medium font-[number:var(--leading-none-text-sm-font-medium-font-weight)] text-[length:var(--leading-none-text-sm-font-medium-font-size)] tracking-[var(--leading-none-text-sm-font-medium-letter-spacing)] leading-[var(--leading-none-text-sm-font-medium-line-height)] [font-style:var(--leading-none-text-sm-font-medium-font-style)]`}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="flex-1 bg-white rounded-2xl shadow-shadow border-0 flex flex-col">
        <CardContent className="p-6 flex flex-col justify-between flex-1">
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between pt-0 pb-4 px-0 border-b border-gray-200">
              <div className="inline-flex items-start gap-2.5">
                <div className="w-12 h-12 bg-[#f3f4f6] rounded-lg flex items-center justify-center">
                  <img
                    className="w-8 h-8"
                    alt="Badge check outline"
                    src="/badge-check-outline.svg"
                  />
                </div>
                <div className="inline-flex flex-col items-start justify-center gap-1">
                  <h3 className="font-[number:var(--leading-none-text-2xl-font-bold-font-weight)] text-[#111928] text-[length:var(--leading-none-text-2xl-font-bold-font-size)] leading-[var(--leading-none-text-2xl-font-bold-line-height)] font-leading-none-text-2xl-font-bold tracking-[var(--leading-none-text-2xl-font-bold-letter-spacing)] [font-style:var(--leading-none-text-2xl-font-bold-font-style)]">
                    3001
                  </h3>
                  <p className="font-text-sm-font-normal font-[number:var(--text-sm-font-normal-font-weight)] text-[#6b7280] text-[length:var(--text-sm-font-normal-font-size)] tracking-[var(--text-sm-font-normal-letter-spacing)] leading-[var(--text-sm-font-normal-line-height)] [font-style:var(--text-sm-font-normal-font-style)]">
                    Avg. approval in last 3 months
                  </p>
                </div>
              </div>
              <Badge className="inline-flex items-center justify-center gap-1 px-2.5 py-0.5 bg-green-100 text-green-800 hover:bg-green-100 h-auto border-0">
                <img
                  className="w-3.5 h-3.5"
                  alt="Arrow up outline"
                  src="/arrow-up-outline.svg"
                />
                <span className="font-text-xs-font-medium font-[number:var(--text-xs-font-medium-font-weight)] text-[length:var(--text-xs-font-medium-font-size)] tracking-[var(--text-xs-font-medium-letter-spacing)] leading-[var(--text-xs-font-medium-line-height)] [font-style:var(--text-xs-font-medium-font-style)]">
                  24%
                </span>
              </Badge>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              {analysisLegendItems.map((item, index) => (
                <div key={index} className="inline-flex items-start gap-1.5">
                  <div className={`w-[13px] h-3.5 ${item.color} rounded`} />
                  <span className="[font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-[14px]">
                    <span className="text-[#6b7280]">{item.label}</span>
                    <span className="font-semibold text-[#111928]">
                      {item.value}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <ApprovalTrendChart />
          </div>

          <div className="flex flex-col items-center gap-2 px-1.5 py-3 bg-[#ebf5ff] rounded-lg">
            <div className="flex w-24 h-8 items-center justify-center bg-[#e1effe] rounded-full">
              <span className="font-leading-none-text-sm-font-medium font-[number:var(--leading-none-text-sm-font-medium-font-weight)] text-[#1c64f2] text-[length:var(--leading-none-text-sm-font-medium-font-size)] tracking-[var(--leading-none-text-sm-font-medium-letter-spacing)] leading-[var(--leading-none-text-sm-font-medium-line-height)] [font-style:var(--leading-none-text-sm-font-medium-font-style)]">
                60%
              </span>
            </div>
            <span className="text-[#1c64f2] font-leading-none-text-sm-font-medium font-[number:var(--leading-none-text-sm-font-medium-font-weight)] text-[length:var(--leading-none-text-sm-font-medium-font-size)] tracking-[var(--leading-none-text-sm-font-medium-letter-spacing)] leading-[var(--leading-none-text-sm-font-medium-line-height)] [font-style:var(--leading-none-text-sm-font-medium-font-style)]">
              Approval Rate
            </span>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
