import Link from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  changeTab?: boolean;
}

export function MyLink({ href, children, className, changeTab }: LinkProps) {
  return (
    <Link target={changeTab ? "_blank" : ""} className={className} href={href}>
      {children}
    </Link>
  );
}
