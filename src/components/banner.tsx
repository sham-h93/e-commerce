import Image from "next/image";

interface Image {
  imageUrl: string;
  width: number;
  height: number;
}

const Banner = ({ imageUrl, width, height }: Image) => {
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
