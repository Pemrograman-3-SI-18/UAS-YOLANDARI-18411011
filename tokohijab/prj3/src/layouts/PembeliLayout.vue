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
                  <div class="text-weight-bold">{{ dataUser.userName }}</div>
                  <div>{{ dataUser.namaLengkap }}</div>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-lg"></q-separator>

              <div class="column items-center">
                <q-btn flat round dense>
                  <q-avatar size="72px">
                    <img spinner-color="white" placeholder-src="jilbab.jpg" src="jilbab.jpg">
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
      content-class="bg-pink-4 text-grey-10"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item style="height: 50px;" class="bg-pink-4 text-bold">
            <q-item-section>
              Hijab Shop Aplication
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
          <q-item class="justify-center text-center q-mb-md q-pt-md">
<!--            <div>-->
<!--              <q-avatar size="150px" class="q-mb-md">-->
<!--                <img spinner-color="white" placeholder-src="ricis.jpg" src="ricis.jpg">-->
<!--              </q-avatar>-->
<!--              <div class="text-weight-bold">PELANGGAN</div>-->
<!--              <div>Ria Ricis</div>-->
<!--            </div>-->
          </q-item>
          <q-item-label
            header
            class="text-black"
          >

            Data Jilbab
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/pembeli">
            <q-item-section avatar>
              <q-icon name="table_chart" />
            </q-item-section>
            <q-item-section>
              Data Jilbab
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="Transaksi">
            <q-item-section>
              Transaksi
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple to="/pembeli/transaksi">
            <q-item-section avatar>
              <q-icon name="monetization_on"/>
            </q-item-section>
            <q-item-section>
              Data Transaksi
            </q-item-section>
          </q-item>

          <q-item-label
            header
            class="text-black"
          >
            Keranjang
          </q-item-label>
          <q-item clickable active-class="active" exact v-ripple to="/pembeli/keranjang">
            <q-item-section avatar>
              <q-icon name="shopping_cart" />
            </q-item-section>
            <q-item-section>
              Data Keranjang
            </q-item-section>
          </q-item>

          <q-item clickable active-class="active" exact v-ripple to="Reting">
            <q-item-section>
              Reting
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" exact v-ripple to="/pembeli/reting">
            <q-item-section avatar>
              <q-icon name="stars"/>
            </q-item-section>
            <q-item-section>
              Reting
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
  name: 'PembeliLayout',

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
