import { MessageField, Message } from "@/components/controller/types";

export const getMessageFields = (message: Message): MessageField[] => {
  return Object.keys(message || {}) as MessageField[];
};
