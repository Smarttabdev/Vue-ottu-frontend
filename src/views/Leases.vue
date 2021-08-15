<template>
  <div class="leases">
    <div class="text-right">
      <md-button class="btn-orange" @click="isVisible = true"><md-icon>add_circle_outline</md-icon> Add Lease</md-button>
    </div>
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
    <div class="container md-layout md-gutter custom-set">
      <div class="md-layout-item md-size-100">
        <md-field>
          <div class="custom-suffix"><md-icon>search</md-icon></div>
          <md-input class="md-custom-input" placeholder="Search by  lease name, payper email & mobile..."></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-large-size-20 md-medium-size-20 md-small-size-100 md-xsmall-size-100">
        <md-field class="select">
          <md-select v-model="leaseType" name="leaseType" placeholder="Lease Type" id="leaseType" multiple class="md-custom-input">
            <md-option value="fight-club">Instalment</md-option>
            <md-option value="godfather">Rent</md-option>
            <md-option value="godfather-ii">Service Charge</md-option>
            <md-option value="godfather-iii">Investment</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-large-size-20 md-medium-size-20 md-small-size-100 md-xsmall-size-100">
        <md-field class="select">
          <md-select v-model="invoiceStatus"  name="invoiceStatus" placeholder="Invoice Status" id="invoiceStatus" multiple class="md-custom-input">
            <md-option value="fight-club">Due</md-option>
            <md-option value="godfather">No Invoices</md-option>
            <md-option value="godfather-ii">Past Due</md-option>
            <md-option value="godfather-iii">Upcoming</md-option>
            <md-option value="godfather-iii">Paid</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-large-size-20 md-medium-size-20 md-small-size-100 md-xsmall-size-100">
        <md-field class="select">
          <md-select v-model="property"  name="property" placeholder="Propertise" id="property" class="md-custom-input">
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
    </div>
    <div class="container md-layout mt20">
      <div class="md-layout-item padding md-size-100">
        <md-tabs>
          <md-tab id="tab-all-leases" md-label="ALL LEASES">
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                <div class="toolbar-check">
                  <md-checkbox v-model="bActive" class="md-primary">Active Leases</md-checkbox>
                  <md-checkbox v-model="bFuture" class="md-primary">Future Leases</md-checkbox>
                  <md-checkbox v-model="bBlocked" class="md-primary">Blocked Leases</md-checkbox>
                  <md-checkbox v-model="bExpired" class="md-primary">Expired Leases</md-checkbox>
                  <md-checkbox v-model="bFlexible" class="md-primary">Flexible Payment</md-checkbox>
                </div>
                <md-table v-model="leases" md-card @md-selected="onSelect">
                  <md-table-toolbar>
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
                      <div>
                        <md-menu md-size="small" md-align-trigger>
                          <md-button md-menu-trigger class="btn-orange mr-10 action-button"> Action <md-icon class="white">keyboard_arrow_down</md-icon></md-button>
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

                  <!-- <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
                    <div class="md-toolbar-section-start">{{ count }}</div>

                    <div class="md-toolbar-section-end">
                      <md-button class="md-icon-button">
                        <md-icon>delete</md-icon>
                      </md-button>
                    </div>
                  </md-table-toolbar> -->

                  <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple" @click="rowClick(item.id)">
                    <md-table-cell md-label="Lease Name" md-sort-by="leaseName">{{ item.leaseName }}</md-table-cell>
                    <md-table-cell md-label="Property Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                    <md-table-cell md-label="Unit #" md-sort-by="unit">{{ item.unit }}</md-table-cell>
                    <md-table-cell md-label="Lease Type" md-sort-by="leaseType">{{ item.leaseType }}</md-table-cell>
                    <md-table-cell md-label="Lease Ends In" md-sort-by="leaseEndIn"><span :class="'tags color' + item.leaseEndIn">{{ item.leaseEndIn }} DAYS</span></md-table-cell>
                    <md-table-cell md-label="20.00 KWD" md-sort-by="totalPending">{{ item.totalPending }} <md-icon style="font-size: 15px !important;">info</md-icon></md-table-cell>
                    <md-table-cell md-label="Invoice Status" md-sort-by="invoiceStatus"><span :class="'invoiceStatus-tag color' + item.invoiceStatus">&#9679;</span> <span :class="'invoiceStatus-tag color' + item.invoiceStatus">{{ invoiceStatusArray[item.invoiceStatus-1] }}</span></md-table-cell>
                    <md-table-cell md-label="Lease Amount" md-sort-by="leaseAmount">{{ item.leaseAmount }}</md-table-cell>
                    <md-table-cell md-label="Lease Status" md-sort-by="leaseStatus"><span :class="'lease-tag color' + item.leaseStatus">{{ leaseStatusArray[item.leaseStatus - 1]}}</span></md-table-cell>
                  </md-table-row>
                </md-table>
              </div>
            </div>
          </md-tab>
          <md-tab id="tab-archived-leases" md-label="ARCHIVED LEASES"></md-tab>
        </md-tabs>
      </div>
    </div>
  <add-dialog v-model="isVisible"></add-dialog>
  </div>
