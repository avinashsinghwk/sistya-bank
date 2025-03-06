import Link from "next/link";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

export function MyLink({ href, children, className }: LinkProps) {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
