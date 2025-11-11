import Link from "next/link";
import ThreeHero from "../components/ThreeHero";
import ProductGrid from "../components/ProductGrid";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6 py-8">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
          Aqalisa.id — <span className="text-brand-500">premium</span> hijab eCommerce
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Style muslimah elegan tanpa ribet. 3D hero, wallet connect, on-chain checkout.
        </p>
        <div className="flex justify-center gap-3">
          <Link href="/shop" className="btn">Explore Products</Link>
          <Link href="/checkout" className="btn-outline">Checkout Demo</Link>
        </div>
      </section>

      <ThreeHero />

      <section className="space-y-4">
        <h2 className="text-xl font-medium">Featured</h2>
        <ProductGrid />
      </section>
    </div>
  );
}
