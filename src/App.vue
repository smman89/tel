<template>
  <nav class="navigation">
    <router-link
      v-for="({ route, title }, key) in links"
      :key="key"
      class="navigaton__button"
      :to="route"
      >{{ title }}
    </router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const links = [
      {
        route: "/controllers",
        title: "Список контроллеров",
      },
      {
        route: "/setup",
        title: "Настройка отображения параметров",
      },
    ];

    return {
      links,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navigaton {
  margin: 30px;

  &__button {
    margin: 5px;
    font-weight: bold;
    color: #2c3e50;
  }
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
