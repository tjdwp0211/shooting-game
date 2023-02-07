import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { pullTrigger } from "../redux/root";
import { GameProgress } from "../type/pages/indexType";
import Presenter from "../layout/pages/index/Presenter";

function Home() {
  const dispatch = useDispatch();
  const [gameProgress, setGameProgress] = useState<GameProgress>({
    start: false,
    checkScore: false,
  });

  const dataForChart = [
    {
      type: "line" as "line",
      label: "Hit",
      data: [12, 12, 21, 123, 124, 3],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      type: "bar" as "line",
      label: "Time To Clear",
      data: [12, 12, 21, 123, 124, 3],
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
