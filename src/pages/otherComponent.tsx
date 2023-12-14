import { useEffect, useState } from "react";

const OtherPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then((data) => setData(data.entries.slice(0, 10)))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      OtherPage
      <p>This is working</p>
      <h1>Or is it</h1>
      {data.map((data) => (
        <div key={(data as any).API}>{(data as any).API}</div>
      ))}
    </div>
  );
};

export default OtherPage;
