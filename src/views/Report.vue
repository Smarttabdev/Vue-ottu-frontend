<template>
  <div class="reports">
    <div class="container md-layout mt-20">
      <div class="md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100" v-for="item in statusInfo" :key="item.title">
        <status-card
          :title="item.title" 
          :status="item.status"
          :category="item.category"
          :statusColor="item.statusColor">
        >
        </status-card>
      </div>
    </div>
    <div class="container md-layout m16">
      <div class="md-layout-item padding md-size-100">
        <md-tabs>
          <md-tab id="tab-all-leases" md-label="REPORTS">
            <div class="md-layout">
              <div class="md-layout-item md-size-100">  
                <md-table v-model="reports" md-card>
                  <md-table-toolbar>
                    <div class="action-toolbar">
                      <div>
                        <md-menu md-size="small" md-align-trigger>
                          <md-button md-menu-trigger class="btn-orange action-button"> Action <md-icon class="white">keyboard_arrow_down</md-icon></md-button>
                          <md-menu-content class="edit">
                            <md-menu-item @click="editModal()"><md-icon class="ml0">edit</md-icon>Edit</md-menu-item>
                          </md-menu-content>
                        </md-menu>
                      </div>
                    </div>
                  </md-table-toolbar>

                  <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple">
                    <md-table-cell md-label="Report Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                    <md-table-cell md-label="Schedule" md-sort-by="num">{{item.schedule}}</md-table-cell>
                    <md-table-cell md-label="Format" md-sort-by="active">{{ item.format }}</md-table-cell>
                    <md-table-cell md-label="Enabled" md-sort-by="total"><span v-if="item.enabled" class="enable">Enable</span><span v-if="!item.enabled" class="disable">Disable</span></md-table-cell>
                  </md-table-row>
                </md-table>
              </div>
            </div>
          </md-tab>
        </md-tabs>
      </div>
    </div>
    <report-dialog v-model="isVisible"></report-dialog>
  </div>
</template>

<script>
  import StatusCard from '@/components/statusCard';
  import ReportDialog from '@/components/ReportDialog';

export default {

  components: {
    StatusCard,
    ReportDialog
  },

  data() {
    return {
      statusInfo: [
         {
            title: 'Enabled',
            status: '5',
            category: 'Last Upate: 11:59 AM',
            statusColor: 'orange'
          },
          {
            title: 'Disabled',
            status: '2',
            category: 'Last Upate: 11:59 AM',
            statusColor: 'orange'
          },
      ],
      reports: [
        {
          id: 1,
          name: 'Unity Vacancy',
          schedule: 'Monthly',
          format: 'EXCEL',
          enabled: true
        },
        {
          id: 2,
          name: 'Unity Vacancy',
          schedule: 'Monthly',
          format: 'EXCEL',
          enabled: true
        },
        {
          id: 3,
          name: 'Unity Vacancy',
          schedule: 'Monthly',
          format: 'EXCEL',
          enabled: false
        },
        {
          id: 4,
          name: 'Unity Vacancy',
          schedule: 'Monthly',
          format: 'EXCEL',
          enabled: true
        },
        {
          id: 5,
          name: 'Unity Vacancy',
          schedule: 'Monthly',
          format: 'EXCEL',
          enabled: true
        },
        {
          id: 6,
          name: 'Unity Vacancy',
          schedule: 'Monthly',
          format: 'EXCEL',
          enabled: false
        },
        {
          id: 7,
          name: 'Unity Vacancy',
          schedule: 'Monthly',
          format: 'EXCEL',
          enabled: false
        },
      ],
      isVisible: false,
    }
  },

  methods: {
    editModal(){
      this.isVisible = true;
    }
  }
  
}
</script>