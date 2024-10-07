import { getContentItems } from "@/api/cotents";
import { useQuery } from "@tanstack/react-query";

export const GET_CONTENT_QUERY_KEY = ["get", "v1", "content"];

export const useContentQuery = () => {
  return useQuery({
    queryKey: GET_CONTENT_QUERY_KEY,
    queryFn: async () => {
      return await getContentItems();
    },
    // 30분동안 캐싱
    gcTime: 1000 * 60 * 60 * 0.5,
  });
};
