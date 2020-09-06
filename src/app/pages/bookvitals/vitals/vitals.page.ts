import { Component, OnInit, ViewChild } from '@angular/core';
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
} from 'ng-apexcharts';
import { ModalController , PopoverController, NavController } from '@ionic/angular';
import { AddvitalComponent } from './addvital/addvital.component';
import { ProfilelistComponent } from '../profilelist/profilelist.component';
import { DataserviceService } from '../../dataservice.service';
import { CreatingcareService } from '../../creatingcare/creatingcare.service';
import { ConfigCareServiceService } from '../../configcare/config-care-service.service';
import { BookVitalsService } from '../book-vital.service';
import * as moment from 'moment';
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
  selector: 'app-vitals',
  templateUrl: './vitals.page.html',
  styleUrls: ['./vitals.page.scss'],
})
export class VitalsPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController,
    private dataService: DataserviceService,
    private _creatingCareService: CreatingcareService,
    private configCareService: ConfigCareServiceService,
    private bookVitalService: BookVitalsService,
    private navCtrl: NavController) {}
  // @ViewChild("chart") chart: ChartComponent;
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions5: Partial<ChartOptions3>;
  strokepulse: ApexStroke = {
    curve: 'straight',
    colors: ['#FF002B'],
    width: 2,
  };
  dates = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  fillpulse: ApexFill = {
    colors: ['#FF002B'],
  };
  strokebg: ApexStroke = {
    curve: 'straight',
    colors: ['#FFBC00'],
    width: 2,
  };
  fillbg: ApexFill = {
    colors: ['#FFBC00'],
  };
  showData = true;
  configCareDetails;
  series = {
    bloodpressure: [
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
    ],
    temperature: [{name: 'Temperature', data: [97.85, 98.0, 99.9, 98.5, 98.0, 97.5, 97.0]}],
    pulse: [{name: 'Pulse', data: [97.85, 98.0, 99.9, 98.5, 98.0, 97.5, 97.0]}],
    bloodglucose: [{name: 'Blood Glucose', data: [97.85, 98.0, 99.9, 98.5, 98.0, 97.5, 97.0]}],
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
  yaxisTemp: ApexYAxis = {
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
  };
  yaxisPulse: ApexYAxis = {
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
  };

  yaxisBloodGlucose: ApexYAxis = {
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
    },
  };
  userInfo: any = {};
  segmentVar = 'addvitals';
  vitalUnits = {
    temperature: 'F',
    bloodpressure: 'Mm Hg',
    pulse: 'Bpm',
    bloodglucose : 'mg/dl'
  };

  vitalCards: any = [];
  vitals: any = [];
  vitalValues = {};
  reportDetail: any = {};
  ngOnInit() {
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
      },
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
  async ionViewWillEnter(){
    this.userInfo = await this.getUserinfo();
    this.configCareDetails = await this.configCareService.getConfigCareDetails();
    this.vitalCards = this.bookVitalService.getVitalsSchedule(this.configCareDetails);
    const vitalValues = await this.bookVitalService.getVitals();
    this.vitals = vitalValues;
    this.getReportData();
    Object.keys(vitalValues).forEach(key => {
      this.vitalValues[key] = JSON.parse(vitalValues[key][0].values)[0];
    });
  }
  async getReportData(){
    const reportVitals = await this.bookVitalService.getVitals(true);
    Object.keys(reportVitals).forEach(key => {
      this.reportDetail[key] = {series: [], entries: [], valueStr: ''};
      this.chartCardData[key].hasValue = true;
      if (key !== 'bloodpressure'){
        this.series[key][0].data = new Array(7).fill(0);
      }
      else{
        this.series[key][0].data = this.series[key][0].data.map(val => ({x: val.x, y: [0, 0]}));
      }
      reportVitals[key].forEach(item => {
        const values = JSON.parse(item.values);
        let avgValue;
        if (key === 'bloodpressure'){
          avgValue = values[0].valueStr;
        }
        else{
          avgValue = values.reduce((total, value, index, arr) => {
            total += +value.valueStr;
            if (index === arr.length - 1){
              return total / arr.length;
            }else {
              return total;
            }
          }, 0);
        }
        this.reportDetail[key].entries.push({day: moment(item.vitalDate, 'YYYY-MM-DD'), values, valueStr: avgValue});
        this.chartCardData[key].value = avgValue;
        const day = moment(item.vitalDate, 'YYYY-MM-DD').day();
        if (key === 'bloodpressure'){
          this.series[key][0].data[day].y = [values[0].value.systolic, values[0].value.diastolic];
        }
        else{
          this.series[key][0].data[day] = +avgValue;
        }
        this.reportDetail[key].valueStr = avgValue;
      });
      this.reportDetail[key].series = this.series[key];
    });
  }
  // getScheduledVitals(){
  //   this.vitalCards = this.bookVitalService.getVitalsSchedule(this.configCareDetails);
  //   // const configCareVitalOptions = this.configCareDetails.configCareConfiguration.VITALS.type;
  //   // const configCareVitals = this.configCareDetails.configCareValues.VITALS;
  //   // const scheduledVitals = {};
  //   // const currentDay = new Date().getDay();
  //   // configCareVitals.forEach(schedule => {
  //   //   const vitalConfig = configCareVitalOptions.find(option => option.value === schedule.type);
  //   //   if (schedule.repeatDays.indexOf(currentDay) >= 0) {
  //   //     scheduledVitals[schedule.type] = {...schedule, label: vitalConfig.name};
  //   //   }
  //   // });
  //   // Object.keys(scheduledVitals).forEach(key => {
  //   //   this.vitalCards.push(scheduledVitals[key]);
  //   // });
  // }
  toggleData() {
    this.showData = !this.showData;
  }
  async getUserinfo() {
    const userData = await this.dataService.getUserInfo();
    const members = (await this._creatingCareService.getCareCircleDetails()).members;
    const user = members.find(member => member.userId === userData.userId);
    // const user = {
    //   userType: 'SENIOR',
    // };
    return user;
  }
  async gotoModel(item: any) {
    const modal = await this.modalCtrl.create({
      component: AddvitalComponent,
      componentProps: {
        item
      },
    });
    modal.onDidDismiss().then((data: any) => {
      if (data.data?.value){
        if (!(item.type in this.vitalValues)){
          this.vitalValues[item.type] = {};
        }
        this.vitalValues[item.type] = data.data;
        if (data.data && data.data.value.diastolic && data.data.value.systolic) {
          this.vitalValues[item.type].valueStr = data.data.value.diastolic + '/' + data.data.value.systolic;
        }
        else{
          this.vitalValues[item.type].valueStr = data.data.value.value;
        }
        this.bookVitalService.setVitalValues(this.vitalValues);
        this.bookVitalService.addVitals(item.type, this.vitalValues[item.type]);
        this.getReportData();
      }
    });
    return await modal.present();
  }
  getTimeString(timeObj){
    const timeStr = timeObj.hours + ':' + timeObj.minutes.toString().padStart(2, '0');
    return timeStr;
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ProfilelistComponent,
      cssClass: 'popoverstylepl',
      event: ev,
      translucent: true,
      mode: 'ios',
    });
    popover.onDidDismiss().then((x) => {
      // if (x.data === "delete") {
      // }
    });
    return await popover.present();
  }
  goToReportDetail(type){
    this.bookVitalService.setReportDetail(type, this.reportDetail[type]);
    this.navCtrl.navigateForward(`/bookvitals/reportdetailedview`);
  }
  setData(ev: any) {
    this.segmentVar = ev;
  }
}
