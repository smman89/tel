<template>
  <div class="controller-setup">
    <UiLoader v-if="isLoading" />
    <template v-else>
      <label v-for="(parametr, key) in controllerParams" :key="key">
        <input
          :id="parametr"
          type="checkbox"
          v-model="controllerStore.selectedParams"
          :value="parametr"
        />
        {{ parametr }}
      </label>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useControllerStore } from "@/components/controller/stores";
import { storeToRefs } from "pinia";
import { useControllerMessages } from "@/components/controller/composables";
import UiLoader from "@/components/Ui/UiLoader/UiLoader.vue";

export default defineComponent({
  name: "ControllerSetup",
  components: {
    UiLoader,
  },
  setup() {
    const controllerStore = useControllerStore();
    const { getControllerMessages } = useControllerMessages();
    getControllerMessages();

    const { controllerParams, isLoading } = storeToRefs(controllerStore);

    return { controllerParams, controllerStore, isLoading };
  },
});
</script>

<style lang="scss" scoped>
.controller-setup {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
