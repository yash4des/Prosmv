import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import React, { useEffect, useRef } from "react";

export const StageWiseBubbleChart = (): JSX.Element => {
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
      })
    );

    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 50,
        }),
        min: 0,
        max: 100,
      })
    );

    xAxis.get("renderer").labels.template.setAll({
      visible: false,
    });

    xAxis.get("renderer").grid.template.setAll({
      visible: false,
    });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
        min: 0,
        max: 100,
      })
    );

    yAxis.get("renderer").labels.template.setAll({
      visible: false,
    });

    yAxis.get("renderer").grid.template.setAll({
      visible: false,
    });

    function createSeries(
      name: string,
      color: number,
      x: number,
      y: number,
      value: number
    ) {
      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "y",
          valueXField: "x",
          valueField: "value",
          fill: am5.color(color),
          stroke: am5.color(color),
        })
      );

      series.strokes.template.setAll({
        visible: false,
      });

      const circleTemplate = am5.Template.new<am5.Circle>({});

      series.bullets.push(() => {
        const bulletCircle = am5.Circle.new(
          root,
          {
            radius: 20,
            fill: series.get("fill"),
            fillOpacity: 0.7,
            stroke: am5.color(0xffffff),
            strokeWidth: 2,
            tooltipText: "{name}: {value}",
          },
          circleTemplate
        );

        bulletCircle.states.create("hover", {
          scale: 1.1,
          fillOpacity: 0.9,
        });

        return am5.Bullet.new(root, {
          sprite: bulletCircle,
        });
      });

      series.bullets.push(() => {
        return am5.Bullet.new(root, {
          sprite: am5.Label.new(root, {
            text: String(value),
            fill: am5.color(0xffffff),
            centerX: am5.percent(50),
            centerY: am5.percent(50),
            populateText: true,
            fontSize: 12,
            fontWeight: "600",
          }),
        });
      });

      series.data.setAll([
        {
          x: x,
          y: y,
          value: value,
          name: name,
        },
      ]);

      return series;
    }

    createSeries("Costing", 0x1a56db, 70, 50, 4);
    createSeries("Production", 0xf5bb16, 30, 70, 4);
    createSeries("Fit", 0x16bdca, 20, 30, 3);
    createSeries("Size Set", 0x9061f9, 85, 20, 1);

    chart.appear(1000, 100);

    return () => {
      if (rootRef.current) {
        rootRef.current.dispose();
        rootRef.current = null;
      }
    };
  }, []);

  return <div ref={chartRef} className="w-full h-[241px]"></div>;
};
