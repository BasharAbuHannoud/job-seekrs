import styles from "../../styles/add.module.css";
import { useState } from "react";
import axios from "axios";

const Add = ({ data }) => {
  console.log(data);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [categorie, setCategorie] = useState("");
  const [location, setLocation] = useState("");

  const addJob = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/jobs`, {
        name,
        description,
        location,
        categorie,
        skills,
      });

      if (res.data.success) {
        console.log(res.data);
        setName("")
        setDescription("")
        setSkills("")
        setLocation("")
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Add job</h1>

      <div className={styles.containerAdd}>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          placeholder="description"
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <select
          onChange={(e) => {
            setCategorie(e.target.value);
          }}
        >
          <option>Categorie</option>

          {data.map((e, i) => {
            return (
              <>
                <option value={e._id}>{e.categorie}</option>
              </>
            );
          })}
        </select>

        <input
          placeholder="Skills"
          type="text"
          value={skills}
          onChange={(e) => {
            setSkills(e.target.value);
          }}
        />

        <input
          placeholder="location"
          type="text"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />

        <button className={styles.btn_publish} onClick={addJob}>
          Publish
        </button>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(`http://localhost:5000/categorie`);

  return { props: { data: res.data.data } };
}

export default Add;
