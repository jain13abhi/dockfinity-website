import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
}
