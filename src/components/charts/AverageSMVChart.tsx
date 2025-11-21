import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import React, { useEffect, useRef } from "react";

export const AverageSMVChart = (): JSX.Element => {
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

    const cursor = chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "none",
      })
    );
    cursor.lineY.set("visible", false);

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "date",
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
        name: "Costing average SMV",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "costing",
        categoryXField: "date",
        stroke: am5.color(0x9061f9),
        fill: am5.color(0x9061f9),
        tooltip: am5.Tooltip.new(root, {
          labelText: "{name}: {valueY}",
        }),
      })
    );

    series1.strokes.template.setAll({
      strokeWidth: 3,
    });

    series1.bullets.push(() => {
      const bulletCircle = am5.Circle.new(root, {
        radius: 5,
        fill: series1.get("fill"),
        stroke: am5.color(0xffffff),
        strokeWidth: 2,
      });

      bulletCircle.states.create("hover", {
        scale: 1.3,
      });

      return am5.Bullet.new(root, {
        sprite: bulletCircle,
      });
    });

    series1.bullets.push(() => {
      return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Label.new(root, {
          text: "{valueY}",
          fill: am5.color(0xffffff),
          centerX: am5.percent(50),
          centerY: am5.percent(50),
          populateText: true,
          fontSize: 10,
          fontWeight: "700",
          background: am5.RoundedRectangle.new(root, {
            fill: series1.get("fill"),
            cornerRadiusTL: 6,
            cornerRadiusTR: 6,
            cornerRadiusBL: 6,
            cornerRadiusBR: 6,
          }),
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 10,
          paddingRight: 10,
        }),
        dy: -30,
      });
    });

    const series2 = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Production average SVG",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "production",
        categoryXField: "date",
        stroke: am5.color(0x1a56db),
        fill: am5.color(0x1a56db),
        tooltip: am5.Tooltip.new(root, {
          labelText: "{name}: {valueY}",
        }),
      })
    );

    series2.strokes.template.setAll({
      strokeWidth: 3,
    });

    series2.bullets.push(() => {
      const bulletCircle = am5.Circle.new(root, {
        radius: 5,
        fill: series2.get("fill"),
        stroke: am5.color(0xffffff),
        strokeWidth: 2,
      });

      bulletCircle.states.create("hover", {
        scale: 1.3,
      });

      return am5.Bullet.new(root, {
        sprite: bulletCircle,
      });
    });

    series2.bullets.push(() => {
      return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Label.new(root, {
          text: "{valueY}",
          fill: am5.color(0xffffff),
          centerX: am5.percent(50),
          centerY: am5.percent(50),
          populateText: true,
          fontSize: 10,
          fontWeight: "700",
          background: am5.RoundedRectangle.new(root, {
            fill: series2.get("fill"),
            cornerRadiusTL: 6,
            cornerRadiusTR: 6,
            cornerRadiusBL: 6,
            cornerRadiusBR: 6,
          }),
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 10,
          paddingRight: 10,
        }),
        dy: -30,
      });
    });

    const data = [
      { date: "01 Feb", costing: 14, production: 3 },
      { date: "02 Feb", costing: 14, production: 5 },
      { date: "03 Feb", costing: 14, production: 6 },
      { date: "04 Feb", costing: 12, production: 15 },
      { date: "05 Feb", costing: 6, production: 13 },
      { date: "06 Feb", costing: 8, production: 14 },
      { date: "07 Feb", costing: 6, production: 9 },
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

  return <div ref={chartRef} className="w-full h-[405px]"></div>;
};
