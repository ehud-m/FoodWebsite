<template>
  <div class="container">
    <b-form @submit.prevent="onAdd" @reset.prevent="onReset">
      <b-form-group
        id="input-group-name"
        label-cols-sm="3"
        label="Name:"
        label-for="name"
      >
        <b-form-input
          id="name"
          v-model="$v.form.name.$model"
          type="text"
          :state="validateState('name')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.name.required">
          name is required
        </b-form-invalid-feedback>
      </b-form-group>
    
    <b-form-group
        id="input-group-timeToMake"
        label-cols-sm="3"
        label="Time to make in minutes:"
        label-for="timeToMake"
      >
        <b-form-input
          id="timeToMake"
          v-model="$v.form.timeToMake.$model"
          type="text"
          :state="validateState('timeToMake')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.timeToMake.required">
          Time to make is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.timeToMake.numeric">
          Time to make must be a number
        </b-form-invalid-feedback>
      </b-form-group>

        <b-form-group
        id="input-group-popularity"
        label-cols-sm="3"
        label="Number of people who like this recipe:"
        label-for="popularity"
      >
        <b-form-input
          id="popularity"
          v-model="$v.form.popularity.$model"
          type="text"
          :state="validateState('popularity')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.popularity.required">
         Number of likes is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.popularity.numeric">
          Number of likes must be a number
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-whoCanEat"
        label-cols-sm="3"
        label="Who can eat this meal:"
        label-for="whoCanEat"
      >
        <b-form-select
          id="whoCanEat"
          v-model="$v.form.whoCanEat.$model"
          :options="whoCanEatEnum"
          :state="validateState('whoCanEat')"
        ></b-form-select>
        <b-form-invalid-feedback>
          This field is required
        </b-form-invalid-feedback>
      </b-form-group>

    <b-form-group
        id="input-group-glutenFree"
        label-cols-sm="3"
        label="Is it gluten free:"
        label-for="glutenFree"
      >
        <b-form-select
          id="glutenFree"
          v-model="$v.form.glutenFree.$model"
          :options="glutenFreeEnum"
          :state="validateState('glutenFree')"
        ></b-form-select>
        <b-form-invalid-feedback>
          This field is required
        </b-form-invalid-feedback>
      </b-form-group>

    <b-form-group
        id="input-group-ingridients"
        label-cols-sm="3"
        label="Ingridients:"
        label-for="ingridients"
      >
        <b-form-textarea
          id="ingridients"
          v-model="$v.form.ingridients.$model"
          rows = "5"
          :state="validateState('ingridients')"
        ></b-form-textarea>
        <b-form-invalid-feedback>
          Ingridients are required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-instructions"
        label-cols-sm="3"
        label="Instructions:"
        label-for="instructions"
      >
        <b-form-textarea
          id="instructions"
          v-model="$v.form.instructions.$model"
          rows = "5"
          :state="validateState('instructions')"
        ></b-form-textarea>
        <b-form-invalid-feedback>
          Instructions are required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-numberOfMeals"
        label-cols-sm="3"
        label="Number of meals:"
        label-for="numberOfMeals"
      >
        <b-form-input
          id="numberOfMeals"
          v-model="$v.form.numberOfMeals.$model"
          type="text"
          :state="validateState('numberOfMeals')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.numberOfMeals.required">
         Number of meals is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.numberOfMeals.numeric">
          Number of meals must be a number
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-image"
        label-cols-sm="3"
        label="Image url:"
        label-for="image"
      >
        <b-form-input
          id="image"
          v-model="$v.form.image.$model"
          type="text"
          :state="validateState('image')"
        ></b-form-input>
        <b-form-invalid-feedback v-if="!$v.form.numberOfMeals.required">
         Image url is required
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button class="resetButton" type="reset" variant="danger">Reset</b-button>
      <b-button
        id = "submitButton"
        type="submit"
        variant="primary"
        
        class="ml-5 w-75"
        >Add</b-button
      >
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      Recipe add failed: {{ form.submitError }}
    </b-alert>
    <b-alert
      class="mt-2"
      v-if="submitSucceded"
      variant="success"
      dismissible
      show
    >
      Recipe add succeded
    </b-alert>
    <!-- <b-card class="mt-3 md-3" header="Form Data Result">
      <pre class="m-0"><strong>form:</strong> {{ form }}</pre>
      <pre class="m-0"><strong>$v.form:</strong> {{ $v.form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import {
  required,
  numeric

} from "vuelidate/lib/validators";

export default {
  name: "AddRecipe",
  data() {
    return {
      form: {
        name: "",
        timeToMake: "",
        popularity: "",
        whoCanEat: "",
        glutenFree: "",
        ingridients: "",
        instructions: "",
        numberOfMeals: "",
        image: "",
        submitError: undefined
      },
      submitSucceded: false,
      whoCanEatEnum: ["vegeterian","vegan","meatLovers"],
      glutenFreeEnum: ["Yes", "No"],
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      timeToMake: {
        required,
        numeric
      },
      popularity: {
        required,
        numeric
      },
      whoCanEat: {
        required,
      },
      glutenFree: {
        required,
      },
      ingridients: {
        required,
      },
      instructions: {
        required,
      },
      numberOfMeals: {
        required,
        numeric
      },
      image: {
        required,
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Add() {
      try {
        let glutenFreeBool = false
        if (this.form.glutenFree=="Yes")
            glutenFreeBool = true
        const response = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/user/Register",
           "/recipes/recipe",

          {
            name: this.form.name,
            timeToMake: this.form.timeToMake,
            popularity: this.form.popularity,
            whoCanEatVegOrNot: this.form.whoCanEat,
            glutenFree: glutenFreeBool,
            ingridients: this.form.ingridients,
            instructions: this.form.instructions,
            numberOfMeals: parseInt(this.form.numberOfMeals),
            image: this.form.image

          }
        );
        this.submitSucceded = true
        // console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onAdd() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.Add();
    },
    onReset() {
      this.submitSucceded = false;
      this.form = {
        name: "",
        timeToMake: "",
        popularity: "",
        whoCanEat: "",
        glutenFree: "",
        ingridients: "",
        instructions: "",
        numberOfMeals: "",
        image: ""
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#submitButton {
    margin-right: 0;
    padding-right: 0;
}
b-form-input {
    width:20px
}
</style>
