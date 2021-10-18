/* External dependencies */
import { useState, useEffect } from "react";

/* Internal dependencies */
import { getPrivateArticleAPI } from "../api/privateAPI";

function usePrivate({ folderId }) {
  const [privateArticleList, setPrivateArticleList] = useState([]);

  useEffect(() => {
    getPrivateArticleAPI({ folderId }).then((result) => {
      setPrivateArticleList(result.data);
    });
  }, []);
  return privateArticleList;
}

export default usePrivate;
