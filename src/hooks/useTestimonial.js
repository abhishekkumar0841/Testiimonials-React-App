import { useState } from "react";
import data from '../data'

function useTestimonial() {
  const [index, setIndex] = useState(0);

  function leftHandler() {
    if (index - 1 < 0) {
      //if user try to go index - 1 then the value is negative then i set the index to length of data
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightHandler() {
    if (index + 1 > data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomNum = Math.floor(Math.random() * data.length);
    setIndex(randomNum);
  }

  return [index, data, leftHandler, rightHandler, surpriseHandler];
}

export default useTestimonial;
