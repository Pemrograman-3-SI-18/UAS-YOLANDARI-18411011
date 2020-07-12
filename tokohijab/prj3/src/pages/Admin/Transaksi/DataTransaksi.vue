<template>
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
        <span class="text-h5 text-weight-light q-pa-md">
          <span class="text-pink-14"> Data Transaksi </span>
        </span>
        <q-space/>
        <q-input borderless dense debounce="300" color="primary" v-model="filter">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

    </q-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodeTransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namaPembeli', align: 'center', label: 'Nama Pembeli', field: 'namaPembeli', sortable: true },
        { name: 'jenis', align: 'center', label: 'Jenis', field: 'jenis', sortable: true },
        { name: 'merk', lign: 'center', label: 'Merk', field: 'merk' },
        { name: 'ukuran', lign: 'center', label: 'Ukuran', field: 'ukuran' },
        { name: 'harga', lign: 'center', label: 'Harga', field: 'harga' },
        { name: 'jumlahbeli', lign: 'center', label: 'Jumlah Beli', field: 'jumlahBeli' },
        { name: 'total', lign: 'center', label: 'Total', field: 'total' }

      ],
      data: [
        {
          kodeTransaksi: 'Hjb001',
          namaPembeli: 'Yollanda',
          jenis: 'Pasmina',
          merk: 'Diamond',
          ukuran: '110x90cm',
          harga: 'Rp. 45.000',
          jumlahBeli: '5',
          total: 'Rp. 225.000'
        },
        {
          kodeTransaksi: 'Hjb005',
          namaPembeli: 'Vina lina',
          jenis: 'Ceruti',
          merk: 'Elzatta',
          ukuran: '110x100cm',
          harga: 'Rp. 99.000',
          jumlahBeli: '3',
          total: 'Rp. 297.000'
        },
        {
          kodeTransaksi: 'Hjb002',
          namaPembeli: 'Rinda',
          jenis: 'Khimar Pet Antem',
          merk: 'Amnia',
          ukuran: '135x135cm',
          harga: 'Rp.85.000',
          jumlahBeli: '2',
          total: 'Rp. 170.000'
        },
        {
          kodeTransaksi: 'Hjb004',
          namaPembeli: 'Mimin',
          jenis: 'Bergo',
          merk: 'Umama',
          ukuran: '110x110cm',
          harga: 'Rp. 35.000',
          jumlahBeli: '10',
          total: 'Rp. 350.000'
        },
        {
          kodeTransaksi: 'Hjb003',
          namaPembeli: 'Vanesha',
          jenis: 'Segi Empat',
          merk: 'Bella Square',
          ukuran: '110x110cm',
          harga: 'Rp. 28.000',
          jumlahBeli: '7',
          total: 'Rp. 196.000'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
