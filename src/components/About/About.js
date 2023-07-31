import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import AboutSection from "./AboutSection";
import ProfessionalSkillset from "./ProfessionalSkillset";
import ToolstackSection from "./ToolstackSection";
import Github from "./Github";

export default async function About() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: aboutData } = await supabase
    .from("aboutData")
    .select()
    .match({ is_complete: false });

  return (
    <>
      <AboutSection data={aboutData} />
      <ProfessionalSkillset />
      <ToolstackSection />
      <Github />
    </>
  );
}
