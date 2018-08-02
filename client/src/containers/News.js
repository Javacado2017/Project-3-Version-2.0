
import React, { Component } from 'react';
import NewsArticle from '../components/NewsArticleWidget';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      data: [],
    }
  }

  componentDidMount(){
    const getData = () => {
      const url = '/api/newsArticles';

      fetch(url).then( r => r.json())
        .then((newsArticles) => {
          this.setState({
            data: newsArticles,
            fetchingData: false
          })
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getData();

  }

  render() {
    return (
        <div>
        {this.state.data.map((article, index) => {
            return <NewsArticle
                key={'news-article' + index}
                title={article.title}
                description={article.description}
                url={article.url}
                image={article.image}/>;
        })}
        </div>
    );
  }
}

export default News;
