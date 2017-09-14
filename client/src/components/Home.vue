<template>
  <div class="">
    <Navbar />
    <div class="container">
      <FormArticle />
    </div>
  </div>
</template>

<script>
import FormArticle from '@/components/FormArticle'
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar,
    FormArticle
  }
}
</script>

<style lang="css">
</style>
