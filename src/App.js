import { useState } from "react";
import { AgeList } from "./components/AgeList/AgeList";
import { Biography } from "./components/biography/Biography";

function App() {
  const [dataName, setData] = useState([
    {
      name: "Bayaman👨🏻‍💻",
      age: 21,
    },
    {
      name: "Naz-Erke💃🏼",
      age: 21,
    },
    {
      name: "Kurmanzhan🦥",
      age: 19,
    },
  ]);
  dataName.sort((a,b)=>{
return b.age-a.age
  })

  const newData = (data) => {
    // console.log(data);
    const copyData = [...dataName];
    copyData.push(data);
    setData(copyData);
  };

  return (
    <div>
      <Biography data={newData} />
      <AgeList data={dataName} />
    </div>
  );
}

export default App;
