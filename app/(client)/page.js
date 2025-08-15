import Container from "@/components/Container";
import "./globals.css";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import HomeCategories from "@/components/HomeCategories";

export default function Home() {
  return (
    <div>
      <Container>
        <HomeBanner />
        <ProductGrid />
        <HomeCategories />
      </Container>
    </div>
  );
}

