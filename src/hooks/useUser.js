/* External dependencies */
import { useState, useEffect } from "react";

/* Internal dependencies */
import { getPrivateInfoAPI } from "../api/userAPI";

function useUser({ userId }) {
  const [image, setImage] = useState(null);
  const [id, setId] = useState(null);
  const [pw, setPw] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    handleUserInfo();
  }, []);

  const handleUserInfo = function () {
    getPrivateInfoAPI({ userId }).then((result) => {
      setImage(result.data.image);
      setId(result.data.id);
      setPw(result.data.pw);
      setNickname(result.data.nickname);
      setDescription(result.data.description);
    });
  };

  return { image, id, pw, nickname, description };
}

export default useUser;
