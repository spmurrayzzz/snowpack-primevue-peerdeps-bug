<script>
  export default {
    setup() {
      return {};
    },
  };
</script>
<template>
  <div>Welcome to my (bugged) Vue app!</div>
  <Card>
      <template #header>
        This is a header
      </template>
      <template #title>
          Advanced Card
      </template>
      <template #content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
          quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </template>
      <template #footer>
        This is a footer
      </template>
    </Card>
</template>
