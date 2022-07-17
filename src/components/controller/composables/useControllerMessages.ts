import { useControllerStore } from "../stores";

export const useControllerMessages = () => {
  const controllerStore = useControllerStore();

  const getControllerMessages = async () => {
    if (controllerStore.messages.length > 0) {
      return;
    }

    await controllerStore.fetchMessages();
    controllerStore.setDefaultParams();
  };

  return {
    getControllerMessages,
  };
};
