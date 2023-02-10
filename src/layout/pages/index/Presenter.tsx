import React from "react";
import Layout from "../../default/Layout";
import { RecentlyGames, UserInteraction } from "./elements";
import { PresenterProps } from "../../../type/pages/indexType";

function Presenter(props: PresenterProps) {
  const { dataForChart } = props;

  return (
    <Layout indexPage>
      <UserInteraction {...props} />
      <RecentlyGames dataForChart={dataForChart} />
    </Layout>
  );
}

export default Presenter;
