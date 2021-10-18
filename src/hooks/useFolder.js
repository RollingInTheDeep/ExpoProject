/* External dependencies */
import { useState, useEffect } from "react";

/* Internal dependencies */
import { getFolderAPI } from "../api/folderAPI";

function useFolder({ userId }) {
  const [folderList, setFolderList] = useState([]);

  useEffect(() => {
    handleFolderList();
  }, []);

  const handleFolderList = function () {
    getFolderAPI({ userId }).then((result) => {
      setFolderList(result.data);
    });
  };

  function onCreate() {
    handleFolderList();
  }

  function onRemove(folderId) {
    setFolderList(folderList.filter((folder) => folder.folderId !== folderId));
  }

  return { folderList, onCreate, onRemove };
}

export default useFolder;
