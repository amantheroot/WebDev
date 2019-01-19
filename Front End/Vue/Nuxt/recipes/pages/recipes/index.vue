<template>
    <section class="recipes">
        <recipe
        v-for="recipe in recipes"
        :key="recipe.id"
        :id="recipe.id"
        :thumbnail="recipe.thumbnail"
        :title="recipe.title" 
        :previewText="recipe.previewText"></recipe>
    </section>
</template>
<script>
import Recipe from "@/components/Recipe";

export default {
  components: {
    Recipe
  },
  asyncData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          recipes: [
            {
              id: 1,
              thumbnail:
                "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn",
              title: "Chicken Wings!",
              previewText: "Fly Away"
            },
            {
              id: 2,
              thumbnail:
                "https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg",
              title: "????????????!",
              previewText: "Eat Them?!"
            }
          ]
        });
      }, 1500);
    });
  }
};
</script>

<style scoped>
.recipes {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
