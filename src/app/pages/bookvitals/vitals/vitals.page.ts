import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexAnnotations,
  ApexYAxis,
  ApexFill,
  ApexGrid,
  ApexXAxis,
  ApexStroke,
  ApexTitleSubtitle,
  ApexLegend,
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  legend: ApexLegend;

  fill: ApexFill;
  grid: ApexGrid;
};
export type ChartOptions2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  yaxis: ApexYAxis;
  fill: ApexFill;

  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
export type ChartOptions3 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  fill: ApexFill;
};
@Component({
  selector: "app-vitals",
  templateUrl: "./vitals.page.html",
  styleUrls: ["./vitals.page.scss"],
})
export class VitalsPage implements OnInit {
  // @ViewChild("chart") chart: ChartComponent;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions2>;
  public chartOptions3: Partial<ChartOptions2>;
  public chartOptions4: Partial<ChartOptions2>;
  public chartOptions5: Partial<ChartOptions3>;
  strokepulse: ApexStroke = {
    curve: "straight",
    colors: ["#FF002B"],
    width: 2,
  };
  fillpulse: ApexFill = {
    colors: ["#FF002B"],
  };
  strokebg: ApexStroke = {
    curve: "straight",
    colors: ["#FFBC00"],
    width: 2,
  };
  fillbg: ApexFill = {
    colors: ["#FFBC00"],
  };
  showData = true;
  series = {
    monthDataSeries1: {
      prices: [97.85, 98.0, 99.9, 98.5, 98.0, 97.5, 97.0],
      dates: ["S", "M", "T", "W", "T", "F", "S"],
    },
    monthDataSeries2: {
      prices: [8423.7, 8423.5, 8514.3, 8481.85],
      dates: ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017"],
    },
    monthDataSeries3: {
      prices: [7114.25, 7126.6, 7116.95, 7203.7],
      dates: ["02 Jun 2017", "05 Jun 2017", "06 Jun 2017", "07 Jun 2017"],
    },
  };
  chartCardData = {
    bloodpressure: {
      value: "11/60",
      hasValue: true,
      title: "Blood Pressure",
    },
    temparature: {
      value: "98.7",
      hasValue: true,
      title: "Temperature",
    },
    pulse: {
      value: "120",
      hasValue: true,
      title: "Pulse",
    },
    bloodglucose: {
      value: "100",
      hasValue: true,
      title: "Blood Glucose",
    },
  };
  yaxisTemp: ApexYAxis = {
    opposite: true,

    labels: {
      formatter: function (value: any) {
        if (value == 96 || value == 100 || value == 104) {
          return value + "°F";
        }
      },
      align: "right",
    },
  };
  yaxisPulse: ApexYAxis = {
    opposite: true,

    labels: {
      formatter: function (value: any) {
        if (value == 96 || value == 100 || value == 104) {
          return value + " Bpm";
        }
      },
      align: "right",
    },
  };

  yaxisBloodGlucose: ApexYAxis = {
    opposite: true,

    labels: {
      formatter: function (value: any) {
        if (value == 96 || value == 100 || value == 104) {
          return value + " mg/dl";
        }
      },
      align: "right",
    },
  };

  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: "blue",
          data: [
            {
              x: "S",
              y: [70, 120],
            },
            {
              x: "M",
              y: [80, 130],
            },
            {
              x: "T",
              y: [65, 115],
            },
            {
              x: "W",
              y: [80, 120],
            },
            {
              x: "T",
              y: [85, 135],
            },
            {
              x: "F",
              y: [80, 130],
            },
            {
              x: "S",
              y: [70, 120],
            },
          ],
        },
      ],
      yaxis: {
        opposite: true,

        labels: {
          formatter: function (value) {
            if (value == 60 || value == 100 || value == 140) {
              return value + "MMHG";
            }
          },
          align: "center",
        },
      },
      legend: {
        horizontalAlign: "right",
      },

      chart: {
        type: "rangeBar",
        height: 110,
        width: "98%",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "18",
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        colors: ["#2AE4F0"],
      },
      grid: {
        xaxis: {
          lines: { show: true },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
    };

    this.chartOptions5 = {
      series: [
        {
          name: "STOCK ABC",
          data: this.series.monthDataSeries1.prices,
        },
      ],
      chart: {
        type: "area",
        height: 110,
        width: "98%",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        colors: ["#E229F2"],
        width: 2,
      },

      title: {
        text: "Fundamental Analysis of Stocks",
        align: "left",
      },
      subtitle: {
        text: "Price Movements",
        align: "left",
      },
      labels: this.series.monthDataSeries1.dates,
      xaxis: {
        type: "category",
      },
      yaxis: {
        opposite: true,

        labels: {
          formatter: function (value: any, opt) {
            if (value == 96 || value == 100 || value == 104) {
              return value + "°F";
            }
          },
          align: "right",
        },
      },

      legend: {
        horizontalAlign: "right",
      },
      fill: {
        colors: ["#E229F2"],
      },
    };
  }
  toggleData() {
    this.showData = !this.showData;
  }
}
