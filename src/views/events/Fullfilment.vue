<template>
  <div class="container md-layout">
    <div class="md-layout-item md-xlarge-size-60 md-large-size-60 md-medium-size-6- md-small-size-60">
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
        'Gabriya Gym',
        'Sabah Salem',
        'Ottu Showroom - Avenues',
        'Ottu restrant',
        'Spark Athletic',
        'Jarrallah German Specialized Clinic',
        'Ottu Migration',
        'Derma Sessions',
        'VFS Global',
        'Royal Victoria Book Appointment',
        'Bangladesh Embassy Booking',
        'Fizz Adventures',
        'test'
      ]
    }
  }
}
</script>