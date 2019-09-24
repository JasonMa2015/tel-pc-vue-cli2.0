export default [{
  path: '/',
  redirect: '/hz',
  name: 'Hz',
  component: () =>
    import('@/views/hz/Hz'),
  children: [{
    path: '/hz',
    name: 'HzChild',
    component: () =>
      import('@/views/hz/Hz'),
    children: [{
      path: '',
      name: '_Home',
      component: () =>
          import('@/views/home/Home')
    },
    {
      path: 'home',
      name: 'Home',
      component: () =>
          import('@/views/home/Home')
    },
    {
      path: 'list',
      name: 'List',
      component: () =>
          import('@/views/list/List')
    },
    {
      path: 'detail',
      name: 'Detail',
      component: () =>
          import('@/views/detail/Detail')
    }
    ]
  }]
}];
