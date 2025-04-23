import { useEffect, useState } from "react";

const useForceRender = (dependencies = []) => {
  const [key, setKey] = useState(1);

  useEffect(() => {
    setKey(key + 1);
  }, dependencies);
};
export default useForceRender;
