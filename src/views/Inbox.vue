<template>
  <div class="invoice">
    <div class="text-right">
      <md-button class="btn-orange"><md-icon class="white fs16">add_circle_outline</md-icon> new messages</md-button>
    </div>
    <div class="container md-layout mt20">
      <div class="md-layout-item padding md-size-100">
        <md-tabs>
          <md-tab id="open" md-label="OPEN">
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                <div class="toolbar-check">
                  <md-checkbox v-model="suggestion" class="md-primary">Suggestion</md-checkbox>
                  <md-checkbox v-model="complaint" class="md-primary">Complaint</md-checkbox>
                  <md-checkbox v-model="request" class="md-primary">Request</md-checkbox>
                </div>
                <md-table v-model="payers" md-card>
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
                  </md-table-toolbar>

                  <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple"  @click="detailModal(item.id)">
                    <md-table-cell md-label="Ticket #" md-sort-by="ticket">{{ item.ticket }}</md-table-cell>
                    <md-table-cell md-label="Title" md-sort-by="title">{{ item.title }}</md-table-cell>
                    <md-table-cell md-label="Property Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                    <md-table-cell md-label="Unit #" md-sort-by="unit">{{ item.unit }}</md-table-cell>
                    <md-table-cell md-label="Last Activity" md-sort-by="activity">{{ item.activity }}</md-table-cell>
                    <md-table-cell md-label="Type" md-sort-by="type"><span v-if="item.type == 1">Suggestion</span><span v-if="item.type == 2">Complaint</span><span v-if="item.type == 3">Request</span></md-table-cell>
                     <md-table-cell md-label="Days" md-sort-by="days"><span class="days">{{item.day}} days</span></md-table-cell>
                  </md-table-row>
                </md-table>
              </div>
            </div>
          </md-tab>
          <md-tab id="hold" md-label="ON HOLD"></md-tab>
          <md-tab id="progress" md-label="IN PROGRESS"></md-tab>
          <md-tab id="completed" md-label="COMLETED"></md-tab>

        </md-tabs>
      </div>
    </div>
    <inbox-dialog v-model="isVisible" :source="source" ></inbox-dialog>
  </div>
</template>

<script>
  import InboxDialog from '@/components/InboxDialog';
export default {

  components: {
    InboxDialog
  },

  data() {
    return {
      payers: [
          {
            id: 1,
            ticket: "TKT-1105",
            title: 'fix he ac',
            name: 'Flamingo Complex',
            unit: 16,
            activity: '2020-11-20',
            type: 1,
            day: 201
          },
          {
            id: 2,
            ticket: "TKT-1105",
            title: 'fix he ac',
            name: 'Flamingo Complex',
            unit: 16,
            activity: '2020-11-20',
            type: 2,
            day: 201
          },
          {
            id: 3,
            ticket: "TKT-1105",
            title: 'fix he ac',
            name: 'Flamingo Complex',
            unit: 16,
            activity: '2020-11-20',
            type: 1,
            day: 201
          },
          {
            id: 4,
            ticket: "TKT-1105",
            title: 'fix he ac',
            name: 'Flamingo Complex',
            unit: 16,
            activity: '2020-11-20',
            type: 3,
            day: 201
          },
          {
            id: 5,
            ticket: "TKT-1105",
            title: 'fix he ac',
            name: 'Flamingo Complex',
            unit: 16,
            activity: '2020-11-20',
            type: 3,
            day: 201
          },
          {
            id: 6,
            ticket: "TKT-1105",
            title: 'fix he ac',
            name: 'Flamingo Complex',
            unit: 16,
            activity: '2020-11-20',
            type: 2,
            day: 201
          },
          {
            id: 7,
            ticket: "TKT-1105",
            title: 'fix he ac',
            name: 'Flamingo Complex',
            unit: 16,
            activity: '2020-11-20',
            type: 1,
            day: 201
          },
         
       
      ],
      leaseStatusArray: ['PENDING','PAID'],
      pending: '',
      paid: '',
      pageCount: '5',
      isVisible: false,
      suggestion: '',
      complaint: '',
      request: '',
      source: {}
    }
  },

  methods: {
    detailModal(id){
      console.log(id)
      this.source = this.payers[id-1];
      this.isVisible = true;
    }
  }
  
}
</script>