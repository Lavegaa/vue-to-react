import Slider, { Settings } from "react-slick";

// children은 vue에서 slot과 같이 자식 컴포넌트로 콘텐트를 전달하는 방법입니다.
const Carousel = ({
  children,
  options,
}: {
  children: React.ReactNode;
  options?: Partial<Settings>;
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...options,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousel;
