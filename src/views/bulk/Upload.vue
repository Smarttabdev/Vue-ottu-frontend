<template>
  <div class="upload">
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
        <span>Active</span>
        <md-field class="mb10">
          <md-select v-model="active" name="active"  md-dense class="md-custom-input">
            <md-option value="yes">Yes</md-option>
            <md-option value="no">No</md-option>
          </md-select>
        </md-field >
        <span>Is recurring</span>
        <md-field class="mb10">
          <md-select v-model="recurring" name="recurring"  md-dense class="md-custom-input">
            <md-option value="yes">Yes</md-option>
            <md-option value="no">No</md-option>
          </md-select>
        </md-field >
      </div>
    <div class="flex ml15 mt30">
        <div class="custom-file mr30">
          <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
          <label class="btn-orange custom-file-label" for="inputGroupFile01">Import</label>
        </div>
        <md-menu>
          <md-button md-menu-trigger class="btn-orange">Example File <md-icon>download</md-icon></md-button>

          <md-menu-content class="example-file">
            <md-menu-item @click="onClick">
              <span>Required fields</span>
            </md-menu-item>
            <md-menu-item @click="onClick">
              <span>All fields</span>
            </md-menu-item>
            <md-menu-item @click="onClick">
              <span>[Recurrence] required fields</span>
            </md-menu-item>
            <md-menu-item @click="onClick">
              <span>[Recurrence] all fields </span>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
    </div>
     <div class="container md-layout table-section">
      <div class="md-layout-item md-size-100">
        <md-table v-model="tableData" md-card>
          <md-table-toolbar  class="mb10">
            <div class=" ">
              <md-button class="btn-orange width100 pr4" @click="filterVisible = true"><md-icon class="white">filter_list</md-icon> Filter</md-button>
            </div>      
          </md-table-toolbar>

          <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple">
            <md-table-cell md-label="File Name" md-sort-by="filename"><router-link :to="'/bulk/upload/'+item.id" class="bulk-link">{{ item.filename }}</router-link></md-table-cell>
            <md-table-cell md-label="Rows/ImportRows" md-sort-by="rows">{{ item.row }} / {{item.importRow}}</md-table-cell>
            <md-table-cell md-label="Uploaded By" md-sort-by="uploadedBy">{{ item.uploadedBy }}</md-table-cell>
            <md-table-cell md-label="Uploaded On" md-sort-by="uploadedOn">{{ item.uploadedOn }}</md-table-cell>
            <md-table-cell md-label="Is Recurring" md-sort-by="recurring"><md-icon>{{ item.recurring === 1 ? 'panorama_fish_eye' : 'close' }}</md-icon></md-table-cell>
            <md-table-cell md-label="Is Scheduled" md-sort-by="scheduled"><md-icon>{{ item.scheduled === 1 ? 'panorama_fish_eye' : 'close' }}</md-icon></md-table-cell>
            <md-table-cell md-label="Is Active" md-sort-by="active"><md-icon>{{ item.active === 1 ? 'panorama_fish_eye' : 'close' }}</md-icon></md-table-cell>
          </md-table-row>
        </md-table>
      </div>
    </div>
  </div>
</template>

<script>

  export default {

    components: {
    },

    data() {
      return {
         tableData: [
          {
            id: 1,
            filename: "required_field(1)",
            row: 3,
            importRow: 3,
            uploadedBy: 'khurram',
            uploadedOn: '2020-10-22',
            recurring: 0,
            scheduled: 1,
            active: 0, 
          },
          {
            id: 2,
            filename: "required_field(1)",
            row: 3,
            importRow: 3,
            uploadedBy: 'khurram',
            uploadedOn: '2020-10-22',
            recurring: 0,
            scheduled: 1,
            active: 0, 
          },
          {
            id: 3,
            filename: "required_field(1)",
            row: 3,
            importRow: 3,
            uploadedBy: 'khurram',
            uploadedOn: '2020-10-22',
            recurring: 0,
            scheduled: 1,
            active: 0, 
          },
        ],
        pageCount: 5,
        stateArray: ['Due', 'No Invoices', 'Past Due', 'Upcoming', 'Paid'],
        leaseStatusArray: ['ACTIVE', 'FUTURE', 'BLOCKED', 'EXPIRED', 'FLEXIBLE'],
        fileType: 'fixed',
        createFrom: '2020-10-10',
        createTo: '2020-10-22',
        active: 'yes',
        recurring: 'no',
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
    }
    
  }
</script>