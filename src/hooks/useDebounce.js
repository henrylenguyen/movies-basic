import { useEffect, useState } from "react";

export default function useDebounce(initializeValue="",delay=1000){
  //tạo 1 state chứa debounce
  const [debounceValue, setDebounceValue] = useState(initializeValue);
  useEffect(() => {
    //Khởi tạo hàm timer để set lại giá trị ban đầu của debounce theo thời gian
    const timer = setTimeout(() => {
      setDebounceValue(initializeValue);
    }, delay);
  
    return () => {
      clearTimeout(timer)
    }
  }, [delay, initializeValue])
  return debounceValue;
}