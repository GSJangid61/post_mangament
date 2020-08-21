<template>
<q-page class="flex flex-center">
    <h1>Home Component</h1>
</q-page>
</template>
<script>

export default {
  /*  beforeRouteEnter (to, from, next) {
        alert('Enter')
        next()
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
  },
  beforeRouteUpdate (to, from, next) {
      alert('update')
      next()
    // called when the route that renders this component has changed.
    // This component being reused (by using an explicit `key`) in the new route or not doesn't change anything.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused (unless you provided a `key` to `<router-view>`), and this hook will be called when that happens.
    // has access to `this` component instance.
  },
  beforeRouteLeave (to, from, next) {
      alert('Leave')
      next()
      
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
  }*/
  
  beforeCreate(){
      console.log('before created calls',this);
  }
  ,
  created(){
      console.log('created calls',this)
  }
}
</script>