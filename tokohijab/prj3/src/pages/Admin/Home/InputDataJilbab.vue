<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-white">
    <q-card flat class="bg-pink-3 q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-black">Tambah Data Jilbab</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >

          <q-input
            label="Kode Jilbab"
            lazy-rules
            color="teal"
            v-model="form.kodejilbab"
            :rules="[
           val => val !== null && val !== '' || 'Data Harus di isi'
           ]">
            <template v-slot:append>
              <q-icon name="select_all"/>
            </template>
          </q-input>

          <q-input
            label="Jenis"
            lazy-rules
            color="teal"
            v-model="form.Jenis"
            :rules="[
           val => val !== null && val !== '' || 'Data Harus di isi'
           ]">
            <template v-slot:append>
              <q-icon name="merge_type"/>
            </template>
          </q-input>

          <q-input
            label="Merk"
            lazy-rules
            color="teal"
            v-model="form.merk"
            :rules="[
           val => val !== null && val !== '' || 'Data Harus di isi'
           ]">
            <template v-slot:append>
              <q-icon name="branding_watermark"/>
            </template>
          </q-input>

          <q-input
            label="Ukuran"
            lazy-rules
            color="teal"
            v-model="form.ukuran"
            :rules="[
           val => val !== null && val !== '' || 'Data Harus di isi'
           ]">
            <template v-slot:append>
              <q-icon name="format_size"/>
            </template>
          </q-input>

          <q-input
            label="Warna"
            lazy-rules
            color="teal"
            v-model="form.warna"
            :rules="[
           val => val !== null && val !== '' || 'Data Harus di isi'
           ]">
            <template v-slot:append>
              <q-icon name="invert_colors"/>
            </template>
          </q-input>

          <q-input
            label="Harga (pcs)"
            lazy-rules
            color="teal"
            v-model="form.harga"
            :rules="[
           val => val !== null && val !== '' || 'Data Harus di isi'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>

          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
            @input="selectFile()"
            color="teal"
            :rules="[
           val => val !== null && val !== '' || 'Gambar Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_photo_alternate"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              type="submite"
              label="Tambahkan"
              style="height: 40px"
              color="pink"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        kodejilbab: null,
        Jenis: null,
        merk: null,
        ukuran: null,
        warna: null,
        harga: null
      },
      gambar: null
    }
  },
  methods: {
    selectFile () {
      this.gambar = this.$refs.file.$refs.input.files[0]
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('gambar', this.gambar)
      formData.append('Jenis', this.form.Jenis)
      formData.append('kodejilbab', this.form.kodejilbab)
      formData.append('merk', this.form.merk)
      formData.append('ukuran', this.form.ukuran)
      formData.append('warna', this.form.warna)
      formData.append('harga', this.form.harga)
      this.$axios.post('/hijab/input', formData)
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            this.$router.push('/')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
