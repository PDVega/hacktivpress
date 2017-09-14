<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title"><strong>{{ article.title }}</strong></h3>
          </div>
          <div class="panel-body">
            <p>{{ article.content }}</p>
            <button type="button" class="btn btn-primary btn-sm" @click="putArticle(article._id)" data-target="#myUpdate">Edit</button>
            <button type="button" class="btn btn-info btn-sm" @click="deleteArticle(article._id)">Delete</button>
          </div>
          <div class="panel-footer">
            <p><span class="glyphicon glyphicon-paperclip"></span> {{ article.category }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Update Article -->
    <div class="row">
      <div class="modal fade" id="myUpdate" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Update Article</h4>
            </div>
            <div class="modal-body">
              <input type="text" class="form-control" v-model="formArticle.title" placeholder="Title"><br>
              <input type="text" class="form-control" v-model="formArticle.content" placeholder="Content of blog"><br>
              <input type="text" class="form-control" v-model="formArticle.category" placeholder="Content of blog"><br>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" @click="doUpdate" data-dismiss="modal">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formArticle: {
        title: '',
        content: '',
        category: '',
        author: `${localStorage.getItem('id')}`
      }
    }
  },
  props: ['article'],
  methods: {
    ...mapActions([
      'deleteArticle',
      'putArticle'
    ])
  }
}
</script>

<style lang="css">
</style>
