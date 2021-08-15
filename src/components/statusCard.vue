<template>
  <md-card class="md-card">
    <md-card-header :data-background-color="dataBackgroundColor" md-alignment="left">
      <h2>{{title}}</h2>
    </md-card-header>

    <md-card-content md-alignment="left">
     <span>{{category}}</span>
    </md-card-content>

    <md-card-actions md-alignment="left">
      <h1 :class="statusColor">{{status}}</h1>
      <md-icon :class="iconColor + ' material-icons-round'">{{statusIcon}}</md-icon>
    </md-card-actions>
  </md-card>
</template>

<script>
   export default {
    name: 'status-card',
    props: {
      dataBackgroundColor: {
        type: String,
        default: "whtie"
      },
      title: {
        type: String
      },
      category: {
        type: String
      },
      status: {
        type: String
      },
      statusColor: {
        type: String
      },
      statusIcon: {
      type: String
      },
      iconColor: {
        type: String
      }
    }
  }
</script>