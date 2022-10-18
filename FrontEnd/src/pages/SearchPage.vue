<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <b-form v-if="notSubmitted" @submit.prevent="onSubmit" @reset="onReset" id="searchForm" label="serach recipe">
      <label for="recipe_to_search">recipe to search:</label>
      <b-form-input v-model="form.recipeName" placeholder="Enter recipe name"></b-form-input>
      <br>
      <label for="numberOfRecipes">Choose how many recipes:</label>
      <b-form-select v-model="form.numberOfRecipes" :options="numberOfRecipes"></b-form-select>
      <br>
      <label for="cuisines">Choose cuisine:</label>
      <b-form-select v-model="form.cuisine" :options="cuisines"></b-form-select>
      <br>     
      <label for="diet">Choose diet:</label>
      <b-form-select v-model="form.diets" :options="diets"></b-form-select>
      <br>
      <label for="intolerances">Choose intolerances:</label>
      <b-form-select v-model="form.intolerances" :options="intolerances"></b-form-select>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <div v-if="submitted">
      <b-form v-if="!didntFoundRecipe" @submit.prevent="onSortSubmit">
        <b-form-select v-model="form.sortSearchResultBy" :options="sortSearchResultBy"></b-form-select>
        <label>Choose Order</label>
        <b-form-select v-model="form.orderform" :options="order"></b-form-select>
        <b-button type="submit" variant="primary">Submit</b-button>    
      </b-form> 
      <div v-if="didntFoundRecipe">
          <h1>Sorry, we didnt found what you are looking for</h1>
      </div>
      <RecipePreviewList  v-else ref="searchResults" :prev="preview" title="Search results" class="recipePreviewList"/>
      <b-button @click="searchAgain">Search again</b-button>
    </div>

  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList.vue";
// import store from "../store"
//// cuisineVal:

export default {
    name: "cuisines",
    mounted(){
      if (this.$root.store.last_search != undefined){
         if (this.$root.store.last_search.data.length == 0){
              this.didntFoundRecipe = true
            }
          else{
              
            this.preview = this.$root.store.last_search
            
          }
          this.notSubmitted = false
          this.submitted = true
        }
    },
    data() {
        return {
            form: {
                recipeName: "",
                numberOfRecipes: "",
                cuisine: "",
                diets: "",
                intolerances: ""
            },
            didntFoundRecipe: false,
            order: ["Ascending", "Descending"],
            sortSearchResultBy: ["Time to make","Popularity"],
            preview : Object,
            notSubmitted: true,
            submitted: false,
            selected: "",
            numberOfRecipes: [5, 10, 15],
            cuisines: ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"],
            diets: ["Gluten Free", , "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"],
            intolerances: ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"]
        };
    },
    methods: {
        async onSubmit(event) {
            var par = JSON.parse(JSON.stringify(this.form));
            // alert(response.data);
            const response = await this.axios.get( "/recipes/searchRecipe", {
                params: {
                    recipeSearchName: par["recipeName"],
                    numberOfRecipes: par["numberOfRecipes"],
                    cuisine: par["cuisine"],
                    diet: par["diets"],
                    intolerances: par["intolerances"]
                }
            });
            if (response.data.length == 0){
              this.didntFoundRecipe = true
            }
            else{
              this.didntFoundRecipe = false
            }
            this.notSubmitted = false
            this.submitted = true
            this.preview = response
            this.$root.store.last_search = response
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.recipeName = "";
            this.form.numberOfRecipes = "";
            this.form.cuisine = "";
            this.form.diets = "";
            this.form.intolerances = "";
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
            
        },
        onSortSubmit(event){
          let orderBy = this.form.orderform
          console.log(orderBy)
          if (orderBy == undefined){
            orderBy = "Ascending"
          }
          console.log(orderBy)
          if (this.form.sortSearchResultBy == "Popularity"){
            if (orderBy == "Ascending"){
              this.preview.data.sort(function (a,b){return  a.popularity - b.popularity});
            }
            else{
              this.preview.data.sort(function (a,b){return  b.popularity - a.popularity});
            }
          }
          else{
            if (orderBy == "Ascending"){
              this.preview.data.sort(function (a,b){return  a.timeToMake - b.timeToMake});
            }
            else{
              this.preview.data.sort(function (a,b){return  b.timeToMake - a.timeToMake});
            }
          }
            this.$refs.searchResults.updateRecipes()
        },
        
        searchAgain(event) {
          this.notSubmitted = true
          this.submitted = false
        }
        
    },
    components: { RecipePreviewList }
};
</script>


<style scoped>

</style>
