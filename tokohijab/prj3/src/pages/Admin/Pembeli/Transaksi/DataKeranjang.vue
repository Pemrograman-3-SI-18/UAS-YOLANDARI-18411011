<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-md-4 col-xs-12 q-pa-md">
          <q-card flat class="bg-pink-4 text-black">
            <q-card-section>
              <div class="text-h8">
                jenis jenis jilbab : Pasmina Crinckle Arabian
              </div>
            </q-card-section>
            <q-card-section>
              <q-img spinner-color="white" style="height: 70%; max-width: 70%" placeholder-src="crinckle.jpg" src="crinckle.jpg"/>
            </q-card-section>
            <q-card-section>
              <div>
                Harga: Rp.45.000
              </div>
            </q-card-section>
            <q-card-section>
              <div>
                <q-btn rounded flat icon="delete" label="Hapus" unelevated no-caps color="negative"></q-btn>
                <q-btn unelevated color="teal" icon="check_circle_outline" no-caps label="Checkout Barang "></q-btn>
              </div>
              <!--            <q-btn unelevated color="teal" icon="add_shopping_card" no-caps label="Tambah Ke Keranjang"></q-btn>-->
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'DataKeranjang'
}
</script>

<style scoped>

</style>
