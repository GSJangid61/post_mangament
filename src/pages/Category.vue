<template>
    <q-page class="flex">    
        <q-list bordered>
            <q-item clickable v-ripple style="border:0px;width:350px"  v-for="(category, index) in categories" :key="category.id">
                <q-item-section style="font-size:18px;font-family:inherit">{{category.name}}</q-item-section>
                <q-item-section>
                   <div class="text-h6" v-if="category.status=='1'">
                        <q-badge color="green">Active</q-badge>
                    </div>
                    <div class="text-h6" v-if="category.status=='0'">
                        <q-badge color="red">inActive</q-badge>
                    </div>
                </q-item-section>
                <q-item-section avatar>
                    <q-icon size="sm" style="font-size: 21px; margin-top: 14px;" color="red" name="delete" @click="deleteCategory(category.id,index)"/>
                </q-item-section>
            </q-item>
    </q-list>
    </q-page>
</template>
<script>

export default {
   data(){
       return {
           categories:[],
           open: false
       }
   },
   methods:{
       deleteCategory(id,index){
           if(confirm('Do you really ?')){
               this.$q.loading.show();
                     let data={id:id,index:index}
                      this.$store.dispatch('category/deleteCategory',data)
                      .then((resp) => {
                        this.$q.loading.hide();
                        this.$q.notify({color:'negative',position: 'top',message: resp.data.message});
                      })
                      .catch(err => {
                          console.log(err)
                          
                          this.$q.loading.hide();
                          this.$q.notify({color:'negative',position: 'top',message: resp.data.message});
                      })
           }
           return false;
       }
   },
   mounted(){
    this.$q.loading.show();
    this.$axios({url:'http://127.0.0.1:8000/api/auth/category',method:'GET' })
            .then(resp =>  {
                               
                                this.$store.commit('category/setCategory',resp.data.data);
                                this.categories=this.$store.getters['category/getCategory']
                                console.log(this.categories);
                                this.$q.loading.hide();
                            })
            .catch(err =>  { 
                                console.log(err);
                                // reject(err.response.data.message)
                                this.$q.loading.hide();
                            });

  }
}
</script>