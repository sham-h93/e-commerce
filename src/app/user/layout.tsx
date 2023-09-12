import Title from "@/components/title";
import UserSideMenu from "@/components/userSideMenu";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen xl:max-w-7xl xl:mx-auto xl:self-center flex flex-row gap-6 pt-32 md:pt-36 ">
      <UserSideMenu />
      {children}
    </section>
  );
}
