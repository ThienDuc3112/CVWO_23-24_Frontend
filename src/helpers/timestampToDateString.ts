export const convertTimestamp = (timestamp: string) => {
  return new Date(timestamp).toLocaleDateString("en-US", {
    year: "2-digit",
    day: "2-digit",
    month: "short",
  });
};
