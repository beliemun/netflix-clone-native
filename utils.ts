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

export const getMedia = (
  media: IMovie | IShow,
  mediaType: IMediaType
): IMedia => {
  const newMedia = {
    id: media.id,
    mediaType: "",
    title: "",
    date: "",
    overview: media.overview,
    vote_average: media.vote_average,
    poster_path: media.poster_path,
    backdrop_path: media.backdrop_path,
  };
  if (mediaType === "movie") {
    const { title, release_date } = media as IMovie;
    newMedia.mediaType = "movie";
    newMedia.title = title;
    newMedia.date = release_date;
  } else {
    const { name, first_air_date } = media as IShow;
    newMedia.mediaType = "show";
    newMedia.title = name;
    newMedia.date = first_air_date;
  }
  return newMedia as IMedia;
};
