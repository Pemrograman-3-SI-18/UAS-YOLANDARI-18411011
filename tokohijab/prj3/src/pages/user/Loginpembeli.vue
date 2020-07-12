<template>
  <q-layout class="bg-pink-4 " view="hHh Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-5 offset-md-4 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <div class="col-md-9 col-xs-6">
                  <div class="row q-pt-md q-pb-md  bg-white">
                    <div class="col-md-9 offset-3 col-xs-12">
                      <q-img spinner-color="pink-2" placeholder-src="statics/bb.jpg." src="statics/bb.jpg"></q-img>
                    </div>
                  </div>
                </div>
                <div class="col-md-12 col-xs-12 q-pt-md">
                  <div class="q-pa-md">
                    <div class="text-light-blue-10 text-h4">Login</div>
                    <q-card-section class="text-blue-grey-14">
                    </q-card-section>

                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="username"
                        label="Username"
                        hint="Username"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <q-input
                        filled
                        type="Password"
                        v-model="password"
                        label="Password "
                        hint="Password"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data Tidak Boleh Kosong']"
                      />

                      <div>
                        <q-btn label="Login"  type="submit" color="primary"/>
                        <q-btn label="Registrasi" to="/auth/regispembeli" color="primary" flat class="q-ml-sm" />
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
  name: 'Login',
  data () {
    return {
      username: null,
      password: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
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
