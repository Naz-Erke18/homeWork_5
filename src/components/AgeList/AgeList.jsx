import styles from"./AgeList.module.css";

export const AgeList = ({ data }) => {
  // console.log(data);
  return (
    <ul className={styles.age}>
      {data.map((element) => {
        return (
          <div className={styles.list} key= {element.name} >
          
            <span> {element.name}</span>
            <span> {element.age}</span>
          </div>
        );
      })} 
    </ul>
  );
};
