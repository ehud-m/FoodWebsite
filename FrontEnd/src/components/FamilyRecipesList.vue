<template>
  <b-container>
    <h3>
      My Family Recipes:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <FamilyRecipe class="FamilyRecipe" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FamilyRecipe from "./FamilyRecipe.vue";
export default {
  name: "FamilyRecipeList",
  components: {
    FamilyRecipe
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateFamilyRecipes();
  },
  methods: {
    async updateFamilyRecipes() {
      try {
        const response = await this.axios.get(
           "/users/family",
          // "https://test-for-3-2.herokuapp.com/recipes/random"
        );

        // console.log(response);
        const recipes = response.data;
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
</style>
