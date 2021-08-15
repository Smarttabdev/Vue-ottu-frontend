<template>
  <div class="rent">
    <div class="add-new-property">
      <h4>Add a new property to Dashboard?</h4>
      <md-button class="btn-orange" @click="isVisible = true"><md-icon class="white fs16">add_circle_outline</md-icon> Add Property</md-button>
    </div>
    <div class="container md-layout mt20">
      <div class="md-layout-item md-xlarge-size-25 md-large-size-25 md-medium-size-50 md-small-size-100 md-xsmall-size-100 status-card" v-for="item in statusInfo" :key="item.title">
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
    <div class="container md-layout padding md-gutter">
      <div class="md-layout-item md-xlarge-size-50 md-large-size-60 md-medium-size-60 md-small-size-100 md-xsmall-size-100">
        <md-field>
          <div class="custom-suffix"><md-icon>search</md-icon></div>
          <md-input class="md-custom-input" placeholder="Search by Property, Area or Name"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-xlarge-size-25 md-large-size-20 md-medium-size-20 md-small-size-100 md-xsmall-size-100">
        <md-field class="select">
          <md-select placeholder="Select your Area" name="country" id="country" md-dense class="md-custom-input">
            <md-option value="australia">Australia</md-option>
            <md-option value="brazil">Brazil</md-option>
            <md-option value="japan">Japan</md-option>
            <md-option value="united-states">United States</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-xlarge-size-25 md-large-size-20 md-medium-size-20 md-small-size-100 md-xsmall-size-100">
        <md-field class="select">
          <md-select placeholder="Select your Area" name="country" id="country" md-dense class="md-custom-input">
            <md-option value="australia">Australia</md-option>
            <md-option value="brazil">Brazil</md-option>
            <md-option value="japan">Japan</md-option>
            <md-option value="united-states">United States</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <div class="container md-layout padding md-gutter d-flex" style="justify-content: space-between">
      <div class="md-layout-item md-xlarge-size-60 md-large-size-60 md-medium-size-60 md-small-size-100 md-xsmall-size-100">
        <md-button class="btn-orange">Active Properties</md-button>
        <md-button class="btn-orange-outline">Add Property</md-button>
      </div>
      <div class="md-layout-item md-xlarge-size-40 md-large-size-20 md-medium-size-20 md-small-size-100 md-xsmall-size-100 d-flex" style="height: 40px; justify-content: flex-end;">
        <span style="width: 55px">sort by:</span>
        <md-field class="select" value="australia" style="width: 90px">
          <md-select name="country" id="country" md-dense class="md-custom-input-2">
            <md-option value="australia">Date</md-option>
            <md-option value="brazil">Brazil</md-option>
            <md-option value="japan">Japan</md-option>
            <md-option value="united-states">United States</md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <div class="container md-layout mt20">
      <div class="md-layout-item md-size-100">
        <md-table v-model="propertise" md-sort="name" md-sort-order="asc" md-card>
          <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="Property Name">{{ item.name }}</md-table-cell>
            <md-table-cell md-label="Area" md-sort-by="area">{{ item.area }}</md-table-cell>
            <md-table-cell md-label="Total Units" md-sort-by="total">{{ item.total }}</md-table-cell>
            <md-table-cell md-label="Vacant Units" md-sort-by="vacant">{{ item.vacant }}</md-table-cell>
            <md-table-cell md-label="Monthly Online Collected" md-sort-by="online">{{ item.online }}</md-table-cell>
            <md-table-cell md-label="Monthly Offline Collected" md-sort-by="offline">{{ item.offline }}</md-table-cell>
            <md-table-cell md-label="Total Peding" md-sort-by="pending">{{ item.pending }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
    </div>
  <add-dialog v-model="isVisible"></add-dialog>
  </div>
</template>

<script>
  import StatusCard from '../components/statusCard';
  import AddDialog from '../components/AddDialog';

  export default {
    components: {
      StatusCard,
      AddDialog
    },
    data() {
      return {
        statusInfo: {
          propertise: {
            title: 'Total Active Properties',
            category: 'Last Upate: 11:59 AM',
            status: '55',
            statusColor: 'orange',
            statusIcon: '',
            iconColor: ''
          },
          unit: {
            title: 'Active Units',
            category: 'Last Upate: 11:59 AM',
            status: '140', 
            statusColor: 'orange',
            statusIcon: '',
            iconColor: ''
          },
          ocuppied: {
            title: 'Total Occupied Units',
            category: 'Last Upate: 11:59 AM',
            status: '101',
            statusColor: 'orange',
            statusIcon: '',
            iconColor: ''
          },
          vacant: {
            title: 'Total Vacant Units',
            category: 'Last Upate: 11:59 AM',
            status: '48',
            statusColor: 'orange',
            statusIcon: '',
            iconColor: ''
          }
        },
        propertise: [
          {
            name: 'Property Name',
            area: 'Area',
            total: 'Total Units',
            vacant: 'Vacant Units',
            online: 'Monthly Online Collected',
            offline: 'Monthly Offline Collected',
            pending: 'Total Pending'
          },
          {
            name: 'Property Name',
            area: 'Area',
            total: 'Total Units',
            vacant: 'Vacant Units',
            online: 'Monthly Online Collected',
            offline: 'Monthly Offline Collected',
            pending: 'Total Pending'
          },
          {
            name: 'Property Name',
            area: 'Area',
            total: 'Total Units',
            vacant: 'Vacant Units',
            online: 'Monthly Online Collected',
            offline: 'Monthly Offline Collected',
            pending: 'Total Pending'
          },
          {
            name: 'Property Name',
            area: 'Area',
            total: 'Total Units',
            vacant: 'Vacant Units',
            online: 'Monthly Online Collected',
            offline: 'Monthly Offline Collected',
            pending: 'Total Pending'
          },
          {
            name: 'Property Name',
            area: 'Area',
            total: 'Total Units',
            vacant: 'Vacant Units',
            online: 'Monthly Online Collected',
            offline: 'Monthly Offline Collected',
            pending: 'Total Pending'
          },
          {
            name: 'Property Name',
            area: 'Area',
            total: 'Total Units',
            vacant: 'Vacant Units',
            online: 'Monthly Online Collected',
            offline: 'Monthly Offline Collected',
            pending: 'Total Pending'
          },
          {
            name: 'Property Name',
            area: 'Area',
            total: 'Total Units',
            vacant: 'Vacant Units',
            online: 'Monthly Online Collected',
            offline: 'Monthly Offline Collected',
            pending: 'Total Pending'
          },
          {
            name: 'Property Name',
            area: 'Area',
            total: 'Total Units',
            vacant: 'Vacant Units',
            online: 'Monthly Online Collected',
            offline: 'Monthly Offline Collected',
            pending: 'Total Pending'
          },
          {
            name: 'Property Name',
            area: 'Area',
            total: 'Total Units',
            vacant: 'Vacant Units',
            online: 'Monthly Online Collected',
            offline: 'Monthly Offline Collected',
            pending: 'Total Pending'
          }
        ],
        isVisible: false
      }
    },
    computed: {

    },
    methods: {

    },
    
    mounted() {
      
    },
    beforeDestroy() {
      
    }
  }
</script>