import { ReactNode } from "react";
import Footer from "~/components/Layout/Footer";
import Header from "~/components/Layout/Header";

type MainLayoutProps = {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div >
      <Header />
      <div className="min-h-screen container">
        {children}
      </div>
      <Footer />
    </div>
  );
}