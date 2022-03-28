import axios from "axios";
import styles from "../[cat_id]/[id].module.css";

const Jobs = ({ data }) => {
  console.log({ data });

  return (
    <div className={styles.container}>
      {data.length ? (
        data.map((e, i) => {
          return (
            <div className={styles.info_job} key={i}>
              <span>Position: {e.name}</span>

              <p>description: {e.description}</p>
              <span>skills: {e.skills[0]}</span>
              <span>sector: {e.categorie.categorie}</span>

              <button className={styles.btnApply}>Apply</button>
            </div>
          );
        })
      ) : (
        <span>No jobs until now ...</span>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const id = context.params.cat_id;

  const res = await axios.get(`http://localhost:5000/jobs/${id}`);

  console.log("hello", res.data);

  return { props: { data: res.data.data } };
}

export default Jobs;
