import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deviceSize, isMobile } from "../redux/root";

function useDeviceInfo() {
  const dispatch = useDispatch();
  const detectingDevice = () => {
    if (
      window.navigator.userAgent.match(
        /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i
      ) != null ||
      window.navigator.userAgent.match(/LG|SAMSUNG|Samsung/) != null
    ) {
      dispatch(isMobile({ isMobile: true }));
    } else {
      dispatch(isMobile({ isMobile: false }));
    }
  };

  const changeDeviceSize = () => {
    dispatch(
      deviceSize(
        (() => ({
          deviceWidth: window.innerWidth,
          deviceHeight: window.innerHeight,
        }))()
      )
    );
  };

  useEffect(() => {
    changeDeviceSize();
    detectingDevice();
    window.addEventListener("resize", changeDeviceSize);
    return () => {
      changeDeviceSize();
      detectingDevice();
      window.removeEventListener("resize", changeDeviceSize);
    };
  });
}

export default useDeviceInfo;
