import logo from "@/assets/logo-retina.webp";
import Image from "next/image";
const Header = () => {
  return (
    <div className="w-full">
      <Image className="mx-auto" src={logo} alt="logo" width={300} />
    </div>
  );
};

export default Header;
