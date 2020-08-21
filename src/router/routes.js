
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      
      {
        path: 'login',
        name:'login',
        meta:{auth:false},
       /* beforeEnter: (to, from, next) => {
          alert('This is Login Page')
        },
        beforeRouteLeave (to, from, next) {
          alert('you are leaving the route');
        },*/
        component: () => import('pages/Login.vue')
      },
      {
        path: 'register',
        name:'register',
        meta:{auth:false},
        component: () => import('pages/Register.vue')
      },
      
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
         
         path: 'home', 
         meta:{auth:true},
         component: () => import('pages/Home.vue') ,

      },
      {
         
        path: 'category', 
        meta:{auth:true},
        component: () => import('pages/Category.vue') ,

     },
     {
         
      path: 'category/add', 
      meta:{auth:true},
      component: () => import('pages/AddCategory.vue') ,

    },
    {
         
      path: 'post', 
      meta:{auth:true},
      component: () => import('pages/Posts.vue') ,

    },
    {
         
      path: 'post/add', 
      meta:{auth:true},
      component: () => import('pages/AddPost.vue') ,

    },
      
     /* {
        path: 'form',
        name:'Form',
        meta:{auth:true},
        component: () => import('pages/Form.vue'),
        
      },*/
      
      
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
