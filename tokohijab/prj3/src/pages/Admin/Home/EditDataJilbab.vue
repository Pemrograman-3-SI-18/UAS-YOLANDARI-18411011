<template>
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-pink-3 q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Jilbab</span>
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
           val => val !== null && val !== '' || 'Kode Buku Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>
          <q-input
            label="Jenis"
            lazy-rules
            color="teal"
            v-model="form.Jenis"
            :rules="[
           val => val !== null && val !== '' || 'Judul Buku Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>
          <q-input
            label="Merk"
            lazy-rules
            color="teal"
            v-model="form.merk"
            :rules="[
           val => val !== null && val !== '' || 'Penerbit Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>
          <q-input
            label="Ukuran"
            lazy-rules
            color="teal"
            v-model="form.ukuran"
            :rules="[
           val => val !== null && val !== '' || 'Pengarang Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Warna"
            lazy-rules
            color="teal"
            v-model="form.warna"
            :rules="[
           val => val !== null && val !== '' || 'Tahun Terbit Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="calendar_today"/>
            </template>
          </q-input>

          <q-input
            label="Harga (pcs)"
            lazy-rules
            color="teal"
            v-model="form.harga"
            :rules="[
           val => val !== null && val !== '' || 'Tahun Terbit Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>
          <q-img :src="baseUrl + this.gambar" style="width: 250px; height: 250px"/>
          <q-toggle v-model="gantiGambar" label="Ganti Gambar ?" />
          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
            v-if="gantiGambar == true"
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
              label="Ubah Data Jilbab"
              style="height: 50px"
              type="submite"
              color="pink"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'EditDataJilbab',
  data () {
    return {
      gantiGambar: false,
      baseUrl: 'http://localhost:5050/gambar/',
      form: {
        judulBuku: null,
        kodeBuku: null,
        penerbit: null,
        pengarang: null,
        tahunTerbit: null,
        hargaBuku: null
      },
      id: null,
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
      this.$axios.put('/hijab/update/' + this.id, formData)
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
    },
    getDataJilbabById () {
      this.$axios.get('/hijab/datajilbab/' + this.$route.params.id)
        .then((res) => {
          console.log(res)
          this.data = res.data.data
          this.form.kodejilbab = this.data.kodejilbab
          this.form.Jenis = this.data.Jenis
          this.form.merk = this.data.merk
          this.form.ukuran = this.data.ukuran
          this.form.warna = this.data.warna
          this.form.harga = this.data.harga
          this.gambar = this.data.gambar
          this.id = this.data._id
        })
    }
  },
  mounted () {
    this.getDataJilbabById()
  }
}
</script>

<style scoped>

</style>
