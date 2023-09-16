export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen mx-4 lg:mx-0 xl:max-w-7xl xl:mx-auto xl:self-center flex flex-col md:flex-row pt-32 md:pt-36 ">
      {children}
    </section>
  );
}
