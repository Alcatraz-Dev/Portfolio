import Image from "next/image";
import LogoImage from "../../public/LogoImage.png";
function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image width={50} height={50} src={LogoImage} alt="Logo" />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
