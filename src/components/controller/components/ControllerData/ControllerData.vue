<template>
  <div class="controller-data">
    <UiLoader v-if="isLoading" />
    <template v-else>
      <div class="controller-data__chart">
        <label>от: <input type="text" v-model="dateStart" /> </label>
        <label>до: <input type="text" v-model="dateEnd" /> </label>
        <Line :chart-data="chartData" :chartOptions="{ responsive: true }" />
      </div>
      <div class="controller-data__params">
        <label v-for="(parametr, key) in selectedParams" :key="key">
          <input
            type="radio"
            v-model="controllerStore.selectedParametr"
            name="parametr"
            :value="parametr"
          />
          {{ parametr }}
        </label>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { computed, defineComponent, ref } from "vue";
import { useControllerStore } from "@/components/controller/stores";
import { storeToRefs } from "pinia";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);
import { borderColor } from "@/constants";
import { useRoute } from "vue-router";
import { useControllerMessages } from "@/components/controller/composables";
import UiLoader from "@/components/Ui/UiLoader/UiLoader.vue";

export default defineComponent({
  name: "ControllerData",
  components: { Line, UiLoader },
  setup() {
    const {
      params: { imei },
      query,
    } = useRoute();

    const { getControllerMessages } = useControllerMessages();
    getControllerMessages();

    const controllerStore = useControllerStore();

    const { isLoading, selectedParams } = storeToRefs(controllerStore);

    const messages = computed(
      () => controllerStore.messagesGrouppedByImei[Number(imei)]
    );

    const dateStart = ref(query.dateStart?.toString());
    const dateEnd = ref(query.dateEnd?.toString());

    const filterDataByDate = computed(() => {
      return messages.value?.filter(({ time }) => {
        const date = dayjs(time);

        return (
          date.isBefore(dayjs(dateEnd.value)) &&
          date.isAfter(dayjs(dateStart.value))
        );
      });
    });

    const controllerValues = computed(() =>
      filterDataByDate.value?.map((m) => {
        if (controllerStore.selectedParametr) {
          return m[controllerStore.selectedParametr];
        }
      })
    );

    const chartData = computed(() => {
      return {
        labels: filterDataByDate.value?.map(({ time }) => time),
        datasets: [
          {
            label: controllerStore.selectedParametr,
            data: controllerValues.value,
            borderColor,
          },
        ],
      };
    });

    controllerStore.selectedParametr = controllerStore.selectedParams[0];

    return {
      filterDataByDate,
      dateStart,
      dateEnd,
      isLoading,
      chartData,
      messages,
      imei,
      selectedParams,
      controllerStore,
      controllerValues,
    };
  },
});
</script>

<style lang="scss" scoped>
.controller-data {
  display: flex;

  &__chart {
    flex-grow: 1;
    max-width: 400px;
  }
  &__params {
    flex-grow: 2;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-height: 90vh;
    overflow: scroll;
  }
}
</style>
