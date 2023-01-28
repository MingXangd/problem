{
      path:'/yqe',
      name:'Yqe',
      component:Yqe,
      children:[
        {
          path:'ping',
          name:'Ping',
          component:Ping
        }]
}

beforeEnter: (to, from, next) => {