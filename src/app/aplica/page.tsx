import SignupForm from "@/components/forms/signupForm";
import { museoModernoFont } from "@/lib/fonts";

export default async function Home() {
  return (
    <div className="flex h-full flex-col items-center py-8 text-center md:px-8">
      <h2
        className={`${museoModernoFont.className} text-center text-4xl font-medium text-primary`}
      >
        aplicación
      </h2>
      <div className="mt-8">
        <SignupForm />
      </div>
    </div>
  );
}
