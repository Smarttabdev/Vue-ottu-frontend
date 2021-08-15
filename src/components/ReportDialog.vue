<template>
  <div>
    <md-dialog :md-active.sync="isVisible" @close="onClose" class="report-modal">

      <md-dialog-title>
     Edit 
        <div class="close-icon" @click="onClose">
          <md-icon class="red">close</md-icon>
        </div>
      </md-dialog-title>

      <div class="md-layout md-gutter modal-content">
        <div class="md-layout-item md-size-100 sm-size-100 xs-size-100 border-top pb10">
          <div class="md-layout container ">
            <div class="md-layout-item md-size-40 sm-size-40 xs-size-40 fw700">
              Report Name
            </div>
            <div class="md-layout-item md-size-20 sm-size-20 xs-size-20 fw700">
              Schedule
            </div>
             <div class="md-layout-item md-size-20 sm-size-20 xs-size-20 fw700">
              Format
            </div>
            <div class="md-layout-item md-size-20 sm-size-20 xs-size-20 fw700">
              Enable
            </div>
          </div>
        </div>
        <div class="md-layout-item md-size-100 sm-size-100 xs-size-100 border-top" v-for="item in editData" :key="item.id">
          <div class="md-layout container">
            <div class="md-layout-item md-size-40 sm-size-40 xs-size-40 pt10">
              {{item.name}}
            </div>
            <div class="md-layout-item md-size-20 sm-size-20 xs-size-20">
               <md-field class="schedule-edit">
                <md-select v-model="item.schedule" name="schedule" id="schedule">
                    <md-option value="Daily">Daily</md-option>
                    <md-option value="Weekly">Weekly</md-option>
                    <md-option value="Monthly">Monthly</md-option>
                    <md-option value="Quality">Quality</md-option>
                    <md-option value="SemiAnnually">Semi Annually</md-option>
                    <md-option value="Annually">Annually</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-size-20 sm-size-20 xs-size-20">
               <md-field class="schedule-edit">
                <md-select v-model="item.format" name="format" id="format">
                    <md-option value="EXCEL">EXCEL</md-option>
                    <md-option value="WORD">WORD</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-size-20 sm-size-20 xs-size-20">
               <md-field class="schedule-edit">
                <md-select v-model="item.enabled" name="enabled" id="enabled">
                    <md-option value="true">Yes</md-option>
                    <md-option value="false">No</md-option>
                </md-select>
              </md-field>
            </div>
          </div>
        </div>
      </div>
      <md-dialog-actions>
        <md-button class="btn-outline-orange mr50" @click="onClose"><md-icon class="orange">close</md-icon> CANCEL</md-button>
        <md-button class="property-button" @click="onClose"><md-icon class="white">arrow_forward</md-icon> NEXT</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
</template>

<script>
  export default {
    name: 'ReportDialog',
    data: () => ({
      isVisible: false,
      editData: [
        {
          id: 1,
          name: 'Report Name',
          schedule: 'Monthly',
          format: 'EXCEL',
          enabled: true
        },
        {
          id: 2,
          name: 'Report Name',
          schedule: 'Daily',
          format: 'EXCEL',
          enabled: false
        },
        {
          id: 3,
          name: 'Report Name',
          schedule: 'Monthly',
          format: 'EXCEL',
          enabled: true
        },
        {
          id: 4,
          name: 'Report Name',
          schedule: 'Daily',
          format: 'EXCEL',
          enabled: true
        },
      ]
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