import {} from "react";

export const trimText = (text: string, limit: number) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

export const formatDate = (date: string) => {
  const theDate = new Date(date);
  return theDate.toLocaleDateString("ko", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
