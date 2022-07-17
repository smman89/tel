<template>
  <ControllerData />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ControllerData from "@/components/controller/components/ControllerData/ControllerData.vue";

export default defineComponent({
  name: "ControllerDataView",
  components: {
    ControllerData,
  },
});
</script>
