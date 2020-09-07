import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartOptions3 } from '../vitals/vitals.page';
import { BookVitalsService } from '../book-vital.service';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-bloodpressuredetailedview',
  templateUrl: './bloodpressuredetailedview.page.html',
  styleUrls: ['./bloodpressuredetailedview.page.scss'],
})
export class BloodpressuredetailedviewPage implements OnInit {
  public chartOptions: Partial<ChartOptions>;
  public chartOptions5: Partial<ChartOptions3>;
  reportData: any = {};
  stroke =  {
    temperature: {
      curve: 'straight',
      colors: ['#E229F2'],
      width: 2,
    },
    pulse: {
      curve: 'straight',
      colors: ['#FF002B'],
      width: 2,
    },
    bloodglucose: {
      curve: 'straight',
      colors: ['#FFBC00'],
      width: 2,
    }
  };
  fill = {
    temperature: {
      colors: ['#E229F2'],
    },
    pulse: {
      colors: ['#FF002B'],
    },
    bloodglucose: {
      colors: ['#FFBC00'],
    }
  };
  yaxis = {
    temperature: {
    opposite: true,

    labels: {
      formatter(value: any) {
        if (value == 96 || value == 100 || value == 104) {
          return value + '°F';
        }
      },
      show: true,
      maxWidth: 200,
      align: 'right',
      style: {fontSize: '8px', colors: '#000000'},
      offsetX: 8,
    },
  },
  pulse: {
    opposite: true,
    labels: {
      show: true,
      maxWidth: 200,

      style: {fontSize: '8px', colors: '#000000'},
      formatter(value: any) {
        if (value == 96 || value == 100 || value == 104) {
          return  value + 'Bpm';
        }
      },
      align: 'right',
      offsetX: 8,

    },
  },
  bloodglucose: {
    opposite: true,
    labels: {
      show: true,
      maxWidth: 200,
      align: 'right',
      style: {fontSize: '8px', colors: '#000000'},
      formatter(value: any) {
        if (value == 96 || value == 100 || value == 104) {
          return value + 'mg/dl';

        }
      },
      // align:"center",
      offsetX: 8,
      }
    }
  };
  chartCardData = {
    bloodpressure: {
      value: '110/60',
      hasValue: false,
      title: 'Blood Pressure',
    },
    temperature: {
      value: '98.7',
      hasValue: false,
      title: 'Temperature',
    },
    pulse: {
      value: '120',
      hasValue: false,
      title: 'Pulse',
    },
    bloodglucose: {
      value: '100',
      hasValue: false,
      title: 'Blood Glucose',
    },
  };
  dates = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  series = [
    {
      name: 'Blood Pressure',
      data: [
        {
          x: 'S',
          y: [70, 120],
        },
        {
          x: 'M',
          y: [80, 130],
        },
        {
          x: 'T',
          y: [65, 115],
        },
        {
          x: 'W',
          y: [80, 120],
        },
        {
          x: 'T',
          y: [85, 135],
        },
        {
          x: 'F',
          y: [80, 130],
        },
        {
          x: 'S',
          y: [70, 120],
        },
      ],
    },
  ];
  dateStr = '';
  vitalUnits = {
    temperature: 'F',
    bloodpressure: 'Mm Hg',
    pulse: 'Bpm',
    bloodglucose : 'mg/dl'
  };
  constructor(
    private bookVitalService: BookVitalsService,
    private navCtrl: NavController
  ) {}
  ngOnInit() {
    const weekDate = this.bookVitalService.getStartEnd();
    this.dateStr = `${moment(weekDate.start, 'YYYY-MM-DD').format('DD MMM')} - ${moment(weekDate.end, 'YYYY-MM-DD').format('DD MMM YYYY')}`;
    this.chartOptions = {
      yaxis: {
        opposite: true,

        labels: {
          show: true,
      maxWidth: 200,
      align: 'right',
      style: {fontSize: '8px', colors: '#000000'},
          formatter(value) {
            if (value == 60 || value == 100 || value == 140) {
              return value + 'MMHG';
            }
          },
          offsetX: -5,

        },
      },
      legend: {
        horizontalAlign: 'right',
      },

      chart: {
        type: 'rangeBar',
        height: 110,
        width: '100%',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '18',
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        colors: ['#2AE4F0'],
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
      }
    };
    this.chartOptions5 = {
      chart: {
        type: 'area',
        height: 110,
        width: '100%',
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
        curve: 'straight',
        colors: ['#E229F2'],
        width: 2,
      },

      title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left',
      },
      subtitle: {
        text: 'Price Movements',
        align: 'left',
      },
      labels: this.dates,
      xaxis: {
        type: 'category',
      },
      yaxis: {
        opposite: true,

        labels: {
          formatter(value: any, opt) {
            if (value == 96 || value == 100 || value == 104) {
              return ' ' + value + '°F';
            }
          },
          align: 'right',
        },
      },

      legend: {
        horizontalAlign: 'right',
      },
      fill: {
        colors: ['#E229F2'],
      },
    };
  }
  back(){
    this.navCtrl.back();
  }
  async ionViewWillEnter(){
    this.reportData = await this.bookVitalService.getReportDetail();
  }
  getDayString(date){
    return moment(date).format('dddd, DD MMM YYYY');
  }
  getTimeString(timeObj){
    const hours = timeObj.hours === 0 ? 12 : (timeObj.hours > 12 ? timeObj.hours % 12 : timeObj.hours);
    const ampm = timeObj.hours === 0 ? 'AM' : (timeObj.hours > 12 ? 'PM' : 'AM');
    const timeStr = hours + ':' + timeObj.minutes.toString().padStart(2, '0') + ' ' + ampm;
    return timeStr;
  }
}
