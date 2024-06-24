import MainNavigation from "@/components/navigation/main-navigationBar";

export default async function RootLayout({ children }) {
  return (
    <>
      <MainNavigation />
      {children}
    </>
  );
}
