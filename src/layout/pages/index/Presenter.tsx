import React, { useMemo } from "react";
import styled from "@emotion/styled";
import {
  Box,
  CheckScore,
  CurGameState,
  TargetBoard,
  Text,
  Chart,
} from "../../../components";
import { boldFont, regularFont } from "../../../style/fonts/inedx";
import { PresenterProps } from "../../../type/pages/indexType";
import Layout from "../../default/Layout";

function Presenter(props: PresenterProps) {
  const { gameProgress, setGameProgress, handleStackingHit, dataForChart } =
    props;
  const { start, checkScore } = gameProgress;

  const containTexts = useMemo(() => {
    return (
      <TextsWrapper>
        <Text size={40} weight={boldFont}>
          Accurate Aim, Fast Hit
        </Text>
        <Text size={20} weight={regularFont}>
          Click the target to game start
        </Text>
      </TextsWrapper>
    );
  }, []);

  return (
    <Layout indexPage>
      <CurGameState
        gameProgress={gameProgress}
        setGameProgress={setGameProgress}
      />
      <Wrapper onMouseDown={handleStackingHit}>
        {!start && !checkScore && containTexts}
        {checkScore ? (
          <CheckScore setGameProgress={setGameProgress} />
        ) : (
          <TargetBoard
            gameProgress={gameProgress}
            handleStackingHit={handleStackingHit}
          />
        )}
      </Wrapper>
      <BoxWrapper>
        <Box>
          <Chart
            labelsForLineX={["1st", "2nd", "3rd", "4th", "5th"]}
            size={["600", "600"]}
            chartDatas={dataForChart}
            title="Recently 5 Games"
          />
          <Chart
            labelsForLineX={["1st", "2nd", "3rd", "4th", "5th"]}
            size={["600", "600"]}
            chartDatas={dataForChart}
            title="Recently 5 Games"
          />
        </Box>
      </BoxWrapper>
    </Layout>
  );
}

export default Presenter;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 48px);
  max-height: 500px;
  position: relative;
`;

const TextsWrapper = styled.div`
  text-align: center;
  height: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  p {
    margin: 0px;
  }
`;

const BoxWrapper = styled.div`
  width: 100%;
  height: 105vh;
  max-height: 600px;
`;
