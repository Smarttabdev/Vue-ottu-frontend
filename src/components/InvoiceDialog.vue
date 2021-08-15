<template>
  <div>
    <md-dialog :md-active.sync="isVisible" @close="onClose"  class="invoice-modal">
      <md-dialog-title>
      Creat New Invoice
        <div class="close-icon" @click="onClose">
          <md-icon class="red">close</md-icon>
        </div>
      </md-dialog-title>
      <div class="subtitle">
        <h4 class="primary content">Invoice Details*</h4>
      </div>

      <div class="md-layout md-gutter modal-content">
        <div class="md-layout-item md-size-100 xs-size-100">
          <span>Type<span>*</span></span>
          <md-field class="select-transparent">
            <md-select placeholder="Type" name="type" id="type" md-dense class="md-custom-select">
              <md-option value="australia">Australia</md-option>
              <md-option value="brazil">Brazil</md-option>
              <md-option value="japan">Japan</md-option>
              <md-option value="united-states">United States</md-option>
            </md-select>
          </md-field>     
        </div>
        <div class="md-layout-item md-size-50 xs-size-100">
          <span>To<span>*</span></span>
          <md-datepicker v-model="startDate"/>
        </div>
        <div class="md-layout-item md-size-50 xs-size-100">
          <span>From<span>*</span></span>
           <md-datepicker v-model="endDate"/>
        </div>
          <div class="md-layout-item md-size-50 xs-size-100">
            <span>Payment Due Date<span>*</span></span>
            <md-datepicker v-model="payDate"/>
          </div>
        <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
          <span>Amount <span class="red">(Required)</span></span>
          <md-field class="select-transparent">
              <md-input class="md-custom-input" v-model="amount"></md-input>
            <div class="unit">
              <md-select placeholder="" name="unit" id="unit" md-dense class="md-custom-select" v-model="unit">
                <md-option value="USD">USD</md-option>
                <md-option value="EUr">EUR</md-option>
              </md-select>
            </div>
          </md-field>  
        </div>
         <div class="md-layout-item md-size-100 sm-size-100 xs-size-100">
          <span>Notes <span class="red">(Optional)</span></span>
            <md-field class="">
                <textarea name="" id="" class="custom-textarea border-gray" rows="3" placeholder="Type your notes here..." v-model="note"></textarea>
            </md-field>  
        </div>
      </div>

      <md-dialog-actions>
        <md-button class="btn-outline-orange mr50" @click="onClose"><md-icon class="orange"> close</md-icon> Cancel</md-button>
        <md-button class="property-button" @click="onClose"><md-icon class="white">send</md-icon> Send</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
</template>

<script>
  export default {
    name: 'InvoiceDialog',
    data: () => ({
      isVisible: false,
      startDate: '2020-12-20',
      endDate: '2020-12-20',
      payDate: '2020-12-20',
      amount: '300000',
      unit: 'USD',
      type: '',
      note: ''
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
      }
    },
    methods: {
      onClose() {
        this.isVisible = false;
        this.$emit('input', this.isVisible);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-dialog /deep/.md-dialog-container {
    max-width: 768px;
  }


</style>