<template>
  <div class="center-section">
    <div class="header">
      <h3 class="m0">Help</h3>
    </div>
    <div class="content">
      <md-field class="help-field">
        <md-input v-model="email" placeholder="Email" class="md-custom-input p10"></md-input>
      </md-field>
      <md-field class="mb10 help-field">
        <md-select v-model="subject" md-dense class="md-custom-input" placeholder="Select Subject">
          <md-option value="request">Subject Request</md-option>
          <md-option value="suggestion">Suggestion</md-option>
          <md-option value="feedback">Feedback</md-option>
        </md-select>
      </md-field >
      <md-field class="help-field">
        <!-- <md-textarea v-model="message" placeholder="Message"></md-textarea> -->
        <textarea class="custom-textarea" v-model="message" placeholder="Message"></textarea>
      </md-field>
      <div class="text-center">
        <md-button class="btn-orange" @click="onClick">Submit</md-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      selectedEvent: null,
      events: [
        'Normal Event',
        'Top Event'
      ],
      email: '',
      subject: '',
      message: '',
    }
  },

  methods: {
    onClick() {
      alert('clicked')
    }
  }
}
</script>