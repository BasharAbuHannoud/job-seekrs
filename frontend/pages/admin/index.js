import axios from "axios";
import { useState } from "react";
import styles from "../../styles/admin.module.css";
import Link from "next/link";
import Image from "next/image";

const Admin = () => {
  return (
    <div className={styles.container}>
      <h1> Admin panel</h1>
      {/* <Image src="/assets/admin.png" layout="fill" objectFit="cover" /> */}
      <div className={styles.rod_panel}>
        <Link href="admin/addCat">
          <span>Add Categorie</span>
        </Link>
        <Link href="admin/add">
          <span>Add Job</span>
        </Link>

        <Link href="admin/allJobs">
          <span>All Jobs</span>
        </Link>
      </div>
    </div>
  );
};

export default Admin;
