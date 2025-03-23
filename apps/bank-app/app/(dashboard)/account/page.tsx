import UserDetails from "@/actions/UserDetails";
import { UserDetailsComponent } from "@/components/UserDetailsComponent";
import { Auth_Options } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Account - Sistya Bank",
  description: "Know your account details here",
};

export default async function AccountPage() {
  const session = await getServerSession(Auth_Options);

  if (!session?.user?.id) {
    return <p>Please log in to view account details.</p>;
  }

  const res = await UserDetails(session.user.id);

  if (!res.success || !res.userDetails) {
    return (
      <div className="text-center text-red-600 font-semibold">
        Please refresh the page
      </div>
    );
  }

  return <UserDetailsComponent userDetails={res.userDetails} />;
}
