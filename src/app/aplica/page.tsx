import ApplicationForm from "@/components/forms/applicationForm";
import { museoModernoFont } from "@/lib/fonts";

export default async function Home() {
  return (
    <div className="container flex h-full flex-col items-center py-8 text-center md:max-w-lg md:px-8 lg:max-w-2xl">
      <h2
        className={`${museoModernoFont.className} text-center text-4xl font-medium text-primary`}
      >
        aplicación
      </h2>
      <ApplicationForm />
    </div>
  );
}
