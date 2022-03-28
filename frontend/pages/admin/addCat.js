import axios from "axios";
import { useState } from "react";
import styles from "../../styles/addCat.module.css";
const AddCategorie = () => {
  const [categorie, setCategorie] = useState("");

  const addCat = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/categorie`, {
        categorie,
      });

      if (res.data.success) {
        console.log(res.data);
        setCategorie("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Add Categorie</h1>

      <div className={styles.container}>
        <input
          placeholder="Add Categorie"
          type="text"
          value={categorie}
          onChange={(e) => {
            setCategorie(e.target.value);
          }}
        />
        <button className={styles.btn} onClick={addCat}>
          Add
        </button>
      </div>
    </>
  );
};

export default AddCategorie;
