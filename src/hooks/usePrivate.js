/* External dependencies */
import { useState, useEffect } from "react";

/* Internal dependencies */
import { getPrivateArticleAPI } from "../api/privateAPI";

function usePrivate() {
  const [privateArticleList, setPrivateArticleList] = useState([]);

  useEffect(() => {
    getPrivateArticleAPI({ folderId: 1 }).then((result) => {
      setPrivateArticleList(result.data);
    });
  }, []);
  return privateArticleList;
}

export default usePrivate;
