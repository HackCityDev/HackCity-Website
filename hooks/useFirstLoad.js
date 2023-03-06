import { useEffect } from "react";
import useSessionStorage from "./useSessionStorage";

const useFirstLoad = () => {
  const [firstLoad, setFirstLoad] = useSessionStorage("firstLoad", true);

  useEffect(() => {
    if (typeof window !== "undefined" && firstLoad) {
      setTimeout(() => {
        setFirstLoad(false);
      }, 300);
    }
  }, [firstLoad, setFirstLoad]);

  return firstLoad;
};

export default useFirstLoad;
