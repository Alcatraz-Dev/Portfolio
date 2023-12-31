import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../public/BrandLogo.png";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link
          href="/"
          target={"_blank"}
          className="text-[#99e000] flex items-center"
        >
          
          <Image width={50} height={50} src={LogoImage} alt="Logo" />
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#99e000] mx-2 " />
          GO TO WEBSITE
        </Link>
      </div>
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
