<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-4  col-xs-12 q-pa-md" v-for="(hijab, i) in data" :key="i">
          <q-card flat class="bg-pink-4 text-black">
            <q-card-section>
              <div class="text-h8">
              {{ hijab.Jenis }}
              </div>
            </q-card-section>
            <q-card-section>
              <q-img spinner-color="white" style="height: 90%; max-width: 90%" :src="baseUrl + hijab.gambar" />
            </q-card-section>
            <q-card-section>
              <div>
                Harga: Rp. {{ hijab.harga }}
              </div>
            </q-card-section>
            <q-card-section>
              <div>
              </div>
              <q-btn color="teal"  icon="shopping_cart" label="Tambahkan ke keranjang" to="/pembeli/keranjang"/>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DataPembeli',
  data () {
    return {
      data: null,
      baseUrl: 'http://localhost:5050/gambar/'
    }
  },
  methods: {
    getDataJilbab () {
      this.$axios.get('/hijab/datajilbab')
        .then((res) => {
          this.data = res.data.data
        })
    }
  },
  mounted () {
    this.getDataJilbab()
  }
}
</script>

<style scoped>

</style>
