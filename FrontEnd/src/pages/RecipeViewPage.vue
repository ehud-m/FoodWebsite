<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.name }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Amount: {{ recipe.numberOfMeals }} dishes</div>
              <div>Ready in {{ recipe.timeToMake }} minutes</div>
              <div>Likes: {{ recipe.popularity }} likes</div>
            </div>
            <div>
              <h1>Ingredients:</h1>
              <p v-html="recipe.ingridients"></p>
            </div>
          </div>
          <div class="wrapped">
            <h1>Instructions:</h1>
            <ol>
              <p v-html="recipe.instructions"></p>
            </ol>
          </div>
        </div>
      </div>
      <!-- <pre>
      {{ $route.params }}
      {{ recipe }}
    </pre
      > -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null,
      ingridientsAfterManipulation: null,
      instructionsAfterManipulation: null
    };
  },
  async created() {
    try {
      let response;
      // response = this.$route.params.response;

      try {
        response = await this.axios.get(
          // "https://test-for-3-2.herokuapp.com/recipes/info",
          //  "/recipes/info",
           "/recipes/recipe",
          {
            params: { recipeId: this.$route.params.recipeId }
          }
        );

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
            name,
            timeToMake,
            popularity,
            whoCanEatVegOrNot,
            glutenFree,
            wasWatchedByUserBefore,
            wasSavedByUser,
            image,
            ingridients,
            instructions,
            numberOfMeals
      } = response.data;


      let _recipe = {
        name,
        timeToMake,
        popularity,
        whoCanEatVegOrNot,
        glutenFree,
        wasWatchedByUserBefore,
        wasSavedByUser,
        image,
        ingridients,
        instructions,
        numberOfMeals
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .recipe-header{

} */
</style>
