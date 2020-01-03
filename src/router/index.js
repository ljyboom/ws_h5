import Index from '@/components/pc/index'
import MobileIndex from '@/components/mobile/index'


const routes =
  [
    {path: '/', redirect: '/index'},
    {path: '/index', component: Index},
    {path: '/mobileIndex', component: MobileIndex},
  ];
export default routes;
