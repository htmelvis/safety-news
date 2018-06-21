import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AppContainer from './containers/app-container';
import NewsContainer from './containers/news-container';

const Loader = () => (
  <div className="Loader">LOADING...</div>
)
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res);
      this.setState({stories: res.data, isLoaded: true });
    })
  }
  render(){
    return (
      <div>
        {this.state.isLoaded ?
          (
            <AppContainer>
              <NewsContainer stories={this.state.stories} />
            </AppContainer>
          ) : (
            <Loader />
          )
        }
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'))

