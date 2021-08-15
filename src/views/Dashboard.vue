<template>
  <div class="dashboard">
    <div class="container md-layout md-gutter mt20">
      <div class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-50 md-small-size-100 md-xsmall-size-100 status-card" v-for="item in statusInfo" :key="item.title">
        <status-card 
        :title="item.title" 
        :category="item.category" 
        :status="item.status"
        :statusIcon="item.statusIcon"
        :statusColor="item.statusColor"
        :iconColor="item.iconColor">
        </status-card>
      </div>
    </div>
    <div class="container md-layout md-gutter">
      <div class="md-layout-item md-xlarge-size-66 md-large-size-66 md-medium-size-100 md-small-size-100 md-xsmall-size-100 status-card mb30">
        <md-card class="custom-card">
          <md-card-header md-alignment="left" class="flex">
            <h2>Average Transaction Size</h2>
            <div class="date-select">
              <md-menu md-size="medium" md-align-trigger>
                <md-button  md-menu-trigger>
                  <div class="md-layout flex" >
                    <p class="md-layout-item selected">December 2020</p>
                    <md-icon class="md-layout-item">keyboard_arrow_down</md-icon>
                  </div>
                </md-button>
                <md-menu-content>
                  <md-menu-item>Profile</md-menu-item>
                  <md-menu-item>Settings</md-menu-item>
                  <md-menu-item>Sign out</md-menu-item>
                </md-menu-content>
              </md-menu>
            </div>
          </md-card-header>

          <md-card-content md-alignment="left">
            <span>Last Upadated: 11:59 AM</span>
          </md-card-content >
            <big-chart class="mt30 height-300" 
              ref="bigChart"
              chart-id="big-line-chart"
              :chart-data="bigLineChart.chartData"
              :gradient-colors="bigLineChart.gradientColors"
              :gradient-stops="bigLineChart.gradientStops"
              :extra-options="bigLineChart.extraOptions">
            </big-chart>
        </md-card>
      </div>
      <div class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-50 md-small-size-100 md-xsmall-size-100 status-card mb30">
        <md-card class="custom-card">
          <md-card-header md-alignment="left">
            <h2 style="margin-top: 5px; margin-bottom: 15px">Transaction</h2>
          </md-card-header>

          <md-card-content md-alignment="left">
            <span>Last Upadated: 11:59 AM</span>
          </md-card-content >
            <bar-chart class="mt30 height-300" 
              chart-id="blue-bar-chart"
              :chart-data="blueBarChart.chartData"
              :extra-options="blueBarChart.extraOptions">
            </bar-chart>
        </md-card>
      </div>
    </div>
    <div class="container md-layout md-gutter">
      <div  class="md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-50 md-small-size-100 md-xsmall-size-100 status-card mb30">
        <md-card class="custom-card" >
          <md-card-header md-alignment="left">
            <h2>Success Rate</h2>
          </md-card-header>

          <md-card-content md-alignment="left">
            <span>Last Upadated: 11:59 AM</span>
          </md-card-content >
          <div>
            <div class="progress-item mt10">
              <img class="progress-img" src="https://demo.ottu.net/media/gateway/settings/logos/Visa-MasterCard002_ABOMLG2.png" alt="">
              <p>{{amount1}}%</p>
            </div>
            <md-progress-bar md-mode="determinate" :md-value="amount1"></md-progress-bar>
            <div class="progress-item mt10">
              <img class="progress-img" src="https://demo.ottu.net/media/gateway/settings/logos/Visa-MasterCard002.png" alt="">
              <p>{{amount2}}%</p>
            </div>
            <md-progress-bar class="determinate" md-mode="determinate" :md-value="amount2"></md-progress-bar>
            <div class="progress-item mt10">
              <img class="progress-img" src="https://demo.ottu.net/media/gateway/settings/logos/Screenshot_1_lQ3lByE.png" alt="">
              <p>{{amount3}}%</p>
            </div>
            <md-progress-bar class="determinate" md-mode="determinate" :md-value="amount3"></md-progress-bar>
          </div>
        </md-card>
      </div>
      <div class="md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-50 md-small-size-100 md-xsmall-size-100 status-card pb0 mb30">
        <md-card class="custom-card pb0">
          <md-card-header md-alignment="left">
            <h2>Product Wise Sales</h2>
          </md-card-header>

          <md-card-content md-alignment="left">
            <span>Last Upadated: 11:59 AM</span>
          </md-card-content >
            <multi-chart class="mt30 height-300" 
              ref="multiChart"
              chart-id="multi-line-chart"
              :chart-data="multipleLineChart.chartData"
              :extra-options="multipleLineChart.extraOptions">
            </multi-chart>
        </md-card>
      </div>
    </div>
    <div class="container md-layout md-gutter">
      <div  class="md-layout-item md-xlarge-size-66 md-large-size-66 md-medium-size-66 md-small-size-100 md-xsmall-size-100 status-card mb30">
        <md-card class="custom-card" >
          <md-card-header md-alignment="left">
            <h2>Recent ORders</h2>
          </md-card-header>

          <md-card-content md-alignment="left" class="mb20">
            <span>Last Upadated: 11:59 AM</span>
          </md-card-content >
            <md-table v-model="tableData" class="height-300 over-flow">

              <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple">
                <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
                <md-table-cell md-label="Amount" md-sort-by="amount">{{ item.amount }}</md-table-cell>
                <md-table-cell md-label="Currency" md-sort-by="currency">{{ item.currency }}</md-table-cell>
                <md-table-cell md-label="State" md-sort-by="state"><span :class="'status-tag color' + item.state">&#9679;</span> <span :class="'status-tag color' + item.state">{{ sattusArray[item.state-1] }}</span></md-table-cell>
                <md-table-cell md-label="Actiosn" md-sort-by="unit">
                  <md-menu>
                    <md-button class="md-icon-button" md-menu-trigger>
                      <md-icon>more_vert</md-icon>
                    </md-button>

                    <md-menu-content class="action-menu">
                      <md-menu-item @click="onClick" v-if="item.state === 2 ">
                        <md-icon>cancel</md-icon>
                        <span>Cancel</span>
                      </md-menu-item>
                      <md-menu-item @click="onClick">
                        <md-icon>delete</md-icon>
                        <span>Delete</span>
                      </md-menu-item>
                      <md-menu-item @click="onClick" v-if="item.state !== 1">
                        <md-icon>check</md-icon>
                        <span>Acknowledgy</span>
                      </md-menu-item>
                      <md-menu-item @click="onClick">
                        <md-icon>publish</md-icon>
                        <span>Disclose to merchant</span>
                      </md-menu-item>
                      <md-menu-item @click="onClick" v-if="item.state === 2 ">
                        <md-icon>email</md-icon>
                        <span>Email</span>
                      </md-menu-item>
                      <md-menu-item @click="onClick" v-if="item.state === 2 ">
                        <md-icon>mobile_screen_share</md-icon>
                        <span>WhatsApp</span>
                      </md-menu-item>
                    </md-menu-content>
                  </md-menu>
                </md-table-cell>
              </md-table-row>
            </md-table>

         
        </md-card>
      </div>
      <div class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-33 md-small-size-100 md-xsmall-size-100 status-card pb0 mb30">
        <md-card class="custom-card pb0">
          <md-card-header md-alignment="left">
            <h2>Recent actions</h2>
        </md-card-header>

          <md-card-content md-alignment="left">
            <span>Last Upadated: 11:59 AM</span>
          </md-card-content>
           <div class="height-300 over-flow mt20">
            <div class="container md-layout action-item" v-for="item in recentActions" :key="item.id">
            <div class="md-layout-item md-size-66 pr20">
              <h4 class="default mb0 pb0">{{item.name}}</h4>
              <h5 class="default mt0 text-overflow">{{item.detail}}</h5>
            </div>
            <div class="md-layout-item md-size-33">
              <h4>{{item.date}}</h4>
            </div>
           </div>
           </div>
        </md-card>
      </div>
    </div>
  
  </div>
