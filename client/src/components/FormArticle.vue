<template>
  <form @submit.prevent="submitArticle(formArticle)">
    <div class="form-group">
      <label class="control-label" for="focusedInput">Title</label>
      <input class="form-control" type="text" v-model="formArticle.title">
    </div>
    <div class="form-group">
      <label class="control-label" for="focusedInput">Content</label>
      <input class="form-control" type="text" v-model="formArticle.content">
    </div>
    <div class="form-group">
      <label class="control-label" for="focusedInput">Image</label>
      <input class="form-control" type="text" v-model="formArticle.image">
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
