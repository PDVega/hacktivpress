<template>
  <div>
    <ArticleDetail v-for="article in articles" :article="article" :key="article.id"></ArticleDetail>
  </div>
</template>

<script>
import ArticleDetail from '@/components/ArticleDetail'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    ArticleDetail
  },
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'getAllArticles'
    ])
  },
  created () {
    this.getAllArticles()
  }
}
</script>

<style lang="css">
</style>
