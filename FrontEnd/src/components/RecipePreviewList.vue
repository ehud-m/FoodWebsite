<template>
<b-container v-if="vertical=='true'">
  <h3 class="listTitle">
    {{ title }}:
    <slot></slot>
  </h3>
  <b-row v-for="r in recipes" :key="r.id">
      <RecipePreview class="recipePreview" :recipe="r" />
  </b-row>
</b-container>
<b-container v-else>
  <h3>
    {{ title }}:
    <slot></slot>
  </h3>
  <b-row>
    <b-col v-for="r in recipes" :key="r.id">
      <RecipePreview class="recipePreview" :recipe="r" />
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    prev:{
      type: Object,
      required: false
    },
    type:{
      type: String,
      required: false
    },
    vertical:{
      type: String,
      required: false,
      default: "false"
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },

  methods: {
    async updateRecipes() {
      try {
        if (this.prev == undefined && this.type == undefined){
          console.log(this.$root.store.server_domain)
          this.prev = await this.axios.get(
             "/recipes/getRandomRecipes",
            // "https://test-for-3-2.herokuapp.com/recipes/random"
          );

        }
        else if (this.type === "lastWatched")
        {
          this.prev = await this.axios.get(
             "/recipes/getUserRecipes",
            {
              params: {
                type: "lastWatched"
              }
            }
            // "https://test-for-3-2.herokuapp.com/recipes/random"
          );
        }
        // console.log(response);
        const recipes = this.prev.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
.listTitle{
  padding-left: 100px;
}
template{
  display: block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
</style>
