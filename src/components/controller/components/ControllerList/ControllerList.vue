<template>
  <table class="controller-list">
    <UiLoader v-if="isLoading" />

    <template v-else>
      <tr class="controller-list__header">
        <th v-for="(header, key) in headers" :key="key">{{ header }}</th>
      </tr>

      <tr v-for="(controller, key) in controllerList" :key="key">
        <td>
          <router-link
            :to="{
              path: `controllers/${controller.imei}`,
              query: { dateStart, dateEnd },
            }"
            >{{ controller.imei }}</router-link
          >
        </td>
        <td>{{ controller.truckId }}</td>
      </tr>
    </template>
  </table>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useControllerStore } from "@/components/controller/stores";
import { storeToRefs } from "pinia";
import { useControllerMessages } from "@/components/controller/composables";
import dayjs from "dayjs";
import { dateFormat } from "@/constants";
import UiLoader from "@/components/Ui/UiLoader/UiLoader.vue";

export default defineComponent({
  name: "ControllerList",
  components: {
    UiLoader,
  },
  setup() {
    const { getControllerMessages } = useControllerMessages();
    getControllerMessages();
    const controllerStore = useControllerStore();

    const headers: string[] = ["Imei", "TruckId"];

    const { controllerList, isLoading } = storeToRefs(controllerStore);

    const dateStart = ref(dayjs().subtract(1, "day").format(dateFormat));
    const dateEnd = ref(dayjs().format(dateFormat));

    return {
      dateStart,
      dateEnd,
      headers,
      controllerList,
      isLoading,
    };
  },
});
</script>

<style lang="scss" scoped>
.controller-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
