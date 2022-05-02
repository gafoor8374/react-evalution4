import {Login_Success,Login_Request,ADMIN,CLIENT} from "./action"
import { localData, saveData } from "../Utils/localStorage";

const init = {
  isLoading:false,
  isError:false
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case Login_Request:
      return {
        ...store,
        isLoading: true,
        isError: false,
      };
    case Login_Success:
        saveData(payload)
      return {
        ...store,
        isLoading: false,
        isError: false,
      };
      case ADMIN:
          return {
              ...store,
              
          }
    default:
      return store;
  }
};

