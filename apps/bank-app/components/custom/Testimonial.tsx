import { Card } from "./Card";

export function Testimonial({
  star,
  about,
  name,
}: {
  star: string;
  about: string;
  name: string;
}) {
  return (
    <Card>
      <h3 className="text-xl font-semibold text-red-500">{star}</h3>
      <p className="mt-2 text-gray-600">{about}</p>
      <p className="font-semibold">{name}</p>
    </Card>
  );
}
