import { tryLogin } from "@/api/login";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: ["post", "v1", "login"],
    mutationFn: async (data: LoginParameter) => {
      return await tryLogin(data);
    },
  });
};
