import { useState } from "react";

export function useInput(initialState){
  const [value, setValue] = useState(initialState)

  const handle = (event) => {
    setValue(event.target.value)
  }

  return [value, handle]
}