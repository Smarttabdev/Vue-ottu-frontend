<template>
  <div class="invoice">
    <div class="text-right">
      <md-button class="btn-orange text-transform-none pr4" @click="isVisible = true"><md-icon class="white fs16">add_circle_outline</md-icon> New Invoice </md-button>
    </div>
    <div class="container md-layout mt-20">
      <div class="md-layout-item md-xlarge-size-25 md-large-size-25 md-medium-size-25 md-small-size-50 md-xsmall-size-100" v-for="item in invoiceInfo" :key="item.title">
        <status-card
          :title="item.title" 
          :status="item.status"
          :category="item.category"
          :statusColor="item.statusColor">
        >
        </status-card>
      </div>
    </div>
    <div class="container md-layout md-gutter custom-set">
      <div class="md-layout-item md-size-100">
        <md-field>
          <div class="custom-suffix"><md-icon>search</md-icon></div>
          <md-input class="md-custom-input" placeholder="Search by  lease name, payper email & mobile..."></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-xlarge-size-20 md-large-size-20 md-medium-size-20 md-small-size-100 md-xsmall-size-100">
        <md-field class="select date-select">
           <md-datepicker v-model="month" />
        </md-field>
      </div>
      <div class="md-layout-item md-xlarge-size-20 md-large-size-20 md-medium-size-20 md-small-size-100 md-xsmall-size-100">
        <md-field class="select">
          <md-select v-model="property"  name="property" placeholder="Properties" id="property" multiple class="md-custom-input">
            <md-option value="house">Utto House</md-option>
            <md-option value="tower">Utto Tower</md-option>
            <md-option value="hawail">Hawail</md-option>
            <md-option value="upcoming">Upcoming</md-option>
            <md-option value="paid">Paid</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-xlarge-size-20 md-large-size-20 md-medium-size-20 md-small-size-100 md-xsmall-size-100">
        <md-field class="select">
          <md-select v-model="item"  name="item" placeholder="Item" id="item" class="md-custom-input">
            <md-option value="fight-club">Ajar House</md-option>
            <md-option value="godfather">Ajar Tower</md-option>
            <md-option value="godfather-ii">Farwanlya House</md-option>
            <md-option value="godfather-iii">Farwanlya Complex</md-option>
            <md-option value="godfather-iii">Flamingo Complex</md-option>
            <md-option value="godfather-iii">Hawalli</md-option>
            <md-option value="godfather-iii">Khaitan house</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-xlarge-size-20 md-large-size-20 md-medium-size-20 md-small-size-100 md-xsmall-size-100">
        <md-field class="select">
          <md-select v-model="paymentMethod"  name="paymentMethod" placeholder="Payment Method" id="paymentMethod" class="md-custom-input">
            <md-option value="fight-club">Ajar House</md-option>
            <md-option value="godfather">Ajar Tower</md-option>
            <md-option value="godfather-ii">Farwanlya House</md-option>
            <md-option value="godfather-iii">Farwanlya Complex</md-option>
            <md-option value="godfather-iii">Flamingo Complex</md-option>
            <md-option value="godfather-iii">Hawalli</md-option>
            <md-option value="godfather-iii">Khaitan house</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-xlarge-size-20 md-large-size-20 md-medium-size-20 md-small-size-100 md-xsmall-size-100">
        <md-field class="select">
          <md-select v-model="invoiceStatus"  name="invoiceStatus" placeholder="Invoice Status" id="invoiceStatus" multiple class="md-custom-input">
            <md-option value="due">Due</md-option>
            <md-option value="pastDue">Past Due</md-option>
            <md-option value="upcoming">Upcoming</md-option>
            <md-option value="paid">Paid</md-option>
            <md-option value="void">Void</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-xlarge-size-20 md-large-size-20 md-medium-size-20 md-small-size-100 md-xsmall-size-100">
        <span>From </span>
        <md-field class="select date-select">
           <md-datepicker v-model="from" />
        </md-field>
      </div>
      <div class="md-layout-item md-xlarge-size-20 md-large-size-20 md-medium-size-20 md-small-size-100 md-xsmall-size-100">
        <span>To </span>
        <md-field class="select date-select">
           <md-datepicker v-model="to" />
        </md-field>
      </div>
    </div>
    <div class="container md-layout mt20">
      <div class="md-layout-item padding md-size-100">
        <md-tabs>
          <md-tab id="tab-all-leases" md-label="Lease Invoice">
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                <div class="toolbar-check">
                  <md-checkbox v-model="leaseIns" class="md-primary">Lease Invoice</md-checkbox>
                  <md-checkbox v-model="otherIns" class="md-primary">Other Invoices</md-checkbox>
                </div>
                <md-table v-model="invoices" md-card>
                  <md-table-toolbar>
                    <div class="pagination-toolbar">
                      <h5>Showing records: 1-20 of 77</h5>
                      <div class="pager">
                        <div class="page-count custom-set set">
                          <h5 class="mr30">Rows per page</h5>
                          <md-field class="select">
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
                      <div>
                        <md-menu md-size="small" md-align-trigger>
                          <md-button md-menu-trigger class="btn-orange mr30 action-button"> Action <md-icon class="white">keyboard_arrow_down</md-icon></md-button>
                          <md-menu-content>
                            <md-menu-item><md-icon>monetization_on</md-icon>Mark as Paid</md-menu-item>
                            <md-menu-item><md-icon>block</md-icon>Block Lease</md-menu-item>
                            <md-menu-item ><md-icon>block</md-icon>UPblock Lease</md-menu-item>
                            <md-menu-item><md-icon>all_out</md-icon>Allow Flexible Payment</md-menu-item>
                            <md-menu-item ><md-icon>cancel</md-icon>Disallow Flexible Payment</md-menu-item>
                          </md-menu-content>
                        </md-menu>
                        <md-menu md-size="small" md-align-trigger>
                          <md-button md-menu-trigger class="btn-orange-outline"> Export As <md-icon class="orange">keyboard_arrow_down</md-icon></md-button>
                          <md-menu-content>
                            <md-menu-item>My Item 1</md-menu-item>
                            <md-menu-item>My Item 2</md-menu-item>
                            <md-menu-item>My Item 3</md-menu-item>
                          </md-menu-content>
                        </md-menu>
                      </div>
                      <div>
                        <md-button class="btn-orange width100 pr4"><md-icon class="white">add_alert</md-icon> Send Remember</md-button>
                      </div>
                    </div>
                  </md-table-toolbar>

                  <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple">
                    <md-table-cell md-label="Payer Name" md-sort-by="payerName">{{ item.payerName }}</md-table-cell>
                    <md-table-cell md-label="Property Name" md-sort-by="propertyName">{{ item.propertyName }}</md-table-cell>
                    <md-table-cell md-label="Unit #" md-sort-by="unit">{{ item.unit }}</md-table-cell>
                    <md-table-cell md-label="Invoice Type" md-sort-by="invoiceType">{{ item.invoiceType }}</md-table-cell>
                    <md-table-cell md-label="Item" md-sort-by="item">{{ item.item }}</md-table-cell>
                    <md-table-cell md-label="Payment Due Date" md-sort-by="paymentDueDate">{{ item.paymentDueDate }}</md-table-cell>
                    <md-table-cell md-label="Total Amount" md-sort-by="amount">{{ item.amount }}</md-table-cell>
                    <md-table-cell md-label="Invoice Status" md-sort-by="invoiceStatus"><div v-if="item.invoiceStatus"><span :class="'invoiceStatus-tag color' + item.invoiceStatus">&#9679;</span><span :class="'invoiceStatus-tag color' + item.invoiceStatus">{{ invoiceStatusArray[item.invoiceStatus-1] }}</span></div><div v-if="item.leaseStatus"><span :class="'lease-tag color' + item.leaseStatus">{{ leaseStatusArray[item.leaseStatus - 1]}}</span></div></md-table-cell>
                  </md-table-row>
                </md-table>
              </div>
            </div>
          </md-tab>
        </md-tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import StatusCard from '@/components/statusCard';
  export default {

    components: {
      StatusCard
    },

    data() {
      return {
        isVisible: false,
        invoiceInfo: [
          {
            title: 'Total Pending Invoices',
            status: '494',
            category: 'Last Upate: 11:59 AM',
            statusColor: 'orange'
          },
          {
            title: 'Total Lease Invoices',
            status: '466',
            category: 'Last Upate: 11:59 AM',
            statusColor: 'orange'
          },
          {
            title: 'Total Other Invoices',
            status: '28',
            category: 'Last Upate: 11:59 AM',
            statusColor: 'orange'
          },
          {
            title: 'Total Pending Payments',
            status: '229,313.000USD',
            category: 'Last Upate: 11:59 AM',
            statusColor: 'orange'
          },
        ],
        invoices: [
          {
            id: 1,
            payerName: "harmard",
            propertyName: 'Mubarak Al Abdullah',
            unit: '4',
            invoiceType: 'Lease',
            item: 'RENT',
            paymentDueDate: '2020-10-14',
            amount: '100.000KWD', 
            invoiceStatus: 1,
          },
          {
            id: 2,
            payerName: "harmard",
            propertyName: 'Mubarak Al Abdullah',
            unit: '4',
            invoiceType: 'Lease',
            item: 'RENT',
            paymentDueDate: '2020-10-14',
            amount: '100.000KWD', 
            leaseStatus: 3
          },
          {
            id: 3,
            payerName: "harmard",
            propertyName: 'Mubarak Al Abdullah',
            unit: '4',
            invoiceType: 'Lease',
            item: 'RENT',
            paymentDueDate: '2020-10-14',
            amount: '100.000KWD', 
            invoiceStatus: 3,
          },
          {
            id: 4,
            payerName: "harmard",
            propertyName: 'Mubarak Al Abdullah',
            unit: '4',
            invoiceType: 'Lease',
            item: 'RENT',
            paymentDueDate: '2020-10-14',
            amount: '100.000KWD', 
            leaseStatus: 1
          },
          {
            id: 5,
            payerName: "harmard",
            propertyName: 'Mubarak Al Abdullah',
            unit: '4',
            invoiceType: 'Lease',
            item: 'RENT',
            paymentDueDate: '2020-10-14',
            amount: '100.000KWD', 
            invoiceStatus: 4,
          },
          {
            id: 6,
            payerName: "harmard",
            propertyName: 'Mubarak Al Abdullah',
            unit: '4',
            invoiceType: 'Lease',
            item: 'RENT',
            paymentDueDate: '2020-10-14',
            amount: '100.000KWD', 
            leaseStatus: 1
          },
          {
            id: 7,
            payerName: "harmard",
            propertyName: 'Mubarak Al Abdullah',
            unit: '4',
            invoiceType: 'Lease',
            item: 'RENT',
            paymentDueDate: '2020-10-14',
            amount: '100.000KWD', 
            leaseStatus: 2
          },
       
        ],
        month: '2020-10-20',
        property: '',
        item: '',
        paymentMethod: '',
        invoiceStatus: '',
        from: '2020-10-20',
        to: '2020-12-11',
        leaseIns: '',
        otherIns: '',
        pageCount: '5',
        invoiceStatusArray: ['Due', 'No Invoices', 'Past Due', 'Upcoming', 'Paid'],
        leaseStatusArray: ['ACTIVE','BLOCKED', 'FUTURE',  'EXPIRED', 'FLEXIBLE']
      }
    }
    
  }
</script>