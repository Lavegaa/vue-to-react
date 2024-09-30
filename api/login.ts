import { get, post } from "@/api";

export const tryLogin = (
  param: LoginParameter
): Promise<CommonResponse<LoginInfo>> => {
  return post<CommonResponse<LoginInfo>>({
    url: "api/netflix/api/account/login",
    data: param,
  });
};

export const tryCheck = (): Promise<CommonResponse<LoginInfo>> => {
  return get<CommonResponse<LoginInfo>>({
    url: "api/netflix/api/account/check",
  });
};
