import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ListingCard } from "../components/ListingCard";
import { EbayResult } from "../types/EbayResult";

const Home: NextPage = () => {
  const [results, setResults] = useState<Array<EbayResult>>([]);
  useEffect(() => {
    const search = async () => {
      const res = await axios.post("/api/searchItem", {
        query_string: "trevor lawrence rpa",
      });
      setResults(res.data.searchResult.item);
      console.log(res.data.searchResult.item[1]);
    };
    search();
  }, []);

  return (
    <div>
      {results.map((result) => {
        return <ListingCard ebayResult={result} />;
      })}
    </div>
  );
};

export default Home;
