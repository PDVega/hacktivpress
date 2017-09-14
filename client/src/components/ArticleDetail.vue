<template>
  <div class="col-md-8 col-md-offset-2">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title"><strong>{{ article.title }}</strong></h3>
      </div>
      <div class="panel-body">
        <p>{{ article.content }}</p>
        <button type="button" class="btn btn-info btn-sm" @click="deleteArticle(article._id)">Delete</button>
      </div>
      <div class="panel-footer">
        <p><span class="glyphicon glyphicon-paperclip"></span> {{ article.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['article'],
  methods: {
    ...mapActions([
      'deleteArticle'
    ])
  }
}
</script>

<style lang="css">
</style>
