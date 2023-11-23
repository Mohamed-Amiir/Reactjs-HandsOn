import Image from "next/image";
import styles from "./page.module.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";


export default function Home() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
