"use client";

import "@/style/common.css";

import MainContent from "@/components/Home/MainContent";
import ContentList from "@/components/Home/ContentList";

export default function Home() {
  return (
    <div
      style={{
        paddingBottom: 40,
      }}
    >
      <MainContent />
      <ContentList />
    </div>
  );
}
