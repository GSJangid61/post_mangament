<template>
  <div>
    <q-layout view="lHh Lpr lff" container style="height: 900px" class="shadow-2 rounded-borders">
      <q-page-container>
         <transition>
          <router-view></router-view>
        </transition>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>