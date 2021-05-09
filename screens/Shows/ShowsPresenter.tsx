import React from "react";
import Vertical from "../../components/Vertical";
import LoadingContainer from "../../components/LoadingContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import Horizontal from "../../components/Horizontal";
import { getMedia } from "../../utils";

interface IProps {
  shows: IShows;
  getData: () => Promise<void>;
}

const ShowsPresenter: React.FC<IProps> = ({ shows, getData }) => {
  const { loading, aringToday, onTheAir, topRated, popular } = shows;
  return (
    <LoadingContainer loading={loading} getData={getData}>
      <>
        <HorizontalSlider title={"Popular TV Shows"}>
          <>
            {popular.map((show) => (
              <Vertical key={show.id} {...getMedia(show, "show")} />
            ))}
          </>
        </HorizontalSlider>
        <HorizontalSlider title={"Top Rated TV Shows"}>
          <>
            {topRated.map((show) => (
              <Vertical key={show.id} {...getMedia(show, "show")} />
            ))}
          </>
        </HorizontalSlider>
        <List title="Airing Today">
          <>
            {aringToday.map((show) => (
              <Horizontal key={show.id} {...getMedia(show, "show")} />
            ))}
          </>
        </List>
      </>
    </LoadingContainer>
  );
};

export default ShowsPresenter;
