import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();

  const { showMessages } = useMessage();
  const [loading, setLoading] = useState(false);
  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      if (res.data) {
        showMessages({title: "ログインしました", status: "success"})
        history.push("/home")
      } else {
        showMessages({title: "ユーザーが見つかりません", status: "error"})
      }
    })
    .catch(() => showMessages({title: "ユーザーが見つかりません", status: "error"}))
    .finally(() => setLoading(false))
  }, [history, showMessages]);
  return { login, loading }
}