import Arrivals from "@/components/Arrivals";
import Contact from "@/components/Contact";
import Gifts from "@/components/Gifts";
import Landing from "@/components/Landing";
import Products from "@/components/Products";
import Shop from "@/components/shop/Shop";
export default function Home() {
  return (
    <>
    <Landing />
    <Products />
    <Arrivals />
    <Shop />
    <Gifts />
    <Contact />
    </>
  );
}
