<template>
  <div class="q-pa-md">
<q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
    <div class="row">
      <div class="col-12 col-md-4">
        <q-input filled
         type="text" 
         v-model="name"
          label="Name" 
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please enter name']"
          />
      </div>
    </div>
     <div class="row">
      <div class="col-12 col-md-4">
        <q-input filled 
        type="email"
        v-model="email"
        label="Email" 
        lazy-rules
         :rules="[ 
            val => val && val.length > 0 || 'Please enter your email',
            val => val && /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/.test(val) || 'Please enter a valid email'
            ]"
        />
      </div>
    </div>
     <div class="row">
      <div class="col-12 col-md-4">
        <q-input filled 
        type="tel" 
        v-model="mobile"
         label="Mobile" 
         lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please enter your mobile number']"
         />
      </div>
    </div>
     <div class="row">
      <div class="col-12 col-md-4">
       <label>Gender</label>
       <q-radio filled
        v-model="gender"
        val="male"
        label="Male" 
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please select gender']"
        />
      <q-radio filled 
        v-model="gender" 
        val="female"
        label="Female"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please select gender']"
         />
    </div>
    </div>
     
    
     <div class="row">
      <div class="col-12 col-md-4">
        <q-select
         filled
         v-model="lang" 
         :options="options" 
         label="Language" 
         lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please select language']"
         />
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-12 col-md-4">
            <label>Games</label>
            <q-checkbox v-model="hobby" val="Cricket" label="Cricket"  />
            <q-checkbox v-model="hobby" val="Football" label="Football" />
            <q-checkbox v-model="hobby" val="Hockey" label="Hockey"  />
            <q-checkbox v-model="hobby" val="PUBG" label="PUBG"  />
        </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-8">
         <q-toggle v-model="accept" label="accept terms "/> 
        </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-8">
         <q-btn label="Submit" type="submit" color="primary"/>
    </div>
    </div>
    
</q-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      name:null,
      email:null,
      mobile:null,
      lang: null,
      gender:null,
      hobby:[],
      accept:false,
      options: [
        'Hindi', 'English', 'Duetch', 'Arabi', 'Urdu'
      ]
    }
  },
  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          positon:'top',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          positon:'top',
          message: 'Form is submit successfully',
          
        })
      }
    },
    onReset () {
      
      
    }
  }
}
</script>
