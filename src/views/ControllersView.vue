<template>
  <ControllerList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ControllerList from "@/components/controller/components/ControllerList/ControllerList.vue";

export default defineComponent({
  name: "ControllersView",
  components: {
    ControllerList,
  },
});
</script>
