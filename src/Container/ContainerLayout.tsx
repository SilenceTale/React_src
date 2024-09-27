import { CSSProperties } from "react";
import { championRankingList } from ".Data";
import Ranking from "../Ranking/Ranking";
import Container from "./Container";
const ContainerLayout = () => {
  const containerStyle: CSSProperties = {
    width: "1080px",
    margin: "8px auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  };
  return (
    <main style={containerStyle}>
      <section>
        {championRankingList.map((v, i) => {
          return <Container></Container>;
        })}{" "}
      </section>
    </main>
  );
};
export default ContainerLayout;
