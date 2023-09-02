import { TrendItems } from "components/TrendItems";

function Home({ items }) {
  return (
    <div>
      <h1>Trending today</h1>
      <TrendItems items={items} />
    </div>
  );
}

export default Home;