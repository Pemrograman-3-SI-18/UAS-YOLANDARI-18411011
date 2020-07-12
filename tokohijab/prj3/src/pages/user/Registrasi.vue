<template>
  <q-layout class="bg-pink-4" view="hHh Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-5 offset-md-4 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <!--                <div class="col-md-10 col-xs-6">-->
                <!--                  <div class="row q-pt-md q-pb-md  bg-teal-5">-->
                <!--                    <div class="col-md-9 offset-3 col-xs-9">-->
                <!--                      <q-img spinner-color="pink-2" placeholder-src="statics/jilbab.jpg." src="statics/jilbab.jpg"></q-img>-->
                <!--                    </div>-->
                <!--                  </div>-->
                <!--                </div>-->
                <q-card-section class="text-blue-grey-14">
                  <div class="text-h4">Registrasi</div>
                </q-card-section>
                <div class="col-md-12 col-xs-12 q-pt-md">
                  <div class="q-pa-md">

                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="form.username"
                        label="Username"
                        hint="Username"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        v-model="form.namaLengkap"
                        label="Nama Lengkap"
                        hint="Nama Lengkap"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        v-model="form.email"
                        label="Email"
                        hint="Email"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        type="Telpon"
                        v-model="form.telpon"
                        label="Telpon"
                        hint="Telpon"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        type="Password"
                        v-model="form.password"
                        label="Password"
                        hint="Password"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <div>
                        <q-btn label="Registrasi" type="submit" color="primary"/>
                        <q-btn label="Login" to="/auth/login" color="primary" flat class="q-ml-sm" />
                      </div>
                    </q-form>

                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Registrasi',
  data () {
    return {
      form: {
        username: null,
        namaLengkap: null,
        email: null,
        password: null,
        telpon: null
      },
      accept: false
    }
  },

  methods: {
    onSubmit () {
      this.$axios.post('/user/registrasi', {
        userName: this.form.username,
        namaLengkap: this.form.namaLengkap,
        email: this.form.email,
        noHp: this.form.telpon,
        role: '2',
        password: this.form.password
      })
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
            this.$router.push('login')
          }
        })
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
