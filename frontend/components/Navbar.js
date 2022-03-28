import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [token, setToken] = useState(true)

  useEffect(() => {
    const tokenStorage = localStorage.getItem("token");
    if (tokenStorage) {
      // setToken(tokenStorage);
    }
  }, []);

  return (
    <>
      {token ? (
        <nav>
          <div className="logo">
            <h1>Job Seekrs</h1>
          </div>

          <input className="search" placeholder="search job" />
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
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
