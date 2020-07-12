<template>
  <q-layout view="lHh Lpr lFf">

    <q-header class="bg-pink-8 text-blue-grey-6">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title class="absolute-center">
          <div class="text-black">
            <div class="text-weight-bold">
              <marquee direction="right" scollamount="5" align="center">HIJAB STORE APLICATION</marquee>
            </div>
          </div>
        </q-toolbar-title>
        <q-toolbar-title></q-toolbar-title>
        <q-btn flat round dense icon="person" style="font-size: 20px;">
          <q-menu>
            <div class="row no-wrap q-pa-lg">
              <div class="column">
                <q-item-label class="text-h6">User</q-item-label>
                <q-linear-progress class="q-mb-lg" :value="100" color="grey-4" style="height: 2px"/>
                <div class="items-center">
                  <div class="text-bold items-center">{{ dataUser.userName }}</div>
                  <div>{{ dataUser.namaLengkap }}</div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-lg"></q-separator>

              <div class="column items-center">
                <q-btn flat round dense>
                  <q-avatar size="72px">
                    <img src="https://placeimg.com/500/300/nature">
                  </q-avatar>
                </q-btn>

                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <div class="text-subtitle1 q-mt-md q-mb-xs"></div>
                <q-btn
                  color="pink"
                  label="logout"
                  unelevated
                  @click="keluar()"
                  size="sm"
                  v-close-popup>
                  <q-tooltip>Keluar disini..</q-tooltip>
                </q-btn>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="left"
      :breakpoint="500"
      show-if-above
      content-class="bg-pink-4 text-black"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 70px;" class="bg-pink-4 text-bold">
            <q-item-section>
              Hijab Store Aplication
            </q-item-section>
          </q-item>
          <q-item class="justify-center text-center q-mb-md q-pt-md">
            <div>
              <q-avatar size="150px" class="q-mb-md">
                <img spinner-color="white" placeholder-src="jilbab.jpg" src="jilbab.jpg">
              </q-avatar>
              <div class="text-weight-bold">{{ dataUser.userName }}</div>
              <div>{{ dataUser.namaLengkap }}</div>
            </div>
          </q-item>
          <q-item-label
            header
            class="text-black"
          >
            MASTER DATA JILBAB
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="table_chart" />
            </q-item-section>
            <q-item-section>
              Data Jilbab
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="/InputDataJilbab">
            <q-item-section avatar>
              <q-icon name="input" />
            </q-item-section>
            <q-item-section>
              Input Data Jilbab
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="Karyawan">
            <q-item-section>
              Karyawan
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple to="/karyawan">
            <q-item-section avatar>
              <q-icon name="face"/>
            </q-item-section>
            <q-item-section>
              Data Karyawan
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="Transaksi">
            <q-item-section>
              Transaksi
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple to="/transaksi">
            <q-item-section avatar>
              <q-icon name="monetization_on"/>
            </q-item-section>
            <q-item-section>
              Data Transaksi
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container class="bg-white">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {
      left: false,
      dataUser: this.$q.localStorage.getItem('datauser')
    }
  },
  methods: {
    keluar () {
      this.$q.localStorage.clear()
      this.$router.push('auth/login')
    }
  }
}
</script>
