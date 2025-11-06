// app/[locale]/products/page.tsx
import Header from "@/components/Header";
import ProductLibrary from "@/components/ProductLibrary";
import Footer from "@/components/Footer";

const UPWORK = "https://www.upwork.com/freelancers/~01577deb572030ada8";

export default function ProductsPage() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Header upworkUrl={UPWORK} />
      <ProductLibrary upworkUrl={UPWORK} />
      <Footer upworkUrl={UPWORK} />
    </main>
  );
}
