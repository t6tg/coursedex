import React from "react";
import { CoffeeLoading } from "react-loadingg";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  tranfrom: "translate(-50% , -50%)",
  zIndex: "1",
  backgroudColor: "#fff",
};

const Loading = () => (
  <CoffeeLoading color={"#f16f24"} size={"large"} style={styles} />
);

export { Loading };
