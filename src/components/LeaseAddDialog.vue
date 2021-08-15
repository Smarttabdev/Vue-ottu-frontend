<template>
  <div>
    <md-dialog :md-active.sync="isVisible" @close="onClose"  class="lease-modal">
      <md-dialog-title>
      Add Lease
        <div class="close-icon" @click="onClose">
          <md-icon class="red">close</md-icon>
        </div>
      </md-dialog-title>
      <div class="section">
        <div class="subtitle">
          <h4 class="primary content">Properties And Units*</h4>
        </div>
     
        <div class="md-layout md-gutter modal-content">
          <div class="md-layout-item md-size-100 xs-size-100">
            <span>Select Property<span>*</span></span>
            <md-field class="select-transparent">
                <md-select placeholder="Farwanniya complex" name="complex" id="complex" md-dense class="md-custom-select">
                  <md-option value="australia">Australia</md-option>
                  <md-option value="brazil">Brazil</md-option>
                  <md-option value="japan">Japan</md-option>
                  <md-option value="united-states">United States</md-option>
                </md-select>
              </md-field>     
          </div>
          <div class="md-layout-item md-size-100 xs-size-100">
            <span>Select Property<span>*</span></span>
            <md-field class=" custom-tag border-radius-3">
                <vue-tags-input
                @before-adding-tag="handler => addingTag(handler, index)"
                  v-model="tag"
                  :tags="tags"
                  @tags-changed="newTags => tags = newTags"
                />   
            </md-field> 
          </div> 
        </div>
           <div class="subtitle">
            <h4 class="primary content">Lease Details*</h4>
          </div>
        <div class="md-layout md-gutter modal-content">
          <div class="md-layout-item md-size-100 sm-size-100 xs-size-100">
            <span>Lease Name *</span>
              <md-field>
                <md-input class="md-custom-input" v-model="leases.name"></md-input>
              </md-field>  
          </div>
          <div class="md-layout-item md-size-100 sm-size-100 xs-size-100">
            <span>Collection Frequency *</span>
            <md-field class="select-transparent">
                <md-select  name="frequency" id="frequency" md-dense class="md-custom-select" v-model="leases.frequency">
                  <md-option value="monthly">Monthly</md-option>
                  <md-option value="yearly">Yearly</md-option>
                  <md-option value="daily">Daily</md-option>
                </md-select>
              </md-field>         
          </div>
          <div class="md-layout-item md-size-50 xs-size-100">
            <span>First Payment Due Date *</span>
            <md-datepicker v-model="leases.duedate"/>
          </div>
              <div class="md-layout-item md-size-50 xs-size-100">
              <span>Lease End Date<span>*</span></span>
              <md-datepicker v-model="leases.enđate"/>
            </div>
          <div class="md-layout-item md-size-100 sm-size-100 xs-size-100">
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
        <div class="subtitle">
          <h4 class="primary content">Lease Discount(Optional)</h4>
        </div>
        <div class="md-layout md-gutter modal-content">
          <div class="md-layout-item md-size-100 sm-size-100">
            <span>Lease Name *</span>
            <br>
            <!--<md-field class="select-transparent">-->
              <md-radio v-model="radio" value="fixed">Fixed</md-radio>
              <md-radio v-model="radio" value="percentage">Percentage</md-radio>
            <!--</md-field>-->
          </div>
            <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
              <span>Number of Periods *</span>
              <md-field class="select-transparent">
                <md-input class="md-custom-input" v-model="leases.period"></md-input>
              </md-field>  
            </div>
           <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
            <span>Amount <span class="red">(Required)</span></span>
              <md-field class="select-transparent">
                <md-input class="md-custom-input" v-model="leases.amount1"></md-input>
                <div class="unit">
                  <md-select placeholder="" name="unit" id="unit" md-dense class="md-custom-select" v-model="unit" >
                    <md-option value="USD">USD</md-option>
                    <md-option value="EUr">EUR</md-option>
                  </md-select>
                </div>
              </md-field>  
          </div>
          </div>
      </div>

      <md-dialog-actions class="mt30">
        <md-button class="btn-outline-orange mr50" @click="onClose"><md-icon class="orange">close</md-icon> Cancel</md-button>
        <md-button class="property-button" @click="onClose"><md-icon class="white">add_circle_outline</md-icon> Add Lease</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input';
  export default {
    components: {
      VueTagsInput
    },
    name: 'leaseEditDialog',
    data: () => ({
      isVisible: false,
      startDate: '2020-12-20',
      endDate: '2020-12-20',
      payDate: '2020-12-20',
      amount: '300000',
      unit: 'USD',
      type: '',
     tag: '',
      tags: ['9797'],
      note: '',
      leases: {
        name: 'Hamad',
        frequency: 'monthly',
        duedate: '2020-10-01',
        enddate: '2020-12-20',
        amount: '200.000KWD',
        note: '',
        period: 1,
        amount1: '10.000'
      },
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