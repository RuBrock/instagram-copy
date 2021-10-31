import Image from "next/image";

function Logo(props) {
  const classesByType = {
    desktop: "hidden lg:inline-grid w-24",
    mobile: "w-10 lg:hidden flex-shrink-0",
  };

  const classes = classesByType[props.type] || "";

  return (
    <div className={`relative cursor-pointer ${classes}`}>
      <Image src={props.imageURL} layout="fill" objectFit="contain" />
    </div>
  );
}

export default Logo;
