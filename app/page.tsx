import HomeClientComponent from "../components/Home/HomeClientComponent";

async function Home() {
  const homeLogo = await import("../public/home-main.svg");

  return <HomeClientComponent homeLogo={homeLogo} />;
}

export default Home;
