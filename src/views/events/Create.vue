<template>
  <div class="center-section">
    <div class="header">
      <h3 class="m0">Booking</h3>
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