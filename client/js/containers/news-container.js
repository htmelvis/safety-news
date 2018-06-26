import React from 'react';

// JUST FOR MOCKING!
var fakeTags = ['Fall Hazards', 'Spectator Safety', 'Transportation Safety', 'Aerospace Safety', 'Safety Netting'];
function generateUniqTags(array){
  let tags;
  if (Math.floor(Math.random() * array.length) > 0) {
    tags = Math.floor(Math.random() * array.length);
  } else {
    tags = 1;
  }
  return tags;
}

const NewsContainer = (props) => (
  <div className="news-container container">
    <div className="row">
      <div className="column column-50">
        <h1 className="page-title">Your Latest Work Safety News</h1>
      </div>
      <div className="column column-50">
        <div className="float-right">
          <a href="#button" className="button button-outline button-active sort-control">Latest</a>
          <a href="#vsd" className="button button-outline sort-control">Most Popular</a>
        </div>
      </div>
    </div>
    <hr/>
    {/* Possible programmatically set limit via props?? */}
    { props.stories.slice(0, 10).map( (story, i) => {
      return (
        <div key={story + i} className="story story-card">
          <header>
            <h1><a href={ '#' + Math.floor(Math.random() * 30) * i + 40}>{story.title}</a></h1>
          </header>
          {/* <p>{story.body}</p> */}
          <footer>
            <ul className="story-controls">
              <li><a href="#">{ Math.floor(Math.random() * 20) * i + 40} votes</a></li>
              <li><a href="#">View Comments</a></li>
              <li><a className="tag" href="#">{fakeTags[generateUniqTags(fakeTags)]}</a></li>
              <li><a className="tag" href="#">{fakeTags[generateUniqTags(fakeTags)]}</a></li>
            </ul>
          </footer>
        </div>
      )
    })
    }
  </div>
);

export default NewsContainer;