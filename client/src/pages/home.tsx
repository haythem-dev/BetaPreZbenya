import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Categories from "@/components/categories";
import FeaturedProducts from "@/components/featured-products";
import SpecialOffer from "@/components/special-offer";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen gradient-subtle">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <SpecialOffer />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
