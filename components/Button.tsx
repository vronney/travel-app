import Image from "next/image";

type ButtonProp = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProp) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full boder ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
