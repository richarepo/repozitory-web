import React, { useEffect } from 'react'
import { onScroll } from '../method';

const useAttachEvent = (firstSide: string, secondSide: string, scrollTime: number) => {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => onScroll(firstSide, secondSide, scrollTime),
      false
    );
    return () => {
      window.removeEventListener(
        "scroll",
        () => onScroll(firstSide, secondSide, scrollTime),
        false
      );
    };
  }, []);
};

export default useAttachEvent;