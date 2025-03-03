import { getServerSession } from "next-auth";
import { Auth_Options } from "../../../lib/auth";

export default async function RegisterPage() {
  const session = await getServerSession(Auth_Options);
  return (
    <div>
      <div>Register yourself</div>
      {JSON.stringify(session)}
    </div>
  );
}
