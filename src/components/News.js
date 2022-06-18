import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  //
  const capatalized = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const update = async () => {
    props.setprogress(10);
    console.log("componentDidMout");

    const url = `https://api.thenewsapi.com/v1/news/all?language=hi,en&locale=${props.country}&categories=${props.category}&page=1&limit=${props.pageSize}&api_token=67n8eepdgVBDP5G3rlEewV8oSJLbL3Kiyz5x9otR`;

    setloading(true);
    let dat = await fetch(url);
    props.setprogress(30);
    let parsedata = await dat.json();
    props.setprogress(50);
    console.log(parsedata);
    setarticles(parsedata.data);
    settotalResults(parsedata.totalResults);
    setloading(false);

    props.setprogress(100);
  };

  useEffect(() => {
    update();
    document.title = `${capatalized(props.category)} - Abnews app`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = async () => {
    props.setprogress(10);
    setpage(page + 1);

    const url = `https://api.thenewsapi.com/v1/news/all?language=hi,en&locale=${props.country}&categories=${props.category}&page=${page}&limit=${props.pageSize}&api_token=67n8eepdgVBDP5G3rlEewV8oSJLbL3Kiyz5x9otR`;
    setloading(true);

    let dat =await fetch(url);
    props.setprogress(30);
    let parsedata = await dat.json();
    props.setprogress(50);
    setpage(page + 1);
    console.log(parsedata)
    setarticles(articles.concat(parsedata.data));
    settotalResults(parsedata.totalResults);
    setloading(false);

    props.setprogress(100);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "60px 0px" }}>
        News Top {capatalized(props.category)} Headlines From - Category
      </h1>

      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <Newsitem
                    author={element.author}
                    date={element.published_at}
                    Title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 99)
                        : ""
                    }
                    imgurl={element.image_url}
                    newsurl={element.url}
                    sourse={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
