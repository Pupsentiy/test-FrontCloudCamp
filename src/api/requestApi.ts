import { BASE_URL } from "../core/constants/constants";
import { TForm } from "../store/types/store.types";

export const fetchPostForm = async (data: TForm) => {
  const response = await fetch(`${BASE_URL}/content/v1/bootcamp/frontend`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });

  return await Promise.all([response, response.json()]);
};
