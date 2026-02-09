import Carousel from "@/components/Carousel";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  try {
    const products = await stripe.products.list({
      expand: ["data.default_price"],
      limit: 4,
    });
    return (
      <main>
        <h1 className="font-bold">Welcome to the NextShop!</h1>
        <Link href="/products">Browse All Products</Link>
        <Image
          src={products.data[0].images[0]}
          alt={products.data[0].name}
          width={300}
          height={300}
          unoptimized
        />
        <Carousel products={products.data} />
      </main>
    );
  } catch (err) {
    console.log(err);
    return <p>unable to load the products...</p>;
  }
}
