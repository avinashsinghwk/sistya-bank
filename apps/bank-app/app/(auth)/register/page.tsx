import { RegisterForm } from "@/components/RegisterForm";

export default async function RegisterPage() {
  return (
    <div className="flex items-center p-6 sm:p-0 justify-center w-full h-screen relative">
      <RegisterForm />
    </div>
  );
}
