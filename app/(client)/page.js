import Container from "@/components/Container";
import "./globals.css";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <div>
      <Container>
        <HomeBanner />
        <ProductGrid />
      </Container>
    </div>
  );
}

