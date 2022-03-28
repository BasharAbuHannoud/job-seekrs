import axios from "axios";
import styles from "../../styles/alljobs.module.css";
import { BsPen } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";


const AllJos = ({ data, dataCat }) => {
  // console.log("1", data);
  // console.log("2", dataCat);

  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");
  const [categorie, setCategorie] = useState("");
  const [location, setLocation] = useState("");
  const [idUpdated, setIdupdate] = useState("");

  /************************************** */

  const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.replace(router.asPath);
  };

  /************************************* */
  const toggleModal = () => {
    setModal(!modal);
  };

  /****************************** ********/
  const updatejob = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/jobs/${id}`, {
        name,
        description,
        location,
        categorie,
        skills,
      });
      if (res.data.success) {
        refreshData();
        console.log(res.data);

        toggleModal();
      }
    } catch (err) {
      console.error(err);
    }
  };

  /*************************************** */

  const deletJob = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/jobs/${id}`);
      if (res.data.success) {
        console.log(res.data);
        refreshData();
        toggleModal();
      }
    } catch (err) {
      console.error(err);
    }
  };
  /******************************** */

  return (
    <div className={styles.container}>
      <h1>All jobs</h1>

      {data.map((e, i) => {
        return (
          <>
            <div key={i} className={styles.info_job}>
              <div className={styles.flex_pen}>
                {" "}
                <BsPen
                  className={styles.pen}
                  onClick={() => {
                    toggleModal();
                    setIdupdate(e._id);
                  }}
                />
              </div>
              <span>
                {" "}
                <span>Name: </span>
                {e.name}
              </span>
              <p defaultValue={e.description}>
                {" "}
                <span>description: </span>
                {e.description}
              </p>

              <span defaultValue={e.skills[0]}>
                <span>Skills: </span> {e.skills[0]}
              </span>
              <span defaultValue={e.categorie.categorie}>
                {" "}
                <span>Sector: </span>
                {e.categorie.categorie}
              </span>
            </div>

            {modal && e._id == idUpdated && (
              <div className={styles.modal}>
                <div onClick={toggleModal} className={styles.overlay}></div>

                <div className={styles.modalContent}>
                  <div className={styles.containerAdd}>
                    <h1>Edit Job</h1>

                    <input
                      placeholder="name"
                      defaultValue={e.name}
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />

                    <input
                      placeholder="description"
                      type="text"
                      defaultValue={e.description}
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
                      {dataCat.map((e, i) => {
                        return <option value={e._id} key={i} >{e.categorie}</option>;
                      })}
                    </select>
                    <input
                      placeholder="Skills"
                      type="text"
                      defaultValue={e.skills}
                      onChange={(e) => {
                        setSkills(e.target.value);
                      }}
                    />
                    <input
                      placeholder="location"
                      type="text"
                      defaultValue={e.location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                      }}
                    />
                    <button
                      className={styles.btn_updated}
                      onClick={() => {
                        updatejob(e._id);
                      }}
                    >
                      {" "}
                      update
                    </button>
                    <button
                      className={styles.btn_delete}
                      onClick={() => {
                        deletJob(e._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await axios.get(`http://localhost:5000/jobs`);
  const response = await axios.get(`http://localhost:5000/categorie`);

  return {
    props: { data: res.data.data, dataCat: response.data.data },
  };
}

export default AllJos;
