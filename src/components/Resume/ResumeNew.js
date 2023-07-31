import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import ResumeSection from "./ResumeSection";
import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";

export default async function ResumeNew() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: pdfData } = await supabase
    .from("pdf")
    .select()
    .match({ is_complete: false });

  return (
    <div>
      <ResumeSection pdf={pdfData} />
    </div>
  );
}
