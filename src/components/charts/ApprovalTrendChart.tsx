import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import React, { useEffect, useRef } from "react";

export const ApprovalTrendChart = (): JSX.Element => {
  const chartRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<am5.Root | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    if (rootRef.current) return;

    const root = am5.Root.new(chartRef.current);
    rootRef.current = root;

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
      })
    );

    const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "month",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30,
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.get("renderer").labels.template.setAll({
      fontSize: 12,
      fill: am5.color(0x6b7280),
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    yAxis.get("renderer").labels.template.setAll({
      fontSize: 10,
      fill: am5.color(0x6b7280),
    });

    const series1 = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Approved",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "approved",
        categoryXField: "month",
        stroke: am5.color(0x1a56db),
        fill: am5.color(0x1a56db),
        tooltip: am5.Tooltip.new(root, {
          labelText: "{name}: {valueY}",
        }),
      })
    );

    series1.strokes.template.setAll({
      strokeWidth: 2,
    });

    series1.fills.template.setAll({
      fillOpacity: 0.1,
      visible: true,
    });

    series1.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 4,
          fill: series1.get("fill"),
          stroke: am5.color(0xffffff),
          strokeWidth: 2,
        }),
      });
    });

    const series2 = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Unapproved",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "unapproved",
        categoryXField: "month",
        stroke: am5.color(0xf5bb16),
        fill: am5.color(0xf5bb16),
        tooltip: am5.Tooltip.new(root, {
          labelText: "{name}: {valueY}",
        }),
      })
    );

    series2.strokes.template.setAll({
      strokeWidth: 2,
    });

    series2.fills.template.setAll({
      fillOpacity: 0.1,
      visible: true,
    });

    series2.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 4,
          fill: series2.get("fill"),
          stroke: am5.color(0xffffff),
          strokeWidth: 2,
        }),
      });
    });

    const data = [
      { month: "June 2025", approved: 80, unapproved: 40 },
      { month: "July 2025", approved: 95, unapproved: 55 },
      { month: "August 2025", approved: 85, unapproved: 45 },
    ];

    series1.data.setAll(data);
    series2.data.setAll(data);
    xAxis.data.setAll(data);

    series1.appear(1000);
    series2.appear(1000);
    chart.appear(1000, 100);

    return () => {
      if (rootRef.current) {
        rootRef.current.dispose();
        rootRef.current = null;
      }
    };
  }, []);

  return <div ref={chartRef} className="w-full h-[235px]"></div>;
};
