<template>
  <Tutorial/>
</template>

<script>
import { useAlertStore } from '../store/display';


export default {
  name: 'IndexPage',
  setup() {
    const alertStore = useAlertStore();

    return {
      alertStore,
    }
  },
  computed: {
    kaka() {
      return this.alertStore.increment()
    }
  },  
  methods: {
    hellworld() {
      return this.alertStore.increment()
    }
  }
}
</script>
