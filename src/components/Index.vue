<template>
  <!-- Always shows a header, even in smaller screens. -->
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">Articles Management</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation. We hide it in small screens. -->
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <router-link class="mdl-navigation__link" :to="{name:'home'}"><i class="material-icons">home</i>Home
          </router-link>
          <router-link class="mdl-navigation__link" :to="{name:'about'}"><i class="material-icons">help</i>About
          </router-link>
          <router-link class="mdl-navigation__link" :to="{name:'login'}"><i class="material-icons">lock</i>Login
          </router-link>
        </nav>
      </div>
    </header>
    <div class="mdl-layout__drawer mdl-layout--small-screen-only">
      <span class="mdl-layout-title">Title</span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" :to="{name:'home'}"><i class="material-icons">home</i>Home
        </router-link>
        <router-link class="mdl-navigation__link" :to="{name:'about'}"><i class="material-icons">help</i>About
        </router-link>
        <router-link class="mdl-navigation__link" :to="{name:'login'}"><i class="material-icons">lock</i>Login
        </router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        msg: ''
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
