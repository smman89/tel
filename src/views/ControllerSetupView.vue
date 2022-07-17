<template>
  <ControllerSetup />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ControllerSetup from "@/components/controller/components/ControllerSetup/ControllerSetup.vue";

export default defineComponent({
  name: "ControllerSetupView",
  components: {
    ControllerSetup,
  },
});
</script>
