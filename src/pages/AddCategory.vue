<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="form.name"
        label="category name"
        hint="category name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type category']"
      />
      <div>
        <q-btn label="Add Now" type="submit" color="primary"/>
      </div>
    </q-form>

  </div>
</template>
<script>
export default {
  data () {
    return {
      form:{
          name:''
      }
     
    }
  },

  methods: {
    onSubmit () {
      this.$q.loading.show();
        let data={name:this.form.name}
        this.$axios({url:'http://127.0.0.1:8000/api/auth/category',data:data,method:'POST' })
                .then(resp =>  {
                                
                                    
                                    this.$q.loading.hide();
                                    this.$q.notify({color:'positive',position: 'top',message: resp.data.message});
                                    this.$router.push('/category');
                                })
                .catch(err =>  { 
                                    console.log(err);
                                    // reject(err.response.data.message)
                                    this.$q.loading.hide();
                                    this.$q.notify({color:'negative',position: 'top',message: err.data.message});
                                    this.$router.push('/category');
                                });
    }
  }
}
</script>