import React, { Component } from "react";
import NewSingle from "./NewSingle";
import conf from "../conf/conf";
import Error from "./Error";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=${conf.newsAPIUrl}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      })
      .catch((error) => {
        console.log("indside");
        this.setState({
          error: true,
        });
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.news.map((item) => (
        <NewSingle key={item.url} item={item} />
      ));
    } else {
      <Error />;
    }
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
