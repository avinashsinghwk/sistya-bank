import { Card } from "./Card";

export function InfoBox({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="hover:scale-110">
      <h3 className="text-xl font-semibold text-red-500">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </Card>
  );
}
