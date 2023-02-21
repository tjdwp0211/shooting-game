import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resizing } from "../redux/root";

function useCheckDeviceSize() {
  const dispatch = useDispatch();
  const changeDeviceSize = () => {
    dispatch(
      resizing(
        (() => {
          const { innerWidth: width } = window;
          if (width < 768) return 8;
          if (width < 1024) return 10;
          else return 12;
        })()
      )
    );
  };

  useEffect(() => {
    changeDeviceSize();
    window.addEventListener("resize", changeDeviceSize);
    return () => {
      changeDeviceSize();
      window.removeEventListener("resize", changeDeviceSize);
    };
  });
}

export default useCheckDeviceSize;
