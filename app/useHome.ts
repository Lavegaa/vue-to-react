import { useContentQuery } from "@/hooks/queries/useContentQuery";
import { authStore } from "@/store/authStore/authStore";
import { useEffect, useState } from "react";

interface IContentList {
  key: string;
  title: string;
  list: Content[];
}

export const useHome = () => {
  const { authData } = authStore();
  const { data } = useContentQuery();

  const contentCategories = [
    { key: "watching", title: "시청중인 컨텐츠" },
    { key: "recommend", title: "추천 컨텐츠" },
    { key: "top", title: "인기 컨텐츠" },
    { key: "favorite", title: "내가 찜한 컨텐츠" },
  ];

  const [contentList, setContentList] = useState<IContentList[]>(
    contentCategories.map(({ key, title }) => ({ key, title, list: [] }))
  );

  const handleContentList = (data: Content[]) => {
    const updatedContentList = contentCategories.map(({ key, title }) => {
      let filteredList: Content[] = [];

      switch (key) {
        case "watching":
          filteredList = data.filter((content) =>
            authData?.watchingList.includes(content.code)
          );
          break;
        case "recommend":
          filteredList = data.filter((content) => content.isRecommend);
          break;
        case "top":
          filteredList = data.filter((content) => content.isTop);
          break;
        case "favorite":
          filteredList = data.filter((content) =>
            authData?.favoriteList.includes(content.code)
          );
          break;
        default:
          filteredList = [];
      }

      return {
        key,
        title,
        list: filteredList,
      };
    });

    setContentList(updatedContentList);
  };

  useEffect(() => {
    if (data) {
      handleContentList(data.data);
    }
  }, [data]);

  return { contentList };
};
