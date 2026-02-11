import { useState } from "react";
import { useEffect } from "react";
import { UserInfo } from "./UserInfo";

export const CurrentUserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/current-user", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userData = await response.json();
      setUser(userData);
    };
    fetchUser();
  }, []);

  return <div>{user ? <UserInfo user={user} /> : <p>Loading...</p>}</div>;
};
