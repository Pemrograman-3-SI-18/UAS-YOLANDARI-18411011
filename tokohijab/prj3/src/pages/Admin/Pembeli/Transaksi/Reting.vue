<template>
  <div>
    <q-spce />
    <span class="text-h5 text-weight-light q-pa-md">
     <span class="text-black">Silahkan Berikan Penilaian</span>
   </span>
    <q-space/>
    <q-rating
      v-model="model"
      max="5"
      size="2cm"
      corol="pink-4"
      icon="star_border"
      icon-selected="star"
      icon-half="star_half"
      no-dimming
    />
    <q-space/>
    <q-btn color="teal" label="Berikan Penilaian"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: 2.3
    }
  }
}
</script>

<style scoped>

</style>
