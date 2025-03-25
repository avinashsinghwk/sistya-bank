import { Avatar } from "../ui/avatar";

export function UserAvatar({ text }: { text: string }) {
  return (
    <Avatar>
      <span className="font-bold flex items-center justify-center rounded-full bg-amber-600 text-white h-full w-full">
        {text}
      </span>
    </Avatar>
  );
}
