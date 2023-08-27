import Image from "next/image";

const Banner = ({ imageUrl, width, height }: BannerImage) => {
  return (
    <Image
      className="rounded-2xl"
      src={imageUrl}
      width={width}
      height={height}
      layout="responsive"
      alt={imageUrl}
    />
  );
};
export default Banner;
