import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export default class news extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capatalized = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    console.log("i'm  constructor from news component");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capatalized(this.props.category)} - Abnews app`;
  }

  async componentDidMount() {     
    this.props.setprogress(10);
    console.log("componentDidMout");

    
    const url = `https://api.thenewsapi.com/v1/news/all?language=hi,en&locale=${
      this.props.country}&categories=${
      this.props.category}&page=1&limit=${
       this.props.pageSize}&api_token=67n8eepdgVBDP5G3rlEewV8oSJLbL3Kiyz5x9otR`;

    this.setState({ loading: true });
    let dat = await fetch(url);
    this.props.setprogress(30);
    let parsedata = await dat.json();
    this.props.setprogress(50);
    console.log(parsedata);
    this.setState({
      articles: parsedata.data,
      totalResults: parsedata.totalResults,
      loading: false
    });
    this.props.setprogress(100);
  }

 
 

  fetchMoreData = async () => {
    this.props.setprogress(10);
      this.setState({
         page: this.state.page+1,
          
      })
      const url = `https://api.thenewsapi.com/v1/news/all?language=hi,en&locale=${
      this.props.country}&categories=${
      this.props.category}&page=${
      this.state.page}&limit=${
       this.props.pageSize}&api_token=67n8eepdgVBDP5G3rlEewV8oSJLbL3Kiyz5x9otR`;
      this.setState({ loading: true });
      let dat = await fetch(url);
      this.props.setprogress(30);
      let parsedata = await dat.json();
      this.props.setprogress(50);
  
      this.setState({
        page: this.state.page + 1,
        articles: this.state.articles.concat( parsedata.data),
        totalResults: parsedata.totalResults,
        loading: false,
      
      });
      this.props.setprogress(100);
  };

  render() {
    
    return (
      <>
      
        <h1 className="text-center" style={{ margin: "40px 0px" }}>
          News Top {this.capatalized(this.props.category)} Headlines From -
          Category
        </h1>

         {this.state.loading && <Spinner/>} 
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
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
  }
}
