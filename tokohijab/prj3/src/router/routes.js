
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/Admin/Home/DataJilbab.vue') },
      { path: 'inputdatajilbab', component: () => import('pages/Admin/Home/InputDataJilbab.vue') },
      { path: 'editdatajilbab/:id', component: () => import('pages/Admin/Home/EditDataJilbab.vue') },
      { path: 'karyawan', component: () => import('pages/Admin/Transaksi/DataKaryawan.vue') },
      { path: 'transaksi', component: () => import('pages/Admin/Transaksi/DataTransaksi.vue') }
    ]
  },
  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    meta: {
      auth: true
    },
    children: [
      { path: '', component: () => import('pages/Admin/Pembeli/DataPembeli/DataPembeli.vue') },
      { path: 'transaksi', component: () => import('pages/Admin/Transaksi/DataTransaksi.vue') },
      { path: 'keranjang', component: () => import('pages/Admin/Pembeli/Transaksi/DataKeranjang.vue') },
      { path: 'reting', component: () => import('pages/Admin/Pembeli/Transaksi/Reting.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: '/auth/login', component: () => import('pages/user/Login.vue') },
      { path: '/auth/registrasi', component: () => import('pages/user/Registrasi.vue') }
    ]
  },
  {
    path: '/loginpembeli',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: '/auth/loginpembeli', component: () => import('pages/user/Loginpembeli.vue') },
      { path: '/auth/regispembeli', component: () => import('pages/user/Regispembeli.vue') }
    ]
  }
]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
