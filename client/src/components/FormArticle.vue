<template>
  <div id="#articleform" class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <form @submit.prevent="postArticle(formArticle)">
          <div class="form-group">
            <label class="control-label" for="focusedInput">Title</label>
            <input class="form-control" type="text" v-model="formArticle.title" placeholder="Title">
          </div>
          <div class="form-group">
            <label class="control-label" for="focusedInput">Category</label>
            <input class="form-control" type="text" v-model="formArticle.category" placeholder="Category">
          </div>
          <div class="form-group">
            <label class="control-label" for="focusedInput">Content</label>
            <textarea class="form-control" rows="3" v-model="formArticle.content" placeholder="Content of blog"></textarea>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
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
  methods: {
    ...mapActions([
      'postArticle'
    ])
  }
}
</script>

<style lang="css">
#articleform {
  text-align: center;
  margin-top: 70px;
}
</style>
