import Carousel from "react-multi-carousel";

export const CustomCarousel = (props) =>{
  const {
    itemClass,
    containerClass,
    deviceType,
    children,
    responsive,
    withDots,
    showDots,
    slidesToSlide,
    swipeable,
    centerMode,
    rtl,
    infinite,
    additionalTransfrom,
    minimumTouchDrag,
    customTransition,
    transitionDuration,
  } = props;
  return (
    <Carousel
      itemClass={itemClass}
      containerClass={containerClass}
      responsive={responsive}
      swipeable={swipeable}
      withDots={withDots}
      infinite={infinite}
      autoPlay={false}
      customTransition={customTransition}
      transitionDuration={transitionDuration}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={deviceType}
      slidesToSlide={slidesToSlide}
      showDots={showDots}
      centerMode={centerMode}
      rtl={rtl}
      additionalTransfrom={additionalTransfrom}
      minimumTouchDrag={minimumTouchDrag}
    >
      {children}
    </Carousel>
  );
}
