/* External dependencies */
import { useState, useEffect } from "react";

/* Internal dependencies */
import { getPrivateArticleAPI } from "../api/privateAPI";

function usePrivate({ folderId }) {
  const [privateArticleList, setPrivateArticleList] = useState([]);

  useEffect(() => {
    handlePrivateList();
  }, []);

  const handlePrivateList = function () {
    getPrivateArticleAPI({ folderId }).then((result) => {
      setPrivateArticleList(result.data);
    });
  };

  function onCreate() {
    handlePrivateList();
  }
  return { privateArticleList, onCreate };
}

export default usePrivate;
