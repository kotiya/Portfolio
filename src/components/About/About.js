import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AboutSection from "./AboutSection";

export default async function About() {
  const supabase = createServerComponentClient<Database>({ cookies });

  // Fetch data from the server
  const { data: aboutData } = await supabase
    .from("aboutData")
    .select()
    .limit(1);

  return (
    <>
      <AboutSection data={aboutData} />
    </>
  );
}
