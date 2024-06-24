import MainNavigation from "@/components/navigation/main-navigationBar";

export default function ToolShopLayout({ children }) {
  return (
    <>
      <MainNavigation />
      {children}
    </>
  );
}