</template>

<script>
  import AddDialog from '../components/LeaseAddDialog';
  import StatusCard from '@/components/statusCard';
  import { mapActions } from 'vuex';

  export default {
    components: {
       StatusCard,
      AddDialog
    },
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
        leases: [
          {
            id: 1,
            leaseName: "harmard",
            name: 'Property Name',
            unit: 'Area',
            leaseType: 'Total Units',
            leaseEndIn: 1,
            totalPending: '20.00 KWD',
            invoiceStatus: 1,
            leaseAmount: '20.00 KWD', 
            leaseStatus: 1
          },
          {
            id: 2,
            leaseName: "harmard",
            name: 'Property Name',
            unit: 'Area',
            leaseType: 'Total Units',
            leaseEndIn: 2,
            totalPending: '20.00 KWD',
            invoiceStatus: 2,
            leaseAmount: '20.00 KWD', 
            leaseStatus: 2
          },
          {
            id: 3,
           leaseName: "test harmard",
            name: 'Property Name',
            unit: 'Area',
            leaseType: 'Total Units',
            leaseEndIn: 3,
            totalPending: '20.00 KWD',
            invoiceStatus: 3,
            leaseAmount: '20.00 KWD', 
            leaseStatus: 3
          },
          {
            id: 4,
            leaseName: "test harmard",
            name: 'Property Name',
            unit: 'Area',
            leaseType: 'Total Units',
            leaseEndIn: 4,
            totalPending: '20.00 KWD',
            invoiceStatus: 4,
            leaseAmount: '20.00 KWD', 
            leaseStatus: 4
          },
          {
            id: 5,
            leaseName: "test harmard",
            name: 'Property Name',
            unit: 'Area',
            leaseType: 'Total Units',
            leaseEndIn: 1,
            totalPending: '20.00 KWD',
            invoiceStatus: 5,
            leaseAmount: '20.00 KWD', 
            leaseStatus: 2
          },
          {
            id: 6,
            leaseName: "test harmard",
            name: 'Property Name',
            unit: 'Area',
            leaseType: 'Total Units',
            leaseEndIn: 2,
            totalPending: '20.00 KWD',
            invoiceStatus: 1,
            leaseAmount: '20.00 KWD', 
            leaseStatus: 2
          },
          {
            id: 7,
            leaseName: "test harmard",
            name: 'Property Name',
            unit: 'Area',
            leaseType: 'Total Units',
            leaseEndIn: 4,
            totalPending: '20.00 KWD',
            invoiceStatus: 1,
            leaseAmount: '20.00 KWD', 
            leaseStatus: 2
          },
          {
            id: 8,
            leaseName: "test harmard",
            name: 'Property Name',
            unit: 'Area',
            leaseType: 'Total Units',
            leaseEndIn: 1,
            totalPending: '20.00 KWD',
            invoiceStatus: 1,
            leaseAmount: '20.00 KWD', 
            leaseStatus: 2
          },
          {
            id: 9,
            leaseName: "test harmard",
            name: 'Property Name',
            unit: 'Area',
            leaseType: 'Total Units',
            leaseEndIn: 1,
            totalPending: '20.00 KWD',
            invoiceStatus: 1,
            leaseAmount: '20.00 KWD', 
            leaseStatus: 2
          }
        ],
        isVisible: false,
        leaseType: "",
        invoiceStatus: "",
        property: "",
        selected: [],
        bActive: false,
        bFuture: false,
        bBlocked: false,
        bExpired: false,
        bFlexible: false,
        pageCount: 5,
        invoiceStatusArray: ['Due', 'No Invoices', 'Past Due', 'Upcoming', 'Paid'],
        leaseStatusArray: ['ACTIVE', 'FUTURE', 'BLOCKED', 'EXPIRED', 'FLEXIBLE']
      }
    },
    computed: {

    },
    methods: {
      ...mapActions(['$setActiveSidebar']),
      onSelect (items) {
        this.selected = items
      },
      rowClick (id) {
        let data = this.leases.filter(lease => lease.id == id)[0];
        this.$setActiveSidebar({
          breadcrumb: `Leases / ${data.leaseName}`,
          selectedSidebar: 'Leases'
        });
        this.$router.push('/leases/'+id);        
      }
    },
    
    mounted() {
      
    },
    beforeDestroy() {
      
    }
  }
</script>