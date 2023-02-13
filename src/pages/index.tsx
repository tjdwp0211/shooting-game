import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pullTrigger } from "../redux/root";
import { GameProgress } from "../type/pages/indexType";
import Presenter from "../layout/pages/index/Presenter";
import useCheckStorageItems from "../customhook/useCheckStorageItems";
import { UseCheckStorageItems } from "../type/customhook/useCheckStorageItemsType";

function Home() {
  const dispatch = useDispatch();
  const [gameProgress, setGameProgress] = useState<GameProgress>({
    start: false,
    checkScore: false,
  });
  const [storageItems, setStorageItems] = useState<UseCheckStorageItems>();
  useEffect(() => {
    setStorageItems(useCheckStorageItems);
  }, []);

  const dataForChart = [
    {
      type: "bar" as "line",
      label: "Hit",
      data: storageItems && storageItems.recentlyTrys.makeHit,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      type: "bar" as "line",
      label: "Time To Clear",
      data: storageItems && storageItems.recentlyTrys.time,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgb(75, 192, 192)",
    },
  ];

  const { start, checkScore } = gameProgress;
  const handleStackingHit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!start && !checkScore)
      setGameProgress(prev => ({ ...prev, start: !prev.start }));
    else if (start) dispatch(pullTrigger(e.currentTarget.id === "hit"));
  };

  return (
    <Presenter
      gameProgress={gameProgress}
      setGameProgress={setGameProgress}
      handleStackingHit={handleStackingHit}
      dataForChart={dataForChart}
    />
  );
}

export default Home;
