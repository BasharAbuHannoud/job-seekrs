import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/categ.module.css";

const Categories = ({ data }) => {
  console.log("categ", data);
  return (
    <div className={styles.container}>
      <h1>Categories ...</h1>
      <div className={styles.All_categ}>
        {data.map((e, i) => {
          return (
            <div className={styles.categ} key={i}>
              {e.categorie}

              <Link href={`/categories/${e._id}`}>
                <a>click</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
 
  const res = await axios.get(`http://localhost:5000/categorie`);

  return { props: { data: res.data.data } };
}

export default Categories;
