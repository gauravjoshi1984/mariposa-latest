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
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
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
  colors: string[];

  stroke: ApexStroke;
  title: ApexTitleSubtitle;
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
              return value + "$MMHG";
            }
          },
        },
      },

      chart: {
        type: "rangeBar",
        height: 150,
        width: 280,
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
      },
    };
    this.chartOptions2 = {
      series: [
        {
          name: "Desktops",
          data: [98, 98.5, 104, 97, 98, 98.5, 97],
        },
      ],
      chart: {
        height: 150,
        width: 280,
        type: "line",
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
      yaxis: {
        opposite: true,
        labels: {
          formatter: function (value) {
            if (value == 96 || value == 100 || value == 104) {
              return value + "°F";
            }
          },
        },
      },
      stroke: {
        curve: "straight",
        width: 3,
      },
      // fill: {
      colors: ["#E229F2"],
      // },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S"],
      },
    };
    this.chartOptions3 = {
      series: [
        {
          name: "Desktops",
          data: [98, 98.5, 104, 97, 98, 98.5, 97],
        },
      ],
      chart: {
        height: 150,
        width: 280,
        type: "line",
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
      yaxis: {
        opposite: true,
        labels: {
          formatter: function (value) {
            if (value == 96 || value == 100 || value == 104) {
              return value + "°F";
            }
          },
        },
      },
      stroke: {
        curve: "straight",
        width: 3,
      },
      // fill: {
      colors: ["#FF002B"],
      // },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S"],
      },
    };
    this.chartOptions4 = {
      series: [
        {
          name: "Desktops",
          data: [98, 98.5, 104, 97, 98, 98.5, 97],
        },
      ],
      chart: {
        height: 150,
        width: 280,
        type: "line",
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
      yaxis: {
        opposite: true,
        labels: {
          formatter: function (value) {
            if (value == 96 || value == 100 || value == 104) {
              return value + "°F";
            }
          },
        },
      },
      stroke: {
        curve: "straight",
        width: 3,
      },
      // fill: {
      colors: ["#FFBC00"],
      // },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["S", "M", "T", "W", "T", "F", "S"],
      },
    };
  }
}
