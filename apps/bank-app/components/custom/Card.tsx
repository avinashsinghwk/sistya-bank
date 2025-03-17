export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-6 shadow-lg rounded-2xl border border-gray-200 text-center ${className}`}
    >
      {children}
    </div>
  );
}
