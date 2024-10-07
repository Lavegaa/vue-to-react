import { get } from "./index";

export const getContentItems = (): Promise<CommonResponse<Array<Content>>> => {
  return get<CommonResponse<Array<Content>>>({
    url: "api/netflix/api/content/items",
  });
};
