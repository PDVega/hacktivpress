<template>
  <div class="col-md-8 col-md-offset-2">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title"><strong>{{ article.title }}</strong></h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['article']
}
</script>

<style lang="css">
</style>
