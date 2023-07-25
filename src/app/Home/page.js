"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/Home/contact");
  };
  return (
    <div>
      <h1>Home Page.</h1>
      <button onClick={handleNavigation}>Contact us</button>
    </div>
  );
};

export default Home;