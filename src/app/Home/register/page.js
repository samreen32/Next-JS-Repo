"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/Home/contact");
  };

  return (
    <>
      <br/>
      <br/>
      <br/><h1>Registe page</h1>
      <button onClick={handleNavigation}>Contact us</button>
    </>
  );
};

export default Register;