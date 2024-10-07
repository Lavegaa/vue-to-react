import { useHome } from "@/app/useHome";
import Carousel from "@/components/Carousel";
import Image from "next/image";

const ContentList = () => {
  const { contentList } = useHome();
  return (
    <div className="contents_list_box">
      {contentList
        .filter((content) => content.list.length > 0)
        .map((content) => {
          const length = content.list.length;
          const slidesToShow = 5;
          const draggable = slidesToShow < length;
          return (
            <div key={content.key}>
              <h3 className="contents_title">{content.title}</h3>
              <div>
                <Carousel
                  key={content.key}
                  options={{
                    slidesToShow: slidesToShow,
                    slidesToScroll: slidesToShow + 1,
                    infinite: draggable,
                    draggable: draggable,
                  }}
                >
                  {content.list.map((item) => {
                    return (
                      <div
                        className="item"
                        key={item.code}
                        onClick={() => {
                          alert(`
${item.title}

${item.description}
                          `);
                        }}
                      >
                        <Image
                          src={`/assets/image/contentImages/${item.category}/${item.summaryImg}`}
                          alt={item.title}
                          width={200}
                          height={100}
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ContentList;
