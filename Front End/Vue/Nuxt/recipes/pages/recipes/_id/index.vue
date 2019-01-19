<template>
    <section class="single-recipe">
        <h1>{{recipe.title}}</h1>
        <div>
            <img class="recipe-image" :src="recipe.thumbnail" :alt="recipe.title">
        </div>
        <p>{{recipe.description}}</p>
    </section>
</template>

<script>
export default {
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          recipe: [
            {
              id: "1",
              thumbnail:
                "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn",
              title: "Chicken Wings!",
              previewText: "Fly Away",
              description: "Good One!"
            },
            {
              id: "2",
              thumbnail:
                "https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg",
              title: "????????????!",
              previewText: "Eat Them?!",
              description: "Really Good One!"
            }
          ].find(re => re.id === context.params.id)
        });
      }, 1500);
    });
  }
};
</script>


<style scoped>
.single-recipe {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.recipe-image {
  width: 75%;
}
</style>

