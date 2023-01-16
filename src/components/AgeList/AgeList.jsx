import "./AgeList.css";

export const AgeList = ({ data }) => {
  // console.log(data);
  return (
    <ul className="age-list">
      {data.map((element) => {
        return (
          <div className="list" key= {element.name} >
          
            <span> {element.name}</span>
            <span> {element.age}</span>
          </div>
        );
      })} 
    </ul>
  );
};
