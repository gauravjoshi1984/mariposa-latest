import { Component, OnInit } from "@angular/core";
import { ChartOptions } from "../vitals/vitals.page";

@Component({
  selector: "app-bloodpressuredetailedview",
  templateUrl: "./bloodpressuredetailedview.page.html",
  styleUrls: ["./bloodpressuredetailedview.page.scss"],
})
export class BloodpressuredetailedviewPage implements OnInit {
  public chartOptions: Partial<ChartOptions>;

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
        height: 110,
        width: 310,
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
  }
}
