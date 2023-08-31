import Link from "next/link";
import Banner from "./banner";

const BannerLists = ({ banners }: { banners: Array<BannerImage> }) => {
  function handleBanners(): React.ReactNode {
    return banners.map(({ imageUrl, width, height }, id) => {
      return (
        <li key={id}>
          <Link href={""}>
            <Banner imageUrl={imageUrl} width={400} height={300} />
          </Link>
        </li>
      );
    });
  }

  return (
    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3">{handleBanners()}</ul>
  );
};

export default BannerLists;
