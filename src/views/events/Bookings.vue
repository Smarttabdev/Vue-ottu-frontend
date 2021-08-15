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
        <div class="filter-close mb30" >
          <div @click="filterModal">
            <md-icon class="red" >close</md-icon>
          </div>
        </div>
        <span>Event</span>
        <md-field class="mb10">
          <md-select v-model="event" name="event" placeholder="Event" md-dense class="md-custom-input">
            <md-option value="jabriya">Jabriya Gym</md-option>
            <md-option value="sabah">Sabah Salen</md-option>
            <md-option value="nondar">Nondar Hopan</md-option>
            <md-option value="ottu">Ottu Restrant</md-option>
            <md-option value="spart">Spart Athletic</md-option>
          </md-select>
        </md-field >
        <span>Ticket</span>
        <md-field class="mb10">
          <md-select v-model="ticket" name="ticket"  md-dense class="md-custom-input">
            <md-option value="causual">Causual</md-option>
            <md-option value="noon">Noon</md-option>
            <md-option value="afternoon">AfterNoon</md-option>
            <md-option value="1-2">1-2</md-option>
            <md-option value="2-3">2-3</md-option>
          </md-select>
        </md-field >
        <span>Email</span>
        <md-field class="mb10">
         <md-input class="md-custom-input" v-model="email" name="email"></md-input>
        </md-field >
        <span>Customer Phone</span>
        <md-field class="mb10">
         <md-input class="md-custom-input" v-model="customerPhone" name="customerPhone"></md-input>
        </md-field >
        <span>Full Name</span>
        <md-field class="mb10">
         <md-input class="md-custom-input" v-model="fullname" name="fullname"></md-input>
        </md-field >
        <span>Event Date</span>
        <md-field class="mb10">
          <md-datepicker v-model="eventDate" class="mb10"></md-datepicker>
        </md-field >
        <h4 class="text-center">Created</h4>
        <span>From</span>
        <md-datepicker v-model="createFrom" class="mb10"></md-datepicker>
        <span>To</span>
        <md-datepicker v-model="createTo" class="mb10"></md-datepicker>
      </div>
      <div class="export-cotent" v-if="exportVisible" @close="exportVisible = false">
       <div class="filter-close" >
          <div @click="exportVisible = false">
            <md-icon class="red" >close</md-icon>
          </div>
        </div>
        <div>
       
        <div class="export-section">
          <h4 class="text-center">Select file type</h4>
          <md-radio v-model="fileType" value="csv">CSV</md-radio>
          <md-radio v-model="fileType" value="xls">XLS</md-radio>

        </div>
        <div class="text-center">
          <md-button class="property-button" @click="exportVisible = false">Export Bookings</md-button>
        </div>
        </div>
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
            <md-table-cell md-label="Event" md-sort-by="event"><router-link :to="'/events/bookings/'+item.id" class="bulk-link">{{ item.event }}</router-link></md-table-cell>
            <md-table-cell md-label="Quantity" md-sort-by="quantity">{{ item.quantity }}</md-table-cell>
            <md-table-cell md-label="Full Name" md-sort-by="fullname">{{ item.fullname }}</md-table-cell>
            <md-table-cell md-label="Purchase Type" md-sort-by="purchaseType">{{ item.purchaseType }}</md-table-cell>
            <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
            <md-table-cell md-label="Event Date" md-sort-by="eventDate">{{ item.eventDate }}</md-table-cell>
            <md-table-cell md-label="Created" md-sort-by="created">{{ item.created }}</md-table-cell>
            <md-table-cell md-label="Customer Phone" md-sort-by="customerPhone">{{ item.customerPhone }}</md-table-cell>
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
        statusInfo: {
          propertise: {
            status: '50',
            statusColor: 'orange',
            category: 'Last Upate: 11:59 AM',
            title: 'Active Leases'
          },
          unit: {
            status: '6',
            statusColor: 'orange',
            category: 'Last Upate: 11:59 AM',
            title: 'Future Leases'
          },
          ocuppied: {
            status: '58',
            statusColor: 'orange',
            category: 'Last Upate: 11:59 AM',
            title: 'Blocked Leases'
          },
          vacant: {
            status: '31',
            statusColor: 'orange',
            category: 'Last Upate: 11:59 AM',
            title: 'Expired Leases'
          }
        },
         tableData: [
          {
            id: 1,
            event: "Jabriya Gym",
            quantity: '1',
            fullname: '',
            purchaseType: 'Free',
            email: 'zaidmukri@gmail.com	',
            eventDate: '2020-06-24',
            created: '2020-06-24',
            customerPhone: '7795215451515', 
          },
          {
            id: 2,
            event: "Jabriya Gym",
            quantity: '2',
            fullname: '',
            purchaseType: 'Benefits',
            email: 'dteidmukri@gmail.com	',
            eventDate: '2020-05-06',
            created: '2020-05-06',
            customerPhone: '', 
          },
        ],
        pageCount: 5,
        fileType: 'csv',
        createFrom: '2020-10-10',
        createTo: '2020-10-22',
        event: '',
        ticket: '',
        filterVisible: false,
        exportVisible: false,
        search: '',
        email: '',
        customerPhone: '',
        fullname: '',
        eventDate: '2020-10-30'
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
    
  }
</script>