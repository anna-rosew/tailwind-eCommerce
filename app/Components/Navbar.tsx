import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];

export function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />
        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <p className="text-[#36485C] font-medium" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className="flex center-items gap-x-5">
        <div>
          <p className=" hidden font-medium lg:block text-[#36485C] pr-[56px]">
            Open an account
          </p>
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-[36485C] lg:block">
            Sign in
          </span>
        </div>
        <div>
          <Image src={Menu} alt="Menu Button" className="lg:hidden" />
        </div>
      </div>
    </nav>
  );
}