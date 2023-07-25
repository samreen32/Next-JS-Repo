"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/Home");
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <button onClick={handleNavigation}>Go to Home</button>
    </div>
  );
};
export default Contact;