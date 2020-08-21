/*
export function someAction (context) {
}
*/
import axios from 'axios'
export async function logout (/* context */context) {
    let headers = 	{
                        'token': context.state.token
                    };
    return new Promise(async (resolve, reject) => 
          {			       
            context.commit('remove_auth');
            axios({url:'http://127.0.0.1:8000/api/auth/logout',method:'POST' })
                        .then(resp =>  {
                                           //context.commit('auth_remove');
                                           resolve(true);
                                       })
                        .catch(err =>  { 
                                            console.log(err);
                                            reject(err.response.data.message)
                                       });
        });


}
