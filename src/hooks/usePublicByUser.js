/* External dependencies */
import { useState, useEffect } from "react";

/* Internal dependencies */
import { getPublicArticleByUserAPI } from "../api/publicAPI";

function usePublicByUser({ userId }) {
  const [publicArticleList, setPublicArticleList] = useState([]);

  useEffect(() => {
    handlePublicList();
  }, []);

  const handlePublicList = function () {
    getPublicArticleByUserAPI({ userId }).then((result) => {
      setPublicArticleList(result.data);
    });
  };

  function onCreate() {
    handlePublicList();
  }
  return { publicArticleList, onCreate };
}

export default usePublicByUser;
