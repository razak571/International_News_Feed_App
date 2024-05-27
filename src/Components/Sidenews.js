import React, { Component } from "react";
import Singleside from "./Singleside";
import conf from "../conf/conf";
import Error from "./Error";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
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
          sidenews: data.articles,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.sidenews.map((item) => (
        <Singleside key={item.url} item={item} />
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
