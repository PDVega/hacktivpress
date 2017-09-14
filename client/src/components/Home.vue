<template>
  <div class="">
    <Navbar />
    <div class="container">
      <div class="row">
        <FormArticle />
      </div>
      <div class="row">
        <ArticleList />
      </div>
    </div>
  </div>
</template>

<script>
import FormArticle from '@/components/FormArticle'
import ArticleList from '@/components/ArticleList'
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar,
    FormArticle,
    ArticleList
  }
}
</script>

<style lang="css">
</style>
