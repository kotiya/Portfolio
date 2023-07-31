import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Particle from "../Particle";
import Home2 from "./Home2";
import HomeHeaderClientComponent from "./HomeHeaderClientComponent";
import HomeImageClientComponent from "./HomeImageClientComponent";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  // Fetch data from the server
  const { data: items } = await supabase
    .from("getItems")
    .select()
    .match({ is_complete: false });

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <HomeHeaderClientComponent />
            <HomeImageClientComponent data={items} />
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}
