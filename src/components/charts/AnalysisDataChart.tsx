import * as am5 from "@amcharts/amcharts5";
import * as am5radar from "@amcharts/amcharts5/radar";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import React, { useEffect, useRef } from "react";

export const AnalysisDataChart = (): JSX.Element => {
  const chartRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<am5.Root | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    if (rootRef.current) return;

    const root = am5.Root.new(chartRef.current);
    rootRef.current = root;

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5radar.RadarChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        innerRadius: am5.percent(20),
      })
    );

    const xRenderer = am5radar.AxisRendererCircular.new(root, {});
    xRenderer.labels.template.setAll({
      radius: 10,
      fontSize: 12,
      fill: am5.color(0x6b7280),
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0,
        categoryField: "category",
        renderer: xRenderer,
      })
    );

    const yRenderer = am5radar.AxisRendererRadial.new(root, {});
    yRenderer.labels.template.setAll({
      fontSize: 10,
      fill: am5.color(0x6b7280),
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: yRenderer,
        min: 0,
        max: 100,
      })
    );

    const series = chart.series.push(
      am5radar.RadarLineSeries.new(root, {
        name: "Operations",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "operations",
        categoryXField: "category",
        stroke: am5.color(0x1a56db),
        fill: am5.color(0x1a56db),
        fillOpacity: 0.1,
      })
    );

    series.strokes.template.setAll({
      strokeWidth: 2,
    });

    series.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 4,
          fill: series.get("fill"),
          stroke: am5.color(0xffffff),
          strokeWidth: 2,
        }),
      });
    });

    const series2 = chart.series.push(
      am5radar.RadarLineSeries.new(root, {
        name: "Analysis",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "analysis",
        categoryXField: "category",
        stroke: am5.color(0x7e3af2),
        fill: am5.color(0x7e3af2),
        fillOpacity: 0.1,
      })
    );

    series2.strokes.template.setAll({
      strokeWidth: 2,
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
      { category: "Operations", operations: 80, analysis: 70 },
      { category: "Analysis", operations: 75, analysis: 85 },
      { category: "Under App.", operations: 65, analysis: 60 },
      { category: "Approved", operations: 90, analysis: 75 },
    ];

    series.data.setAll(data);
    series2.data.setAll(data);
    xAxis.data.setAll(data);

    series.appear(1000);
    series2.appear(1000);
    chart.appear(1000, 100);

    return () => {
      if (rootRef.current) {
        rootRef.current.dispose();
        rootRef.current = null;
      }
    };
  }, []);

  return <div ref={chartRef} className="w-full h-[277px]"></div>;
};
