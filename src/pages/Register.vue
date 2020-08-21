<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);"
  >
   <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Registration</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="close" color="purple-4" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg" @submit="Register">
              <q-input square clearable 
                v-model="form.name"
                type="name"
                label="Name"
                lazy-rules
                :rules="[ 
                    val => val && val.length > 0 || 'Please enter your name',
                    ]"
               >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable 
                v-model="form.email" 
                type="email"
                label="Email"
                lazy-rules
                :rules="[ 
                    val => val && val.length > 0 || 'Please enter your email',
                    val => val && /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/.test(val) || 'Please enter a valid email'
                    ]"
                >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              
              <q-input square clearable
                v-model="form.password"
                type="password" 
                label="Password"
                lazy-rules
                :rules="[ 
                    val => val && val.length > 6 || 'Please enter your pasword',
                    ]"
                >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <q-btn unelevated type="submit" size="lg" color="purple-4" class="full-width text-white" label="Get Started" />
            </q-form>
          </q-card-section>
         
        </q-card>
      </div>
    </div>
   
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form:{
        name:'',
        email:'',
        password:''
      }
    }
  },
  methods:{
    Register(){
          this.$q.loading.show();
          let data={
              name:this.form.name,
              email:this.form.email,
              password:this.form.password
          }
          this.$axios({url:'http://127.0.0.1:8000/api/auth/signup', data:data,method:'POST'})
              .then(async resp =>  {  
                            
                            if(resp.data.status==true){
                              this.$q.notify({color:'positive',position: 'top',message: resp.data.message});
                              this.$q.loading.hide();
                              this.$router.push('/login');
                            }
                            else{
                              this.$q.notify({color:'negative',position: 'top',message: resp.data.error[0]});
                              this.$q.loading.hide();
                            }
                            
                            })
            .catch(err =>  { 
                            console.log(err);
                            this.$q.notify({color:'negative',position: 'top',message:'oops! some error'});
                            this.$q.loading.hide();
                            });
      }
  }
}
</script>

<style>
</style>