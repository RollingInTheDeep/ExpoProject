/* External dependencies */
import { useState, useEffect } from "react";

/* Internal dependencies */
import { getPublicArticleAPI } from "../api/publicAPI";

function usePublic() {
  const [publicArticleList, setPublicArticleList] = useState([]);

  useEffect(() => {
    handlePublicList();
  }, []);

  const handlePublicList = function () {
    getPublicArticleAPI().then((result) => {
      setPublicArticleList(result.data);
    });
  };

  function onCreatePublic() {
    handlePublicList();
  }
  return { publicArticleList, onCreatePublic };
}

export default usePublic;
