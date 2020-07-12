<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="pink" label="Tambahkan Data Jilbab" to="/inputdatajilbab" />
<!--                    <q-btn class="q-ml-sm" color="primary" label="Remove row" @click="removeRow" />-->
          <q-space />
          <q-input borderless dense debounce="300" color="pink" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="kodejilbab" :props="props">
              {{ props.row.kodejilbab }}
            </q-td>
            <q-td key="Jenis" :props="props">{{ props.row.Jenis }}</q-td>
            <q-td key="merk" :props="props">{{ props.row.merk }}</q-td>
            <q-td key="ukuran" :props="props">{{ props.row.ukuran }}</q-td>
            <q-td key="warna" :props="props">{{ props.row.warna }}</q-td>
            <q-td key="harga" :props="props">{{ props.row.harga }}</q-td>
            <q-td key="gambar" :props="props">
              <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn color="teal"
                       dense size="sm"
                       class="q-px-xs"
                       icon="edit"
                       @click="edit(props.row.kodejilbab)"
                       label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusDataJilbab(props.row._id)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: 'http://localhost:5050/gambar/',
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'kodejilbab',
          required: true,
          label: 'Kode Jilbab',
          align: 'left',
          field: row => row.kodejilbab,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'Jenis', align: 'center', label: 'Jenis', field: 'Jenis', sortable: true },
        { name: 'merk', align: 'center', label: 'Merk', field: 'Merk', sortable: true },
        { name: 'ukuran', align: 'center', label: 'Ukuran', field: 'Ukuran' },
        { name: 'warna', align: 'center', label: 'Warna', field: 'Warna' },
        { name: 'harga', align: 'center', label: 'Harga(pcs)', field: 'harga' },
        { name: 'gambar', label: 'Gambar', align: 'center', field: 'gambar' },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],
      data: []
    }
  },

  methods: {
    // emulate fetching data from server
    getDataJilbab () {
      this.$axios.get('/hijab/datajilbab')
        .then((res) => {
          this.data = res.data.data
          console.log(res)
        })
    },
    hapusDataJilbab (id) {
      this.$axios.delete('/hijab/delete/' + id)
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: 'Berhasil Menghapus Data'
          })
          this.getDataJilbab()
        })
    },
    edit (kodejilbab) {
      this.$router.push('/editdatajilbab/' + kodejilbab)
    }
  },
  mounted () {
    this.getDataJilbab()
  }
}
</script>
