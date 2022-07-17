import { defineStore } from "pinia";
import { Message, MessageField, MessageFields } from "../types";
import { httpClient } from "@/httpClient/index";
import { keysToCamelCase, getMessageFields } from "@/utils";
import groupBy from "lodash.groupby";

interface State {
  messages: Message[];
  isLoading: boolean;
  selectedParams: MessageField[];
  selectedParametr: keyof Message;
}

export const useControllerStore = defineStore("controllers", {
  state: () =>
    ({
      messages: [],
      isLoading: true,
      selectedParams: [],
      selectedParametr: MessageFields.Id,
    } as State),
  getters: {
    messagesGrouppedByImei: (state) =>
      groupBy(state.messages, MessageFields.Imei),
    controllerList: (state) => {
      const uniequeImeiAddresses: string[] = [];

      return state.messages
        .filter((message) => {
          if (!uniequeImeiAddresses.includes(message.imei)) {
            uniequeImeiAddresses.push(message.imei);
            return true;
          }
          return false;
        })
        .map(({ imei, truckId }) => ({ imei, truckId }));
    },
    controllerParams: (state) => getMessageFields(state.messages[0]),
  },
  actions: {
    async fetchMessages() {
      this.isLoading = true;
      const { data } = await httpClient.get<Message[]>("frontend-test.json");
      this.isLoading = false;
      if (data) {
        this.messages = data.map(keysToCamelCase);
      }
    },
    setDefaultParams() {
      this.selectedParams = [...this.controllerParams];
      this.selectedParametr = this.selectedParams[0];
    },
  },
});
