import SignupForm from "@/components/forms/signupForm";
import { museoModernoFont } from "@/lib/fonts";

export default async function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center py-6 text-center md:px-8 md:py-8">
      <h2
        className={`${museoModernoFont.className} text-center text-4xl font-medium text-primary`}
      >
        aplicación
      </h2>
      <div className="mt-6 w-full md:mt-8 md:w-1/2 xl:w-2/5">
        <SignupForm />
      </div>
    </div>
  );
}
