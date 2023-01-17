import { Input } from "../input/Input";
import styles from "./Biography.module.css";
import { Button } from "../Button/Button";
import { useState } from "react";

export const Biography = ({ data }) => {
  // console.log(data);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onChangeHandlerAge = (event) => {
    setAge(event.target.value);
  };

  const onClickShowHandler = (event) => {
    event.preventDefault();

    const newAgeUser = {
      name,
      age,
    };
    data(newAgeUser);
    // console.log(data);
    setName("");
    setAge("");
  };

  return (
    <div>
      <div className={styles.App}>
        <form className={styles.Form}>
          <Input
            placeholder="write your name"
            label="Username"
            inputType="text"
            value={name}
            onChange={onChangeHandler}
          />
          <Input
            inputType={"number"}
            label="Age(Years)"
            value={age}
            onChange={onChangeHandlerAge}
          />

          <Button btndisabled={name ==="" || age ===""} onClick={onClickShowHandler}>ADD USER</Button>
        </form>
      </div>
    </div>
  );
};
