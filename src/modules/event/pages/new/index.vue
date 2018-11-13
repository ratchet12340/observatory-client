<template>
  <div class="container">
    <PageHeader title="New Event" />
    <EventForm />
  </div>
</template>

<script>

import EventForm from '../../components/EventForm'

export default {
  name: 'EventList',
  components: {
    EventForm
  }
}
</script>
