import { ThreeDots } from "react-loader-spinner";

export const Loader = () => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="#fbf8ff"
    ariaLabel="three-dots-loading"
    wrapperStyle={{ marginLeft: "auto", marginRight: "auto" }}
    wrapperClassName=""
    visible={true}
  />
);
