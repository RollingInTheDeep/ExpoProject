/* External dependencies */
import { useState, useEffect } from "react";

/* Internal dependencies */
import { getFolderAPI } from "../api/folderAPI";

function useFolder() {
  const [folderList, setFolderList] = useState([]);

  useEffect(() => {
    getFolderAPI({ userId: 3 }).then((result) => {
      setFolderList(result.data);
    });
  }, []);
  return folderList;
}

export default useFolder;
