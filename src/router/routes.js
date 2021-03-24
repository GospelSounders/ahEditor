
const routes = [
  {
    path: '/',
    component: () => import('layouts/homeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },{
    path: '/cis',
    component: () => import('layouts/cisLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/blank',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
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
