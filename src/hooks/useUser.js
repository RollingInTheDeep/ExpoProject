/* External dependencies */
import { useState, useEffect } from "react";

/* Internal dependencies */
import { getPrivateInfoAPI } from "../api/userAPI";

function useUser({ userId }) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    handleUserInfo();
  }, []);

  const handleUserInfo = function () {
    getPrivateInfoAPI({ userId }).then((result) => {
      setImage(result.data.image);
      setName(result.data.name);
      setEmail(result.data.email);
      setNickname(result.data.nickname);
      setDescription(result.data.description);
    });
  };

  return { image, name, email, nickname, description };
}

export default useUser;
