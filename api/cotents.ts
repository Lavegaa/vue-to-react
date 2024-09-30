import { get } from "./index";

export const getContentItems = (): Promise<CommonResponse<Array<Content>>> => {
  return get<CommonResponse<Array<Content>>>({
    url: "/netflix/api/content/items",
  });
};
