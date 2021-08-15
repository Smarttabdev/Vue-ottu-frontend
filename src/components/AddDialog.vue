<template>
  <div>
    <md-dialog :md-active.sync="isVisible" @close="onClose" class="add-modal">
      <md-dialog-title>
      Add New Property
        <div class="close-icon" @click="onClose">
          <md-icon class="red">close</md-icon>
        </div>
      </md-dialog-title>

      <div class="md-layout md-gutter modal-content">
        <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
          <span>Property Name <span class="orange">(Required)</span></span>
          <md-field>
            <md-input class="md-custom-input"></md-input>
          </md-field>        
        </div>
        <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
          <span>Property Type <span class="orange">(Required)</span></span>
          <md-field>
            <md-input class="md-custom-input"></md-input>
          </md-field>        
        </div>
        <div class="md-layout-item md-size-100 xs-size-100">
          <span>Address 1<span>(Optional)</span></span>
          <md-field>
            <md-input class="md-custom-input"></md-input>
          </md-field>        
        </div>
        <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
          <span>Region <span class="orange">(Required)</span></span>
          <md-field class="select-transparent">
              <md-select placeholder="Select your Region" v-model="country" name="country" id="country" md-dense class="md-custom-select">
                <md-option value="australia">Australia</md-option>
                <md-option value="brazil">Brazil</md-option>
                <md-option value="japan">Japan</md-option>
                <md-option value="united-states">United States</md-option>
              </md-select>
            </md-field>         
        </div>
        <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
          <span>Area <span class="orange">(Required)</span></span>
            <md-field class="select-transparent">
              <md-select placeholder="Select your Area" v-model="area" name="area" id="area" md-dense class="md-custom-select">
                <md-option value="australia">Australia</md-option>
                <md-option value="brazil">Brazil</md-option>
                <md-option value="japan">Japan</md-option>
                <md-option value="united-states">United States</md-option>
              </md-select>
            </md-field>  
        </div>
        <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
          <span>Bank <span class="orange">(Required)</span></span>
            <md-field class="select-transparent">
              <md-select placeholder="Select your Bank" v-model="bank" name="bank" id="bank" md-dense class="md-custom-select">
                <md-option value="australia">Australia</md-option>
                <md-option value="brazil">Brazil</md-option>
                <md-option value="japan">Japan</md-option>
                <md-option value="united-states">United States</md-option>
              </md-select>
              <div class="find">find</div>
            </md-field>  
        </div>
        <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
          <span>PACI ID<span>(Optional)</span></span>
          <md-field>
            <md-input class="md-custom-input"></md-input>
          </md-field>        
        </div>

         <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
          <span>PACI ID<span>(Optional)</span></span>
          <md-field>
            <md-input class="md-custom-input"></md-input>
          </md-field>        
        </div> <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
          <span>PACI ID<span>(Optional)</span></span>
          <md-field>
            <md-input class="md-custom-input"></md-input>
          </md-field>        
        </div>
      </div>

      <md-dialog-actions>
        <md-button class="property-button" @click="onClose">Add Property</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
</template>

<script>
  export default {
    name: 'AddDialog',
    data: () => ({
      isVisible: false,
      bank: 'brazil',
      country: 'japan',
      area: 'japan'
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