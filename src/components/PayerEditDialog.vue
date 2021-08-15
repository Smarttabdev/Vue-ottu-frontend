<template>
  <div>
    <md-dialog :md-active.sync="isVisible" @close="onClose" class="payer-modal">

      <md-dialog-title>
     Edit Payer
        <div class="close-icon" @click="onClose">
          <md-icon class="red">close</md-icon>
        </div>
      </md-dialog-title>

      <div class="md-layout md-gutter modal-content">
        <div class="md-layout-item md-size-100 sm-size-100 xs-size-100">
          <span>mobile * </span>
          <md-field class="prefix">
            <div class="phone-suffix">
              <md-menu md-size="small" md-align-trigger>
                <md-button md-menu-trigger><img src="@/assets/flag/flag1.png" width="25" /> +965 <md-icon>arrow_drop_down</md-icon></md-button>
                <md-menu-content>
                  <md-menu-item><img src="@/assets/flag/flag1.png" width="30" /> +965</md-menu-item>
                  <md-menu-item><img src="@/assets/flag/flag1.png" width="30" /> +965</md-menu-item>
                </md-menu-content>
              </md-menu>
            </div>
            <md-input class="md-custom-input"  placeholder="Phone Number"></md-input>
          </md-field>      
        </div>
        <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
          <span>Email Address *</span>
          <md-field>
            <md-input class="md-custom-input" placeholder="Enter your Email"></md-input>
          </md-field>        
        </div>
        <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
          <span>NationalID(Optional)</span>
          <md-field>
            <md-input class="md-custom-input" placeholder="Enter National Id"></md-input>
          </md-field>        
        </div>
        <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
          <span>Notification Language *</span>
          <br>
            <md-radio v-model="language" value="english">English</md-radio>
            <md-radio v-model="language" value="arbic">Arbic</md-radio>    
        </div>
         <div class="md-layout-item md-size-50 sm-size-100 xs-size-100">
          <span>Notification type *</span>
          <br>
            <md-checkbox v-model="email" class="md-primary">Email</md-checkbox>
            <md-checkbox v-model="sms" class="md-primary">SMS</md-checkbox>
        </div>
      </div>
      <md-dialog-actions>
        <md-button class="btn-outline-orange mr50" @click="onClose"><md-icon class="orange">close</md-icon> Cancel</md-button>
        <md-button class="property-button" @click="onClose"><md-icon class="white">add_box</md-icon> Save Payer</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
</template>

<script>
  export default {
    name: 'AddDialog',
    data: () => ({
      isVisible: false,
      language: 'english',
      email: false,
      sms: false
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