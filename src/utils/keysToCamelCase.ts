import { Message } from "@/components/controller/types";
import { toCamelCase } from "./toCamelCase";

export const keysToCamelCase = (object: Message): Message => {
  return Object.entries(object).reduce((acc, [key, val]) => {
    return { ...acc, [toCamelCase(key)]: val };
  }, {} as Message);
};
