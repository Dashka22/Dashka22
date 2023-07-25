"use client";

import { Modal } from "@/components/modal/modal";
import { Navbar } from "@/components/navbar";
import { Banner } from "@/components/banner";
import { Items } from "@/components/item";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Items />
      <Modal />
    </>
  );
}
