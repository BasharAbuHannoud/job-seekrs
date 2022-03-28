import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);

  const router = useRouter();
  /******************************************* */
  const toggleModalsignUp = () => {
    setModal(!modal);
  };
  /************************************* */

  const signup = async () => {
    3;
    const userInfo = {
      name,
      email,
      password,
      gender,
      age,
    };
    try {
      const res = await axios.post(`http://localhost:5000/users`, userInfo);
      if (res.data.success) {
        toggleModalsignUp();
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  /**************************************** */
  const login = async () => {
    // if (process.env.ADMIN_USER===email && process.env.ADMIN_PASS==password ){
    //   console.log("tses");
    //   router.push("/admin")
    // }
    try {
      const res = await axios.post(`http://localhost:5000/login`, {
        email,
        password,
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        router.push("/categories");
        console.log(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerLogin}>
        <h1>Login</h1>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button className={styles.btn} onClick={login}>
          Login
        </button>
        <span
          className={styles.signup}
          onClick={() => {
            toggleModalsignUp();
          }}
        >
          sign up
        </span>
      </div>

      {modal && (
        <div className={styles.modalSignUp}>
          <div
            onClick={toggleModalsignUp}
            className={styles.overlaySignUp}
          ></div>
          <div className={styles.modalContentSignUp}>
            <div className={styles.containerSginup}>
              <h1>Sign up</h1>
              <input
                placeholder="name"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <input
                placeholder="gender"
                type="text"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />

              <input
                placeholder="Age"
                type="text"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
              <input
                placeholder="email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                placeholder="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <button className={styles.btn_signup} onClick={signup}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
