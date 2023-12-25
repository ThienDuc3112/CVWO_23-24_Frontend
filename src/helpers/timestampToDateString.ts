export const convertTimestamp = (timestamp: number) => {
  return new Date(timestamp).toLocaleDateString("en-US", {
    year: "2-digit",
    day: "2-digit",
    month: "short",
  });
};
