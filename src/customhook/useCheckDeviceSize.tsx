import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDeviceSize } from "../redux/root";

function useCheckDeviceSize() {
  const dispatch = useDispatch();
  const changeDeviceSize = () => {
    dispatch(
      getDeviceSize(
        (() => ({
          deviceWidth: window.innerWidth,
          deviceHeight: window.innerHeight,
        }))()
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
