import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Content from './MyPageClientComponent';
import Header from './Header';
import Footer from './Footer';

export default async function MyPage() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: items } = await supabase
    .from("getItems")
    .select()
    .match({ is_complete: false });

  return (
    <>
      <Header />
      <MyPageClientComponent data={items}/>
      <Footer />
    </>
  );
}
