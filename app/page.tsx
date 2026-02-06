import { stripe } from "@/lib/stripe";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 4,
  });
  console.log(products);
  return (
    <main>
      <h1 className="font-bold">Home Page</h1>
    </main>
  );
}
