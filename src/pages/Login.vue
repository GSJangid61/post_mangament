<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);"
  >
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:300px;height:485px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Login Now</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%);">
              <q-btn fab icon="add" color="purple-4" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl" @submit="Login()">
              <q-input 
               square clearable 
               v-model="loginForm.email" 
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
              <q-input 
              square clearable 
              v-model="loginForm.password" 
              type="password"
              label="Password"
              lazy-rules
                :rules="[ 
                    val => val && val.length > 6|| 'Please enter your password',
                    ]"

               >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              
                <q-btn  type="submit"  size="lg" color="purple-4" class="full-width text-white" label="Sign In"/>
               
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
     loginForm: {
         email:'',
         password:''      
      },
    }
  },
  methods:{
      Login(){
          this.$q.loading.show();
          let data={
              email:this.loginForm.email,
              password:this.loginForm.password
          }
          this.$axios({url:'http://127.0.0.1:8000/api/auth/login', data:data,method:'POST'})
              .then(async resp =>  {  
                            console.log(resp);
                            this.$q.loading.hide();
                            var token=resp.data.access_token
                            this.$store.commit('auth/auth_success',token);
                            this.$q.notify({color:'positive',position: 'top',message: resp.data.message});
                            this.$router.push('/home');
                            
                            })
            .catch(err =>  { 
                            
                          this.$q.notify({color:'negative',position: 'top',message: "Invalid credentials"});
                           this.$q.loading.hide();
                            });
      }
  }
}
</script>

<style>
</style>