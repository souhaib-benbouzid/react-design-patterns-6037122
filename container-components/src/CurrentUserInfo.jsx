import { useState } from "react";
import { useEffect } from "react";

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

  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return React.cloneElement(child, { user });
    }

    return child;
  });
};
