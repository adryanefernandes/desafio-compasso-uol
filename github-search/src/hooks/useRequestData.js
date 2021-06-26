import { useEffect, useState } from "react";
import axios from 'axios'
import { BASE_URL } from "../axiosConfig/baseUrl";

export function useRequestData(initialState, FINAL_URL){
  const [data, setData] = useState(initialState)

  useEffect(() => {
    axios.get(`${BASE_URL}${FINAL_URL}`)
    .then((res) => {
      setData(res.data)
    }).catch((err) => {
      alert(err.data.message)
      console.error(err.data.message)
    })
  }, [FINAL_URL])

  return data
}
