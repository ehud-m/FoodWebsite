<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <table>
      <tr>
        <td>
    <RecipePreviewList ref="randomList" vertical="true" title="Random Recipes" class="RandomRecipes center" />
        </td>
        <td>
    <LoginPage v-if="!$root.store.username"></LoginPage>
    <RecipePreviewList v-else
      class="RandomRecipes center"
      vertical="true"
      title="Last Viewed Recipes"
      type="lastWatched"
    ></RecipePreviewList>
        </td>
      </tr>
      <tr>
        <td>
          <b-button @click="randomizeRecipes">More Recipes!</b-button>
        </td>
      </tr>
    </table>
    <!-- <div
      style="position: absolute;top: 70%;left: 50%;transform: translate(-50%, -50%);"
    >
      Centeredasdasdad
    </div>-->
  </div>
</template>

<script>
import LoginPage from "./LoginPage.vue"
import RecipePreviewList from "../components/RecipePreviewList";
export default {
  components: {
    RecipePreviewList,
    LoginPage
  },
  methods: {
    randomizeRecipes() {
      console.log("HERE")
      this.$refs.randomList.prev=undefined
      this.$refs.randomList.updateRecipes()
      console.log(this.$refs.randomList)
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
}
b-b-button{
  padding-top:10px
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
