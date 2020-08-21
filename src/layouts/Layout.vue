<template>
  <div>
    <q-layout view="lHh Lpr lff" container style="height: 900px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-toolbar-title>Admin</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple  to="/home" exact>
              
              <q-item-section> 
                Dashboard
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple to="/category" exact>
              
            <q-item-section>
                Category
              </q-item-section>
            </q-item>
            <q-item active clickable v-ripple to="/category/add" icon="plus" exact>
              
            <q-item-section>
                Add Category
              </q-item-section>
            </q-item>
            <q-item active clickable v-ripple to="/post" icon="plus" exact>
              
            <q-item-section>
                posts
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple to="/post/add" icon="plus" exact>
              
            <q-item-section>
                Add Post
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
                <q-btn type="button" style="background: red; color: white" label="Logout" @click="Logout()"/>
            </q-item>
            
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Hello {{name}}</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
         <transition>
  <router-view></router-view>
</transition>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
import { getUser } from 'src/store/user/getters';
export default {
  data () {
    return {
      
      name:'',
      drawer:false
    }
  },

  methods:{
    Logout(){
      this.$q.loading.show();
                      this.$store.dispatch('auth/logout')
                      .then(() => {
                        this.$q.loading.hide();
                        this.$router.go('/login')
                      })
                      .catch(err => {
                          this.$router.push('/login');
                          this.$q.loading.hide();
                      })
    },
   
  },
  mounted(){
    this.$axios({url:'http://127.0.0.1:8000/api/auth/user',method:'GET' })
          .then(resp =>  {
                            console.log(resp);
                            this.$store.commit('user/setUser',resp.data);
                            this.name=this.$store.getters['user/getUser']
                            
                        })
          .catch(err =>  { 
                              console.log(err);
                            // reject(err.response.data.message)
                        });
  }
}
</script>