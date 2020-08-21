/*
export function someAction (context) {
}
*/
import axios from 'axios'

export async function  deleteCategory(/* context */context,data) {
    
    return new Promise(async (resolve, reject) => 
          {			       
           
           
            axios({url:'http://127.0.0.1:8000/api/auth/category/'+data.id,method:'DELETE' })
                        .then(resp =>  {
                                           //context.commit('auth_remove');
                                           if(resp.data.status==true){
                                              context.commit('category_remove',data.index); 
                                           }
                                           resolve(resp);
                                       })
                        .catch(err =>  { 
                                            console.log(err);
                                            reject(err.response.data.message)
                                       });
        });


}
