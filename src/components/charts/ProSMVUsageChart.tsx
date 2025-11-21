import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import React, { useEffect, useRef } from "react";

export const ProSMVUsageChart = (): JSX.Element => {
  const chartRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<am5.Root | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    if (rootRef.current) return;

    const root = am5.Root.new(chartRef.current);
    rootRef.current = root;

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5percent.SlicedChart.new(root, {
        layout: root.verticalLayout,
      })
    );

    const series = chart.series.push(
      am5percent.PictorialStackedSeries.new(root, {
        orientation: "vertical",
        valueField: "value",
        categoryField: "category",
        svgPath:
          "M 206.379,479.568 C 203.584,483.402 199.542,485.994 194.878,486.879 L 83.465,507.256 C 71.081,509.585 59.594,501.536 57.265,489.151 L 11.125,235.281 C 8.794,222.898 16.844,211.41 29.228,209.081 L 140.642,188.704 C 145.305,187.82 150.076,188.626 154.175,191.003 L 154.175,37.828 C 154.175,24.923 164.598,14.5 177.503,14.5 L 430.497,14.5 C 443.401,14.5 453.824,24.923 453.824,37.828 L 453.824,191.004 C 457.923,188.626 462.694,187.82 467.358,188.705 L 578.771,209.082 C 591.155,211.411 599.206,222.898 596.875,235.283 L 550.735,489.152 C 548.405,501.537 536.918,509.586 524.534,507.257 L 413.121,486.88 C 408.457,485.995 404.415,483.403 401.62,479.569 L 401.62,37.828 C 401.62,33.718 398.282,30.379 394.172,30.379 L 213.828,30.379 C 209.717,30.379 206.379,33.718 206.379,37.828 L 206.379,479.568 Z",
      })
    );

    series.labelsContainer.set("width", am5.percent(100));

    series.ticks.template.setAll({
      location: 0.4,
      visible: false,
    });

    series.labels.template.setAll({
      text: "{category}",
      fontSize: 12,
      fill: am5.color(0x6b7280),
      textAlign: "center",
      centerX: am5.percent(50),
      paddingTop: 0,
      paddingBottom: 0,
    });

    series.slices.template.setAll({
      strokeWidth: 2,
      stroke: am5.color(0xffffff),
      tooltipText: "{category}: {value}%",
    });

    series.data.setAll([
      {
        category: "Utilized",
        value: 40,
      },
      {
        category: "Unutilized",
        value: 60,
      },
    ]);

    series.slices.template.adapters.add("fill", (fill, target) => {
      const dataItem = target.dataItem;
      if (dataItem) {
        const category = dataItem.get("category");
        if (category === "Utilized") {
          return am5.color(0x1a56db);
        } else {
          return am5.color(0xf5bb16);
        }
      }
      return fill;
    });

    series.appear(1000);

    return () => {
      if (rootRef.current) {
        rootRef.current.dispose();
        rootRef.current = null;
      }
    };
  }, []);

  return <div ref={chartRef} className="w-full h-[280px]"></div>;
};
