import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import React, { useEffect, useRef } from "react";

export const StyleAnalysisBarChart = (): JSX.Element => {
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
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none",
        layout: root.verticalLayout,
      })
    );

    const xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
    });

    xRenderer.labels.template.setAll({
      rotation: -45,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
      fontSize: 12,
      fill: am5.color(0x6b7280),
    });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "style",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    yAxis.get("renderer").labels.template.setAll({
      fontSize: 10,
      fill: am5.color(0x6b7280),
    });

    function createSeries(name: string, field: string, color: number) {
      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: field,
          categoryXField: "style",
          fill: am5.color(color),
          stroke: am5.color(color),
          tooltip: am5.Tooltip.new(root, {
            labelText: "{name}: {valueY}",
          }),
        })
      );

      series.columns.template.setAll({
        width: am5.percent(80),
        tooltipY: 0,
        strokeOpacity: 0,
      });

      series.columns.template.states.create("hover", {
        fillOpacity: 0.8,
      });

      series.data.setAll(data);
      series.appear(1000);
    }

    const data = [
      {
        style: "Shirts",
        totalOperation: 199,
        totalAnalysis: 160,
        videoAttached: 89,
      },
      {
        style: "Tshirts",
        totalOperation: 215,
        totalAnalysis: 173,
        videoAttached: 88,
      },
      {
        style: "Kids Cargo Pa..",
        totalOperation: 215,
        totalAnalysis: 64,
        videoAttached: 33,
      },
      {
        style: "KCL Jogger",
        totalOperation: 215,
        totalAnalysis: 64,
        videoAttached: 33,
      },
      {
        style: "KCL Hoody",
        totalOperation: 215,
        totalAnalysis: 64,
        videoAttached: 33,
      },
    ];

    xAxis.data.setAll(data);

    createSeries("Total Operation", "totalOperation", 0x1a56db);
    createSeries("Total Analysis", "totalAnalysis", 0xf5bb16);
    createSeries("Video Attached", "videoAttached", 0x9061f9);

    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
      })
    );

    legend.data.setAll(chart.series.values);

    chart.appear(1000, 100);

    return () => {
      if (rootRef.current) {
        rootRef.current.dispose();
        rootRef.current = null;
      }
    };
  }, []);

  return <div ref={chartRef} className="w-full h-[320px]"></div>;
};
