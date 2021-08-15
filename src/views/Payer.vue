<template>
  <div class="invoice">
    <div class="container md-layout md-gutter custom-set">
      <div class="md-layout-item md-size-100">
        <md-field>
          <div class="custom-suffix"><md-icon>search</md-icon></div>
          <md-input class="md-custom-input" placeholder="Search by  lease name, payper email & mobile..."></md-input>
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
                  <md-checkbox v-model="pending" class="md-primary">Pending Payment</md-checkbox>
                  <md-checkbox v-model="paid" class="md-primary">Paid Payment</md-checkbox>
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
                    <md-table-cell md-label="Payer Name" md-sort-by="name">{{ item.name }}</md-table-cell>
                    <md-table-cell md-label="Mobile Number" md-sort-by="num">{{ item.num }}</md-table-cell>
                    <md-table-cell md-label="Toatal Active Leases" md-sort-by="active">{{ item.active }}</md-table-cell>
                    <md-table-cell md-label="Total Pending Invoices" md-sort-by="pending">{{ item.pending }}</md-table-cell>
                    <md-table-cell md-label="Total Pending" md-sort-by="total">{{ item.total }}</md-table-cell>
                    <md-table-cell md-label="Payment Status" md-sort-by="status"><span :class="'lease-tag color' + item.status">{{ leaseStatusArray[item.status - 1]}}</span></md-table-cell>
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
export default {

  data() {
    return {
      payers: [
          {
            id: 1,
            name: "Moden Farooq",
            num: '+935295400152',
            active: 3,
            pending: 12,
            total: '1,495.000USD',
            status: 2,
          },
          {
            id: 2,
            name: "Moden Farooq",
            num: '+935295400152',
            active: 3,
            pending: 12,
            total: '1,495.000USD',
            status: 1,
          },
          {
            id: 3,
            name: "Moden Farooq",
            num: '+935295400152',
            active: 3,
            pending: 12,
            total: '1,495.000USD',
            status: 1,
          },
          {
            id: 4,
            name: "Moden Farooq",
            num: '+935295400152',
            active: 3,
            pending: 12,
            total: '1,495.000USD',
            status: 1,
          },
          {
            id: 5,
            name: "Moden Farooq",
            num: '+935295400152',
            active: 3,
            pending: 12,
            total: '1,495.000USD',
            status: 2,
          },
          {
            id: 6,
            name: "Moden Farooq",
            num: '+935295400152',
            active: 3,
            pending: 12,
            total: '1,495.000USD',
            status: 2,
          },
          {
            id: 7,
            name: "Moden Farooq",
            num: '+935295400152',
            active: 3,
            pending: 12,
            total: '1,495.000USD',
            status: 1 ,
          },
         
       
        ],
        leaseStatusArray: ['PENDING','PAID'],
        pending: '',
        paid: '',
        pageCount: '5'

    }
  }
  
}
</script>