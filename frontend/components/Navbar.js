import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = ({ data }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  console.log("NavBar", data);

  const searchByCategorie = () => {
    data.find((e, i) => {
      if (search.toLocaleLowerCase() === e.categorie.toLocaleLowerCase()) {
        setSearch("");
        router.push(`/categories/${e._id}`);
      } else {
        console.log("fales");
      }
    });
  };
  return (
    <>
      <nav>
        <div className="logo">
          <h1>Job Seekrs</h1>
        </div>

        <input
          className="search"
          placeholder="search job"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
        />
        <button onClick={searchByCategorie}>Search</button>
        <Link href="/">
          <a
            onClick={() => {
              localStorage.clear();
            }}
          >
            Logout
          </a>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
