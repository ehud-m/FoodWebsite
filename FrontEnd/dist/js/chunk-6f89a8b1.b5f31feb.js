(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f89a8b1"],{"05d1":function(e,i,t){"use strict";t("c404")},9983:function(e,i,t){"use strict";t.r(i);var s=function(){var e=this,i=e._self._c;return i("div",{staticClass:"container"},[i("FamilyRecipesList")],1)},c=[],r=function(){var e=this,i=e._self._c;return i("b-container",[i("h3",[e._v(" My Family Recipes: "),e._t("default")],2),i("b-row",e._l(e.recipes,(function(e){return i("b-col",{key:e.id},[i("FamilyRecipe",{staticClass:"FamilyRecipe",attrs:{recipe:e}})],1)})),1)],1)},n=[],a=function(){var e=this,i=e._self._c;return i("div",[i("b-card",{attrs:{title:e.recipe.dishName,"img-src":e.recipe.image,"img-top":""}},[i("b-card-text",[e._v(" Recipe owner: "+e._s(e.recipe.dishOwner)+" "),i("br"),e._v(" When the recipe is made: "+e._s(e.recipe.whenWeMakeIt)+" "),i("br"),e._v(" Number of meals: "+e._s(e.recipe.howManyDishes)+" ")]),i("b-card-text",[e._v(" Ingridients: "),i("br"),e._v(" "+e._s(e.recipe.ingridients)+" ")]),i("b-card-text",[e._v(" Instructions: "),i("br"),e._v(" "+e._s(e.recipe.instructions)+" ")])],1)],1)},p=[],l={props:{recipe:{type:Object,required:!0}}},o=l,u=(t("05d1"),t("2877")),d=Object(u["a"])(o,a,p,!1,null,"8d11d67c",null),m=d.exports,_={name:"FamilyRecipeList",components:{FamilyRecipe:m},data(){return{recipes:[]}},mounted(){this.updateFamilyRecipes()},methods:{async updateFamilyRecipes(){try{const e=await this.axios.get("/users/family"),i=e.data;this.recipes=[],this.recipes.push(...i)}catch(e){console.log(e)}}}},b=_,h=Object(u["a"])(b,r,n,!1,null,"cdaecb58",null),f=h.exports,y={name:"FamileRecipesPage",components:{FamilyRecipesList:f}},v=y,w=Object(u["a"])(v,s,c,!1,null,"cd1f18f6",null);i["default"]=w.exports},c404:function(e,i,t){}}]);
//# sourceMappingURL=chunk-6f89a8b1.b5f31feb.js.map