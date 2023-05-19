export const getLinkStyle = (filterName, name) => {
  return {
    fontWeight: filterName === name ? "bold" : "normal",
  };
};
