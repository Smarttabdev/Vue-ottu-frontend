<template>
  <div class="transaction">
    <div class="container md-layout mt20">
      <div class="md-layout-item md-xlarge-size-25 md-large-size-25 md-medium-size-50 md-small-size-100 md-xsmall-size-100 status-card" v-for="item in statusInfo" :key="item.title">
       <status-card 
        :title="item.title" 
        :status="item.status"
        :category="item.category"
        :statusColor="item.statusColor">
        </status-card>
      </div>
    </div>
      <div v-if="filterVisible" class="filter-content">
        <div class="filter-close" >
          <div @click="filterModal">
            <md-icon class="red" >close</md-icon>
          </div>
        </div>
        <h4 class="text-center">Created</h4>
        <span>From</span>
        <md-datepicker v-model="createFrom" class="mb10"></md-datepicker>
        <span>To</span>
        <md-datepicker v-model="createTo" class="mb10"></md-datepicker>
        <h4 class="text-center">Modified</h4>
        <span>From</span>
        <md-datepicker v-model="modifyFrom" class="mb10"></md-datepicker>
        <span>To</span>
        <md-datepicker v-model="modifyTo" class="mb10"></md-datepicker>
        <div v-for="item in filter" :key="item.model">
          <span>{{item.placeholder}}</span>
          <md-field class="mb10">
            <md-select v-model="item.model" :name="item.name" :placeholder="item.placeholder"  md-dense class="md-custom-input">
              <md-option :value="sub.label" v-for="sub in item.values" :key="sub.value">{{sub.value}}</md-option>
            </md-select>
          </md-field >
        </div>
      </div>
      <div class="export-cotent" v-if="exportVisible" @close="exportVisible = false">
       <div class="filter-close" >
          <div @click="exportVisible = false">
            <md-icon class="red" >close</md-icon>
          </div>
        </div>
        <div>
        <div class="export-section">
          <h4 class="text-center">Select from fields</h4>
          <div class="container md-layout">
            <div class="md-layout-item md-size-50" v-for="item in exports.selField" :key="item.model">
              <md-checkbox v-model="item.model" class="md-primary">{{item.label}}</md-checkbox>
              <!-- <input type="checkbox" v-model="phone"> -->  
            </div>
          </div>
        </div>
        <div class="export-section">
          <h4 class="text-center">Select fields</h4>
            <div class="md-layout-item md-size-50" v-for="item in exports.select" :key="item.model">
              <md-checkbox v-model="item.model" class="md-primary">{{item.label}}</md-checkbox>
              <!-- <input type="checkbox" v-model="phone"> -->  
            </div>
        </div>
        <div class="export-section">
          <h4 class="text-center">Select file type</h4>
          <md-radio v-model="fileType" value="fixed">Fixed</md-radio>
          <md-radio v-model="fileType" value="percentage">Percentage</md-radio>

        </div>
        <div class="text-center">
          <md-button class="btn-outline-orange" @click="exportVisible = false">Export Default</md-button>
          <md-button class="property-button" @click="exportVisible = false">Export Selected</md-button>
        </div></div>
      </div>
     <div class="container md-layout table-section">
      <div class="md-layout-item md-size-100">
        <md-table v-model="tableData" md-card>
          <md-table-toolbar  class="mb10">
            <div class="pagination-toolbar">
              <h5>Showing records: 1-20 of 77</h5>
             
              <div class="pager">
                <div class="page-count custom-set set">
                  <h5>Rows per page</h5>
                  <md-field class="select" style="width: 80px">
                    <md-select name="pageCount" v-model="pageCount" id="pageCount" class="md-custom-input-2">
                      <md-option :value="5">5</md-option>
                      <md-option :value="10">10</md-option>
                      <md-option :value="20">20</md-option>
                      <md-option :value="25">25</md-option>
                    </md-select>
                  </md-field>
                </div>
                <div class="pagination">
                  <md-icon>skip_previous</md-icon>
                  <md-icon>keyboard_arrow_left</md-icon>
                  <md-icon>keyboard_arrow_right</md-icon>
                  <md-icon>skip_next</md-icon>
                </div>
              </div>
            </div>
            <div class="action-toolbar">
              <div class="flex">
                <md-menu md-size="small" md-align-trigger>
                  <md-button md-menu-trigger class="btn-orange mr-10 action-button"> Action <md-icon class="white">keyboard_arrow_down</md-icon></md-button>
                  <md-menu-content>
                    <md-menu-item v-for="item in action" :key="item.label" @click="onClick"><md-icon>{{item.icon}}</md-icon>{{item.label}}</md-menu-item>
                  </md-menu-content>
                </md-menu>
                <md-button  class="btn-orange-outline" @click="exportVisible = true"> Export As <md-icon class="orange fs16">keyboard_arrow_down</md-icon></md-button>
                  
              </div>
              <div class="flex">
                <md-field class="ml20">
                  <md-icon>search</md-icon>
                  <md-input v-model="search" placeholder="Search"></md-input>
                </md-field>
                <md-button class="btn-orange width100 pr4" @click="filterVisible = true"><md-icon class="white">filter_list</md-icon> Filter</md-button>
              </div>
            </div>
                     
          </md-table-toolbar>

          <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple">
            <md-table-cell md-label="ID" md-sort-by="id">{{ item.id }}</md-table-cell>
            <md-table-cell v-if="item.initiator" md-label="Initiator" md-sort-by="initiator">{{ item.initiator }}</md-table-cell>
            <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
            <md-table-cell md-label="State" md-sort-by="state"><span :class="'invoiceStatus-tag color' + item.state">&#9679;</span> <span :class="'invoiceStatus-tag color' + item.state">{{ stateArray[item.state-1] }}</span></md-table-cell>
            <md-table-cell md-label="Gateway" md-sort-by="gateway">{{ item.gateway }}</md-table-cell>
            <md-table-cell md-label="Amount" md-sort-by="amount">{{ item.amount }}</md-table-cell>
            <md-table-cell md-label="Fee" md-sort-by="fee">{{ item.fee }}</md-table-cell>
            <md-table-cell md-label="Currency" md-sort-by="currency">{{ item.currency }}</md-table-cell>
            <md-table-cell md-label="Creation Date" md-sort-by="createDate">{{ item.createDate }}</md-table-cell>
            <md-table-cell md-label="Payment Date" md-sort-by="paymentDate">{{ item.paymentDate }}</md-table-cell>
            <md-table-cell v-if="item.unit" md-label="Unit" md-sort-by="unit">{{ item.unit }}</md-table-cell>
            <md-table-cell v-if="item.appartmentNum" md-label="Apartment Number" md-sort-by="appartmentNum">{{ item.appartmentNum }}</md-table-cell>
            <md-table-cell v-if="item.rent" md-label="Rent For Month" md-sort-by="rent">{{ item.rent }}</md-table-cell>
            <md-table-cell v-if="item.orderId" md-label="Order ID | Invoice No | Booking" md-sort-by="orderId">{{ item.orderId }}</md-table-cell>
            <md-table-cell v-if="item.invoice" md-label="Invoice No" md-sort-by="invoice">{{ item.invoice }}</md-table-cell>
            <md-table-cell v-if="item.firstName" md-label="First Name" md-sort-by="firstName">{{ item.firstName }}</md-table-cell>
            <md-table-cell v-if="item.fullName" md-label="Full Name" md-sort-by="fullName">{{ item.fullName }}</md-table-cell>
            <md-table-cell v-if="item.phone" md-label="Phone" md-sort-by="phone">{{ item.phone }}</md-table-cell>
            <md-table-cell md-label="Action" md-sort-by="unit">
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
      </div>
    </div>
  </div>
</template>

<script>
  import StatusCard from '@/components/statusCard';
  export default {

    components: {
      StatusCard,
    },

    // mounted: {
    //   //geting data follow urls
    // },

    data() {
      return {
         pageCount: 5,
        stateArray: ['Paid', 'Attempted', 'Canceled'],

        fileType: 'fixed',
        createFrom: '2020-10-10',
        createTo: '2020-10-22',
        modifyFrom: '2020-11-01',
        modifyTo: '2020-12-01',
        filterVisible: false,
        exportVisible: false,
        search: ''
      }
    },
    methods: {
      filterModal() {
        console.log('object')
       return this.filterVisible = false;
      },
      onClick() {
        alert('clicked');
      }
    },
    computed: {
      
    },
    props: {
      statusInfo: Object,
      action: Array,
      exports: Object,
      filter: Array,
      tableData: Array
    }
    
  }
</script>