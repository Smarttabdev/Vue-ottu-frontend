<template>
  <div class="lease-edit">
    <div class="text-right">
      <md-button class="btn-outline-orange">
        <md-icon class="orange">notifications_active</md-icon>
        send reminder
      </md-button>
    </div>
    <div class="step-section">
      <div class="step-header text-center">
        <h3 class="primary">Payment Tracking</h3>
      </div>
      <div class="step-content">
        <ul class="stepper stepper-horizontal">

          <!-- First Step -->
          <li>
            <a href="#!">
              <span class="circle complete"><md-icon class="check">check</md-icon></span>
            </a>
          </li>

          <!-- Second Step -->
          <li>
            <a href="#!">
              <span class="circle complete"><md-icon class="check">check</md-icon></span>
            </a>
          </li>

          <!-- Third Step -->
          <li class="uncom-after">
            <a href="#!">
              <span class="circle complete"><md-icon class="check">check</md-icon></span>
            </a>
          </li>

           <li class="uncom-before">
            <a href="#!">
              <span><md-icon class="incomplete">radio_button_checked</md-icon></span>
            </a>
          </li>
        </ul>
        <div class="container md-layout">
          <div class="md-layout-item md-xlarge-size-25 md-large-size-25 md-medium-size-25 md-small-size-25 md-xsmall-size-25 text-center">
            <h3>Last Invoice Created</h3>
            <div class="position-relative"><span class="status">2020-11-23 11:20:28</span></div>
          </div>
          <div class="md-layout-item md-xlarge-size-25 md-large-size-25 md-medium-size-25 md-small-size-25 md-xsmall-size-25 text-center">
            <h3>Last Notification Sent</h3>
           <div class="position-relative"><span class="status">2020-11-23 11:20:28</span><span class=" shoulder">1</span></div>
          </div>
          <div class="md-layout-item md-xlarge-size-25 md-large-size-25 md-medium-size-25 md-small-size-25 md-xsmall-size-25 text-center">
            <h3>Payment Link Opened</h3>
           <div class="position-relative"><span class="status">2020-11-23 11:20:28</span><span class=" shoulder">9</span></div>
          </div>
          <div class="md-layout-item md-xlarge-size-25 md-large-size-25 md-medium-size-25 md-small-size-25 md-xsmall-size-25 text-center">
            <h3>Payment Status</h3>
           <div class="position-relative"><span class="status">2020-11-23 11:20:28</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-card mt30">
      <div class="detail-header">
        <div class="container md-layout">
          <div class="md-layout-item md-xlarge-size-10 md-large-size-10 md-medium-size-10 md-small-size-10 md-xsmall-size-10 flex text-center">
            <md-icon class="fs30">home</md-icon>
          </div>
          <div class="md-layout-item md-xlarge-size-85 md-large-size-85 md-medium-size-85 md-small-size-80 md-xsmall-size-70">
            <h2>Hamad</h2>
            <span class="primary mr20 fs13 xs-size-20">L-445494</span>
            <span class="active">ACTIVE</span>
          </div>
          <div class="md-layout-item md-xlarge-size-5 md-large-size-5 md-medium-size-5 md-small-size-10 md-xsmall-size-20 text-right flex">
            <md-menu md-direction="bottom-start">
              <md-button class="md-icon-button" md-menu-trigger><md-icon>more_vert</md-icon></md-button>
              <md-menu-content>
                <md-menu-item @click="editVisible = true"><md-icon>edit</md-icon>Edit Lease</md-menu-item>
                <md-menu-item><md-icon>block</md-icon>Block Lease</md-menu-item>
                <md-menu-item @click="furtureVisible = true"><md-icon>add_box</md-icon>Create Furture Invoice</md-menu-item>
                <md-menu-item @click="payerVisible = true "><md-icon>edit</md-icon>Edit Payer</md-menu-item>
                <md-menu-item><md-icon>event_busy</md-icon>Edit Lease</md-menu-item>
                <md-menu-item><md-icon>all_out</md-icon>Allow Flexible Payment</md-menu-item>
              </md-menu-content>
            </md-menu>
          </div>
        </div>
      </div>
      <div class="detail-content">
        <div class="container md-layout">
          <div class="md-layout-item md-size-10"></div>
          <div class="md-layout-item md-size-90">
            <div class="container md-layout">
              <div class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="detail in details" :key="detail.title">
                <p class="item-title">{{detail.title}}</p>
                <p class="item-content">{{detail.content}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-detail">
      <vue-accordion
        title-bg-color="#f0f0f0"
        title-color="#424874"
        title-hover-color="#6983aa80"
        accordion-width="100%"
        :datas="accordionData"
      >
      </vue-accordion>
    </div>
    <div class="text-right mt10 mr0">
      <md-button class="btn-orange" @click="createVisible = true ">
        <md-icon class="white">add_circle_outline</md-icon>
        New Invoice
      </md-button>
    </div>
    <div class="container md-layout md-gutter custom-set m0 mt10">
      <div class="md-layout-item md-size-100">
        <md-field>
          <div class="custom-suffix"><md-icon>search</md-icon></div>
          <md-input class="md-custom-input" placeholder="Search by  lease name, payper email & mobile..."></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-large-size-20 md-medium-size-20 md-small-size-100 md-xsmall-size-100">
        <md-field class="select">
          <md-select v-model="item" name="item" placeholder="Lease Type" id="item" multiple class="md-custom-input">
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
          <md-select v-model="payment"  name="payment" placeholder="Propertise" id="payment" class="md-custom-input">
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
    <md-table v-model="payData" md-card class="m0">
      <md-table-toolbar>
        <div class="pagination-toolbar">
          <h5>Showing records: 1-2 of 2</h5>
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
        <div class="action-toolbar mb30">
          <div>
            <md-menu md-size="small" md-align-trigger>
              <md-button md-menu-trigger class="btn-orange text-transform-none"> Actions <md-icon class="white">keyboard_arrow_down</md-icon></md-button>
              <md-menu-content>
                  <md-menu-item><md-icon>monetization_on</md-icon>Mark as Paid</md-menu-item>
                  <md-menu-item><md-icon>block</md-icon>Block Lease</md-menu-item>
                  <md-menu-item ><md-icon>block</md-icon>UPblock Lease</md-menu-item>
                  <md-menu-item><md-icon>all_out</md-icon>Allow Flexible Payment</md-menu-item>
                  <md-menu-item ><md-icon>cancel</md-icon>Disallow Flexible Payment</md-menu-item>
              </md-menu-content>
            </md-menu>
          </div>
        </div>
      </md-table-toolbar>
      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple">
        <md-table-cell md-label="Invoice Number" md-sort-by="invoiceNum">{{ item.invoiceNum }}</md-table-cell>
        <md-table-cell md-label="Invoice Type" md-sort-by="invoiceType">{{ item.invoiceType }}</md-table-cell>
        <md-table-cell md-label="Invoice Peroid" md-sort-by="invoicePeroid">{{ item.invoicePeroid }}</md-table-cell>
        <md-table-cell md-label="Payment Due Date" md-sort-by="payDueDate">{{ item.payDueDate }}</md-table-cell>
        <md-table-cell md-label="Item" md-sort-by="item">{{ item.item }}</md-table-cell>
        <md-table-cell md-label="Total Amount" md-sort-by="amount">{{ item.amount }}</md-table-cell>
        <md-table-cell md-label="Invoice Status" md-sort-by="invoiceStatus"><span :class="'invoiceStatus-tag color' + item.invoiceStatus">&#9679;</span> <span :class="'invoiceStatus-tag color' + item.invoiceStatus">{{ invoiceStatusArray[item.invoiceStatus-1] }}</span></md-table-cell>
      </md-table-row>
    </md-table>
    <invoice-dialog v-model="createVisible"></invoice-dialog>
    <lease-edit-dialog v-model="editVisible"></lease-edit-dialog>
    <furture-invoice-dialog v-model="furtureVisible"></furture-invoice-dialog>
    <payer-edit-dialog v-model="payerVisible"></payer-edit-dialog>
  </div>
</template>

<script>
 import VueAccordion from "accordion-vue";
 import InvoiceDialog from '@/components/InvoiceDialog';
 import LeaseEditDialog from '@/components/LeaseEditDialog';
 import FurtureInvoiceDialog from '@/components/FurtureInvoiceDialog';
 import PayerEditDialog from '@/components/PayerEditDialog';

export default {
  components: {
    VueAccordion,
    InvoiceDialog,
    LeaseEditDialog,
    FurtureInvoiceDialog,
    PayerEditDialog
  },

  data() {
   return{
      details: {
        detail: {
          title: 'Property Details',
          content: 'Farwanyia complex, hjvh, kkdk'
        },
        date: {
          title: 'Start Date - End Date',
          content: '01/11/2020 - 28/01/2021'
        },
        owner: {
          title: 'Property Owner',
          content: 'Ajar RE'
        },
        rent: {
          title: 'Rent',
          content: '200.000KWD/Monthly'
        },
        unit: {
          title: 'Unit #',
          content: '8787'
        },
        rending: {
          title: 'Total Rending',
          content: '200.000KWD'
        },
        note: {
          title: 'Notes',
          content: 'N/A'
        },
      },
      infoDetails: [
        {
          title: 'Paper Name',
          content: 'hhhh'
        },
        {
          title: 'Emain Address',
          content: ''
        },
        {
          title: 'Mobile Number',
          content: '+9779893434'
        },
        {
          title: 'NationalID',
          content: 'N/A'
        },
          {
          title: 'Email Notification',
          content: 'Payment Link'
        },
          {
          title: 'Receipts Link',
          content: 'Receipts Link'
        },
         {
          title: 'Gender',
          content: 'N/A'
        },
         {
          title: 'Nationality',
          content: 'N/A'
        }
      ],
      item: '',
      invoiceStatus: '',
      payment: '',
      createVisible: false,
      editVisible: false,
      furtureVisible: false,
      payerVisible: false,
      pageCount: 5,
      payData: [
        {
          id: 1,
          invoiceNum: "INV-1110649856",
          invoiceType: 'Lease',
          invoicePeroid: '2020-11-20/2020-12-20',
          payDueDate: '2020-12-20',
          item: 'Rent',
          amount: '200.000 KWD',
          invoiceStatus: 1,
        },
        {
           id: 2,
          invoiceNum: "INV-1110649856",
          invoiceType: 'Lease',
          invoicePeroid: '2020-11-20/2020-12-20',
          payDueDate: '2020-12-20',
          item: 'Rent',
          amount: '200.000 KWD',
          invoiceStatus: 2,
        },
      ],
      invoiceStatusArray: ['Due', 'No Invoices', 'Past Due', 'Upcoming', 'Paid'],

    }
  },

  computed: {
    accordionData() {
      let cont = '<div class="container md-layout">'
      this.infoDetails.map(info => {
        cont += `<div class="md-layout-item md-xlarge-size-20 md-large-size-25  md-medium-size-25 md-small-size-33 md-xs-size-50"> <p class="item-title">${info.title}</p><p class="item-content">${info.content}</p></div>`
      })
      cont += '</div>';
      return [
        {
          title: 'Show Payer Info',
          content: cont
        }
      ]
    }
  }
}
</script>