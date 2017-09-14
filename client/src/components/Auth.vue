<template>
  <div id="auth">
  <div class="container">
    <div class="row">
      <div class="col-md-4 col-md-offset-4">
        <h1><strong>HACKTIVPRESS</strong></h1>
        <br>
        <div class="list-group">
          <input type="text" placeholder="Username" class="form-control" v-model="signin.username">
          <br>
          <input type="password" placeholder="Password" class="form-control" v-model="signin.password">
          <br>
          <button class="btn btn-primary" type="button" name="button" @click="doLogin"> Login </button>
          <button class="btn btn-primary text-right" type="button" name="button" data-toggle="modal" data-target="#myRegister"> Register</button>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- Modal Register -->
      <div class="modal fade" id="myRegister" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-sm" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Register</h4>
            </div>
            <div class="modal-body">
              <input type="text" class="form-control" v-model="signup.username" placeholder="Username"><br>
              <input type="password" class="form-control" v-model="signup.password" placeholder="Password"><br>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary" @click="doRegister" data-dismiss="modal">Register</button>
            </div>
          </div>
        </div>
      </div>
      <!--  Modal Register-->
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      signin: {
        username: '',
        password: ''
      },
      signup: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    doLogin () {
      var self = this
      this.$http.post('/login', self.signin)
      .then(get => {
        if (get.data !== 'Please input username and password!' && get.data !== 'Wrong Password' && get.data !== 'Username not found') {
          console.log(get.data)
          localStorage.clear()
          localStorage.setItem('token', get.data.token)
          localStorage.setItem('id', get.data.id)
          localStorage.setItem('username', get.data.username)
          this.$router.push('/home')
        } else {
          this.$router.push('/')
        }
      })
    },
    doLogout () {
      localStorage.clear()
      this.$router.push('/')
    },
    doRegister () {
      var self = this
      this.$http.post('/register', self.signup)
      .then(get => this.$router.push('/'))
    }
  }
}
</script>

<style>
#auth {
  text-align: center;
  margin-top: 60px;
}
</style>
