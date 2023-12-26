import { ReactNode } from "react";
import Footer from "~/components/Layout/Footer";
import Header from "~/components/Layout/Header";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="h-full flex flex-col bg-var(--background)">
      <Header />
      {children}
      <Footer />
    </div>
  );
}