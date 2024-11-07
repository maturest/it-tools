/**
 * 基础路由
 * @type { *[] }
 */

const constantRouterMap = [
  {
    path: '/',
    name: 'Growth',
    redirect: { name: 'TransRelativePath' },
    children: [
      {
        path: '/trans',
        name: 'TransRelativePath',
        component: () => import('@/views/tools/trans.vue')
      },
    ]
  },
]

export default constantRouterMap