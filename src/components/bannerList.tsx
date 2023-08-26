import Link from "next/link";
import Banner from "./banner";

export interface Banner {
  imageUrl: string;
  link: string;
}

const BannerLists = ({ banners }: { banners: Array<Banner> }) => {
  function handleBanners(): React.ReactNode {
    return banners.map(({ imageUrl, link }, id) => {
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
    <ul className="grid grid-cols-2 lg:grid-cols-4 mx-6 gap-3">
      {handleBanners()}
    </ul>
  );
};

export default BannerLists;
