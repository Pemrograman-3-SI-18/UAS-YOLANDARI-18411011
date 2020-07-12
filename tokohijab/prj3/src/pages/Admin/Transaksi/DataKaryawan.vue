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
          <q-btn color="pink" disable="loading" label="Tambah Data Karyawan"/>
          <!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
          <q-space />
          <q-input borderless dense debounce="300" color="pink" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
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
          label: 'Kode karyawan',
          align: 'left',
          field: row => row.kodekaryawan,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'jabatan', align: 'center', label: 'Jabatan', field: 'Jabatan' },
        { name: 'namalengkap', align: 'center', label: 'Nama Lengkap', field: 'NamaLengkap', sortable: true },
        { name: 'jeniskelamin', align: 'center', label: 'Jenis kelamin', field: 'Jeniskelamin', sortable: true },
        { name: 'alamat', align: 'center', label: 'Alamat', field: 'Alamat', sortable: true },
        { name: 'telpon', align: 'center', label: 'Telpon', field: 'Telpon' },
        { name: 'email', align: 'center', label: 'Email', field: 'Email' }

      ],
      data: [
        {
          kodekaryawan: 'HJBST01',
          Jabatan: 'Admin',
          NamaLengkap: 'Yolandari',
          Jeniskelamin: 'Perempuan',
          Alamat: 'JL.M Ratam Talang padang, Tanggamus',
          Telpon: '082282210420',
          Email: 'yollandari23@gmail.com'
        },
        {
          kodekaryawan: 'HJBST02',
          Jabatan: 'Staff gudang',
          NamaLengkap: 'Slamet Ade',
          Jeniskelamin: 'laki-laki',
          Alamat: 'JL.permata sari gunung kidul jawa',
          Telpon: '082279788181',
          Email: 'slametaderiadi@gmail.com'
        },
        {
          kodekaryawan: 'HJBST03',
          Jabatan: 'Pramuniaga',
          NamaLengkap: 'Nur Aisyah',
          Jeniskelamin: 'Perempuan',
          Alamat: 'JL.ahmad yani sukaraja pringsewu',
          Telpon: '082112127373',
          Email: 'nuraisyah18@gmail.com'
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
