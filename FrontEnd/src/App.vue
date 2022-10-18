<template>
  <div id="app">
    <b-navbar fixed="top" id="nav" toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'main' }">Vue Recipes</b-nav-item>
        <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
        <b-nav-item :to="{ name: 'about' }">About</b-nav-item>
      </b-navbar-nav>
        <b-navbar-nav v-if="!$root.store.username">
          <b-nav-text>Guest</b-nav-text>
          <b-nav-item :class=ml-auto :to="{ name: 'register' }">Register</b-nav-item>
          <b-nav-item :class=ml-auto :to="{ name: 'login' }">Login</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav v-else>
          <b-nav-item v-b-modal.add-recipe-modal>Add Recipe</b-nav-item>
          <b-modal id="add-recipe-modal" title="Add Recipe" ok-only size="lg">
            <AddRecipePage/>
          </b-modal>
          <b-nav-item-dropdown text="Personal">
            <b-dropdown-item :to="{ name: 'userRecipes', params: { type: createdString } }">My Recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'userRecipes', params: { type: favoriteString } }">Favorite Recipes</b-dropdown-item>
            <b-dropdown-item :to="{ name: 'familyRecipes' }">Family Recipes</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-text>{{ $root.store.username }} </b-nav-text>
          <b-nav-item @click="Logout">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view class="body" />
  </div>
</template>

<script>
import AddRecipePage from './pages/AddRecipePage.vue';
export default {
  components: { AddRecipePage },
  name: "App",
  data() {
    return {
      createdString: "created",
      favoriteString: "favorite"
    };
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.b-nav-item-exact-active {
  color: #42b983;
}

.body {
  padding-top: 100px;
}



h1{
  font-size: 48px;
  text-shadow: -1px -1px #9df, 1px 1px #49d, -3px 0 4px #000;
  font-family:"Segoe print", Arial, Helvetica, sans-serif;
  color:#6bf;
  padding:24px 32px 32px 32px;
  font-weight:lighter;
  -moz-box-shadow: 2px 2px 6px #888;  
  -webkit-box-shadow: 2px 2px 6px #888;  
  box-shadow:2px 2px 6px #888;  
  text-align:center;
  // display:inline;
  line-height:150px;
  // background-image:url(images/background-h1-wide.jpg);
}

</style>