</template>

<script>
  import StatusCard from '../components/statusCard';
  import * as chartConfigs from '../components/chart/config';
  import BarChart from '../components/chart/BarChart';
  import BigChart from '../components/chart/BigChart';
  import MultiChart from '@/components/chart/MultiChart';
  import config from '../config';

  export default {
    components: {
      StatusCard,
      BigChart,
      MultiChart,
      BarChart
    },
    data() {
      return {
        statusInfo: {
          average: {
            title: 'Average Transaction Size',
            category: 'Last Upate: 11:59 AM',
            status: '2450',
            statusColor: 'orange',
            statusIcon: '',
            iconColor: ''
          },
          gmv: {
            title: 'GMV',
            category: 'Last Upate: 11:59 AM',
            status: '0.1',
            statusColor: 'black',
            statusIcon: 'trending_up',
            iconColor: 'green'
          },
          overall: {
            title: 'Overall Success Rate',
            category: 'Last Upate: 11:59 AM',
            status: '12%',
            statusColor: 'black ',
            statusIcon: 'trending_down',
            iconColor: 'red1'
          },
        },
        bigLineChart: {
          allData: [
            [1500, 1300, 1200, 1800, 1200, 1250, 1300, 1450, 950, 1150, 1400, 1000],
          ],
          activeIndex: 0,
          chartData: {
            datasets: [{ }],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.purpleChartOptions,
          gradientColors: config.colors.orangeGradient,
          gradientStops: [1, 0.4, 0],
          categories: []
        },
        multipleLineChart: {
          allData: [
            [0, 5, 10, 4, 3, 33, 45, 44, 23, 30, 12],
            [4, 21, 10, 43, 29, 34, 3, 32, 16, 12, 10],
            [23, 33, 44, 23, 9, 10, 16, 32, 12, 28, 13],
            [4, 3, 33, 45, 44, 23, 30, 12, 0, 5, 10 ],
            [34, 3, 32, 16, 12, 10, 4, 21, 10, 43, 29],
            [16, 32, 12, 28, 13, 23, 33, 44, 23, 9, 10],
            [ 0, 5, 10 , 4, 3, 33, 45, 44, 23, 30, 12],
            [12, 10, 4, 21, 10, 43, 29, 34, 3, 32, 16],
            [13, 23, 33, 44, 23, 9, 10, 16, 32, 12, 28],
          ],
          // activeIndex: 0,
          chartData : {
            datasets: [
              {
                fill: false,
                label : 'E-commerce',
                borderColor: config.colors.multi[0],
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: config.colors.multi[0],
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: config.colors.multi[0],
                pointBorderWidth: 8,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 10,
                pointRadius: 3,
                data: [0, 5, 10, 4, 3, 33, 45, 44, 23, 30, 12]
              },
              {
                fill: false,
                label : 'Payment request',
                borderColor: config.colors.multi[1],
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: config.colors.multi[1],
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: config.colors.multi[1],
                pointBorderWidth: 8,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 10,
                pointRadius: 3,
                data: [4, 21, 10, 43, 29, 34, 3, 32, 16, 12, 10]
              },
              {
                fill: false, 
                label : 'Bulk payment request',
                borderColor: config.colors.multi[2],
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: config.colors.multi[2],
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: config.colors.multi[2],
                pointBorderWidth: 8,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 10,
                pointRadius: 3,
                data:  [23, 33, 44, 23, 9, 10, 16, 32, 12, 28, 13]
              },
              {
                fill: false, 
                label : 'Catalogue purchase',
                borderColor: config.colors.multi[3],
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: config.colors.multi[3],
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: config.colors.multi[3],
                pointBorderWidth: 8,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 10,
                pointRadius: 3,
                data: [4, 3, 33, 45, 44, 23, 30, 12, 0, 5, 10 ]
              },
              {
                fill: false, 
                label : 'Customer payment',
                borderColor: config.colors.multi[4],
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: config.colors.multi[4],
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: config.colors.multi[4],
                pointBorderWidth: 8,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 10,
                pointRadius: 3,
                data:  [34, 3, 32, 16, 12, 10, 4, 21, 10, 43, 29]
              },
              {
                fill: false, 
                label : 'Shopify',
                borderColor: config.colors.multi[5],
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: config.colors.multi[5],
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: config.colors.multi[5],
                pointBorderWidth: 8,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 10,
                pointRadius: 3,
                data: [16, 32, 12, 28, 13, 23, 33, 44, 23, 9, 10]
              },
              {
                fill: false, 
                label : 'Event',
                borderColor: config.colors.multi[6],
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: config.colors.multi[6],
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: config.colors.multi[6],
                pointBorderWidth: 8,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 10,
                pointRadius: 3,
                data: [ 0, 5, 10 , 4, 3, 33, 45, 44, 23, 30, 12]
              },
              {
                fill: false, 
                label : 'Food Ordering',
                borderColor: config.colors.multi[7],
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: config.colors.multi[7],
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: config.colors.multi[7],
                pointBorderWidth: 8,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 10,
                pointRadius: 3,
                data: [12, 10, 4, 21, 10, 43, 29, 34, 3, 32, 16]
              },
            ],
          labels: ['', '', '', '', '', '', '', '', '', '', '',],
        },
          extraOptions: chartConfigs.multiChartOptions,
          categories: []
        },
        blueBarChart: {
          extraOptions: chartConfigs.barChartOptions,
          chartData: {
            labels: ['Al Ahmadi', 'Hwalli', 'Al Manqaf', 'Al Jahra', 'Ar Riqqah'],
            datasets: [{
              label: "Countries",
              fill: true,
              borderColor: ['#FBBE8C', '#F79295', '#84C0DE', '#F8C8DD', '#E0B8FF'],
              borderWidth: 150,
              barRadius: 10,
              borderRadius: 20,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [70, 80, 20, 30, 90],
            }]
          },
          //gradientColors: config.colors.primaryGradient,
          //gradientStops: [1, 0.4, 0],
        },
        tableData: [
          {
            id: 1,
            email: 'khurram@kuwaitnet.com',
            amount: 22.00,
            currency: 'KWD',
            state: 1,
          },
          {
            id: 2,
            email: 'khurram@kuwaitnet.com',
            amount: 22.00,
            currency: 'KWD',
            state: 2,
          },
          {
            id: 3,
            email: 'khurram@kuwaitnet.com',
            amount: 22.00,
            currency: 'KWD',
            state: 3,
          },
          {
            id: 4,
            email: 'khurram@kuwaitnet.com',
            amount: 22.00,
            currency: 'KWD',
            state: 1,
          },
          {
            id: 5 ,
            email: 'khurram@kuwaitnet.com',
            amount: 22.00,
            currency: 'KWD',
            state: 3,
          },
          {
            id: 6 ,
            email: 'khurram@kuwaitnet.com',
            amount: 22.00,
            currency: 'KWD',
            state: 3,
          },
          {
            id: 7 ,
            email: 'khurram@kuwaitnet.com',
            amount: 22.00,
            currency: 'KWD',
            state: 3,
          },
        ],
        recentActions: [
          {
            id: 1,
            name: 'khurram',
            detail: 'Has created Payment request anyday hor',
            date: '2020-10-22'
          },
          {
            id: 2,
            name: 'khurram',
            detail: 'Has created Payment request anyday hor',
            date: '2020-10-22'
          },
          {
            id: 3,
            name: 'khurram',
            detail: 'Has created Payment request anyday hor',
            date: '2020-10-22'
          },
          {
            id: 4,
            name: 'khurram',
            detail: 'Has created Payment request anyday hor',
            date: '2020-10-22'
          },
          {
            id: 5,
            name: 'khurram',
            detail: 'Has created Payment request anyday hor',
            date: '2020-10-22'
          },
          {
            id: 6,
            name: 'khurram',
            detail: 'Has created Payment request anyday hor',
            date: '2020-10-22'
          },
          {
            id: 7,
            name: 'khurram',
            detail: 'Has created Payment request anyday hor',
            date: '2020-10-22'
          },
          {
            id: 8,
            name: 'khurram',
            detail: 'Has created Payment request anyday hor',
            date: '2020-10-22'
          },
        ],
        sattusArray: ['Paid', 'Attempted', 'Canceled'],
        amount1: 0,
        amount2: 30,
        amount3: 60,
        multiline: 8
      }
      
    },
    computed: {
      enableRTL() {
        return this.$route.query.enableRTL;
      },
      isRTL() {
        return this.$rtl.isRTL;
      }
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [{
            fill: true, 
            borderColor: config.colors.orange,
            borderWidth: 5,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.orange,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: config.colors.orange,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.bigLineChart.allData[0]
          }],
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
        this.$refs.bigChart.updateGradients(chartData);
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      },
      initMultiChart() {
        let chartData = {
          datasets: [
            {
              fill: false, 
              borderColor: config.colors.multi[0],
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.multi[0],
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.multi[0],
              pointBorderWidth: 8,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 10,
              pointRadius: 3,
              data: this.multipleLineChart.allData[0]
            },
            {
              fill: false, 
              borderColor: config.colors.multi[1],
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.multi[1],
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.multi[1],
              pointBorderWidth: 8,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 10,
              pointRadius: 3,
              data: this.multipleLineChart.allData[1]
            },
            {
              fill: false, 
              borderColor: config.colors.multi[2],
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.multi[2],
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.multi[2],
              pointBorderWidth: 8,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 10,
              pointRadius: 3,
              data: this.multipleLineChart.allData[2]
            },
            {
              fill: false, 
              borderColor: config.colors.multi[3],
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.multi[3],
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.multi[3],
              pointBorderWidth: 8,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 10,
              pointRadius: 3,
              data: this.multipleLineChart.allData[3]
            },
            {
              fill: false, 
              borderColor: config.colors.multi[4],
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.multi[4],
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.multi[4],
              pointBorderWidth: 8,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 10,
              pointRadius: 3,
              data: this.multipleLineChart.allData[4]
            },
            {
              fill: false, 
              borderColor: config.colors.multi[5],
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.multi[5],
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.multi[5],
              pointBorderWidth: 8,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 10,
              pointRadius: 3,
              data: this.multipleLineChart.allData[5]
            },
            {
              fill: false, 
              borderColor: config.colors.multi[6],
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.multi[6],
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.multi[6],
              pointBorderWidth: 8,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 10,
              pointRadius: 3,
              data: this.multipleLineChart.allData[6]
            },
            {
              fill: false, 
              borderColor: config.colors.multi[7],
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.multi[7],
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: config.colors.multi[7],
              pointBorderWidth: 8,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 10,
              pointRadius: 3,
              data: this.multipleLineChart.allData[7]
            },
          ],
          labels: ['', '', '', '', '', '', '', '', '', '', '',],
        }
        // this.$refs.multiChart.updateGradients(chartData);
        this.multipleLineChart.chartData = chartData;
      },
      onClick() {
        alert('clicked')
      }

    },
    mounted() {
      this.i18n = this.$i18n;
      if (this.enableRTL) {
        this.i18n.locale = 'ar';
        this.$rtl.enableRTL();
      }
      this.initBigChart(0);
      // this.initMultiChart();
      
    },
    beforeDestroy() {
      // if (this.$rtl.isRTL) {
      //   this.i18n.locale = 'en';
      //   this.$rtl.disableRTL();
      // }
    }
  }
</script>