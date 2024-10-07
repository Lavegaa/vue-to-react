# react-slick

[react-slick](https://react-slick.neostack.com/)을 사용하여 슬라이드를 구현해보려고 합니다.

```
yarn add react-slick
yarn add -D @types/react-slick
```

[multiple item](https://react-slick.neostack.com/docs/example/multiple-items) 예시를 활용해 구현합니다.

# tanstack query

FrontEnd에서 다루는 많은 데이터중에 큰 부분을 차지하는 부분이 서버에서 받아오는 데이터입니다.

기존에는 redux를 사용해 데이터를 관리했지만, 현재는 [tanstack query](https://tanstack.com/query/v3)와 같은 서버캐시 라이브러리를 사용해 데이터를 관리하고 있습니다.

```
yarn add @tanstack/react-query
```

### query

데이터를 불러올 때 (GET) 사용합니다.

```javascript
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

// 사용방법
const { data, isLoading, refetch, isError, error } = useContentQuery();

useEffect(() => {
  if (data) {
    console.log(data);
  }
}, [data]);

const refetchData = () => {
  refetch();
};

// 캐싱 지우기
const queryClient = useQueryClient();
queryClient.invalidateQueries({ queryKey: GET_CONTENT_QUERY_KEY });
```

### mutation

데이터를 변경할 때 (POST, PUT, DELETE) 사용합니다.

```javascript
import { tryLogin } from "@/api/login";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: ["post", "v1", "login"],
    mutationFn: async (data: LoginParameter) => {
      return await tryLogin(data);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

// 사용방법
const { mutateAsync } = useLoginMutation();

const login = async () => {
  await mutateAsync({ uid: "test", password: "test" });
};

useEffect(() => {
  login();
}, []);
```
