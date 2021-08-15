<template>
  <div>
    <md-dialog :md-active.sync="isVisible" @close="onClose"  class="furture-invoice">
      <md-dialog-title>
      Create Furture Invoice
        <div class="close-icon" @click="onClose">
          <md-icon class="red">close</md-icon>
        </div>
      </md-dialog-title>
      <div class="section  modal-content">
        <div class="subtitle  m30">
          <h4 class="primary content  border-bottom p20">Lease Details</h4>
          <div class="container md-layout gutter">
            <div class="md-layout-item md-xlarge-size-50 md-large-size-50 md-medium-size-50 md-small-size-50 md-xsmall-size-100" v-for="item in leases" :key="item.title">
              <p class="item-title">{{item.title}}</p>
              <p class="item-content">{{item.content}}</p>
            </div>
          </div>
        </div>
        <div class="md-layout md-gutter mt30">
          <div class="md-layout-item md-size-100 xs-size-100">
            <span>Lease peroids*</span>
            <md-field class="select-transparent">
                <md-select placeholder="Number of lease period" v-model="period" name="complex" id="complex" md-dense class="md-custom-select">
                  <md-option value="australia">1 voice</md-option>
                  <md-option value="brazil">2 voice</md-option>
                </md-select>
              </md-field>     
          </div>
        </div>
      </div>
      <md-dialog-actions>
        <md-button class="btn-outline-orange mr50" @click="onClose"><md-icon class="orange">close</md-icon> Cancel</md-button>
        <md-button class="property-button" @click="onClose"><md-icon class="white">loop</md-icon> Generate Invoice</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
</template>

<script>
  export default {
    components: {
    },
    name: 'furtureInvoiceDialog',
    data: () => ({
      isVisible: false,
      startDate: '2020-12-20',
      endDate: '2020-12-20',
      payDate: '2020-12-20',
      amount: '300000',
      unit: 'USD',
      period: 'australia',
      type: '',
     tag: '',
      tags: ['9797'],
      note: '',
      leases: [
        {
          title: 'Lease Name',
          content:'Hamad'
        },
        {
          title: 'Property Name',
          content:'Farwarniya complex'
        },
        {
          title: 'Unit(s)',
          content:'8787'
        },
        {
          title: 'Lease Date',
          content:'2020-10-12/2020-12-20'
        },
        {
          title: 'Start Online Collection',
          content:'2020-10-20'
        },
        {
          title: 'Collection Frequency',
          content:'Monthly'
        },
      ],
      radio: 'fixed'
    }),
    watch: {
      value(newVal) {
      this.isVisible = newVal;
      },
      isVisible(newVal) {
        if(newVal == false)
        this.$emit('input', false);
      }
    },
    props: {
      value: {
      type: Boolean,
      required: true
      },
    },
    methods: {
      onClose() {
        this.isVisible = false;
        this.$emit('input', this.isVisible);
      },
      addingTag(handler) {
        handler.addTag(); // tag is only added if the function 'addTag' is invoked
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-dialog /deep/.md-dialog-container {
    max-width: 768px;
  }


</style>