import Link from "next/link";

interface LinkProps {
  href: string;
  text: string;
  className: string;
}

export function MyLink({ href, text, className }: LinkProps) {
  return (
    <Link className={className} href={href}>
      {text}
    </Link>
  );
}
