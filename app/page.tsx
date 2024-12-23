"use client";
import About from "./components/About";
import Banner from "./components/Banner";
import BCarousel from "./components/FeaturedProducts";
import Header from "./components/Header";
import ImageBanner from "./components/ImageBanner";
import LastBanner from "./components/LastCarousel";
import MultiImgBanner from "./components/MultiImgBanner";
import Product from "./components/Product";

interface MenuItem {
  href: string;
  label: string;
  sectionId: string;
}

export default function Home() {
  const menuItems: MenuItem[] = [
    { href: "#", label: "Home", sectionId: "home-section" },
    { href: "#", label: "Best Seller", sectionId: "best-seller-section" },
    { href: "#", label: "Products", sectionId: "products-section" },
    { href: "#", label: "Blogs", sectionId: "blogs-section" },
    { href: "#", label: "Contact", sectionId: "contact-section" },
  ];

  return (
    <>
      <Header menuItems={menuItems} />
      <Banner />
      <ImageBanner />
      <About />
      <BCarousel />
      <MultiImgBanner />
      <Product />
      <LastBanner />
    </>
  );
}
