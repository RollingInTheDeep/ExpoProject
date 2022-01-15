/* External dependencies */
import { useState, useEffect } from "react";

/* Internal dependencies */
import { getFolderAPI } from "../api/folderAPI";

function useFolder({ userId }) {
  const [folderList, setFolderList] = useState([]);
  console.log(userId);

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

  function onRemove(selectedItem) {
    setFolderList(
      folderList.filter(
        (folder) =>
          !selectedItem.some(
            (selectedFolderId) => folder.folderId == selectedFolderId
          )
      )
    );
  }

  return { folderList, onCreate, onRemove };
}

export default useFolder;
