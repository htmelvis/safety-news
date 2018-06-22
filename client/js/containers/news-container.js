import React from 'react';

const NewsContainer = (props) => (
  <div className="news-container container">
    <h1>Your Latest News</h1>
    {/* Possible programmatically set limit via props?? */}
    { props.stories.slice(0, 10).map( (story, i) => {
      return (
        <div key={story + i} className="story story-card">
          <header>
            <h1>{story.title}</h1>
          </header>
          <p>{story.body}</p>
          <footer>
            <ul className="story-controls">
              <li><a href="#">{ Math.floor(Math.random() * 20) * i + 40} votes</a></li>
              <li><a href="#">View Comments</a></li>
              <li><a href="#">Suggestion?</a></li>
            </ul>
          </footer>
        </div>
      )
    })
    }

    {/* var film = this.props.data.slice(0, 5).map((item) => {
    }); */}


  </div>
);

export default NewsContainer;