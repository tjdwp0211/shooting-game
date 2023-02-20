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
          if (width < 768) return { fontSize: 8, chartLength: 10 };
          if (width < 1024) return { fontSize: 10, chartLength: 12 };
          else return { fontSize: 12, chartLength: 15 };
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
