<template>
  <div class="center-section">
    <div class="header">
      <h3>Booking Bulk Create</h3>
      <md-button class="btn-orange">Download Example<md-icon class="white">download</md-icon></md-button>
    </div>
    <div class="content">
        <md-autocomplete v-model="selectedEvent" :md-options="events">
          <label>Event</label>
        </md-autocomplete>
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
      ]
    }
  }
}
</script>