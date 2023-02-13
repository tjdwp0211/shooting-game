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
    />
  );
}

export default Home;
