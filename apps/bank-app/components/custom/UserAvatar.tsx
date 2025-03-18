import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function UserAvatar({ text }: { text: string }) {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>{text}</AvatarFallback>
    </Avatar>
  );
}
