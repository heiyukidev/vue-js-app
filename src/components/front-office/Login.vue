<template>
<div>
  <div id="Login" class="mdl-layout mdl-layout--fixed-header mdl-color--white-100">
    <main class="mdl-layout__content main_content">
      <h3><strong>Login to Admin</strong></h3>
      <div class="login-form-div mdl-grid mdl-shadow--2dp">
        <div class="mdl-cell mdl-cell--12-col cell_con">
          <i class="material-icons">person</i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                   id="sample2">
            <label class="mdl-textfield__label" for="sample2">Enter valid Email</label>
            <span class="mdl-textfield__error">Invalid Email...!</span>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--12-col cell_con">
          <i class="material-icons">lock</i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" id="pwd">
            <label class="mdl-textfield__label" for="pwd">Enter Password</label>
          </div>
        </div>
        <div class="mdl-cell cell_con">
          <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-2">
            <input type="checkbox" id="checkbox-2" class="mdl-checkbox__input">
            <span class="mdl-checkbox__label">Remember Me</span>
          </label>
        </div>
        <div class="mdl-cell mdl-cell--12-col  login-btn-con">
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--primary btn">
            Login
          </button>
        </div>
        <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet links">
          <a class="mdl-button--primary">Register now !</a>
        </div>
        <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet links">
          <a class="mdl-button--primary">Forgot password ?</a>
        </div>
      </div>
    </main>
  </div>
</div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        msg: ''
      }
    }
//    mounted () {
//      let s = document.createElement('script')
//      s.type = 'text/javascript'
//      s.src = './static/ma.min.js'
//      this.$el.appendChild(s)
//    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * div, h5, h3, button {
    font-family: cursive !important;
  }

  body {
    background: #fff;
  }

  .main_content h3 {
    text-align: center;
  }

  .login-form-div {
    width: 500px;
    background: #fff;
  }

  .form-column {
    padding: 20px 35px !important;
  }

  .cell_con {
    background: #fff;
    padding-left: 20px;
  }

  .cell_con div {
    width: 87%;
  }

  .links {
    margin: auto;
    text-align: center;
  }

  .btn {
    margin: auto;
    width: 100%;
  }
</style>



