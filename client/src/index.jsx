import React from 'react';
import ReactDOM from 'react-dom';
import './scss/base.scss';
import Title from './components/Title.jsx';
import InfoMenu from './components/InfoMenu.jsx';
import TopTags from './components/TopTags.jsx';
import Description from './components/Description.jsx';
import RestaurantDetails from './components/RestaurantDetails.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantInfo: {
        restaurant_id: 0,
        name: '',
        stars: 0,
        reviews: 0,
        price: 0,
        cuisine: [],
        description: '',
        style: '',
        tags: {
          main: [],
          additional: [],
        },
        hours: '',
        phone: '',
        website: '',
        payment: [],
        dress: '',
        chef: '',
        catering: '',
        private_party: {
          facilities: '',
          contact: '',
        },
        location: {
          street: '',
          city: '',
          state: '',
          zip: '',
          neighborhood: '',
          parking_details: '',
          public_transit: '',
          cross_street: '',
        },
        entertainment: '',
        specials: '',
        private_dining: '',
      },
    };
  }

  componentDidMount() {
    this.getRestaurantInfo();
  }

  getRestaurantInfo() {
    fetch('/restaurant/profile/1')
      .then(res => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          restaurantInfo: json,
        });
      });
  }

  render() {
    return (
      <div id="overview-section">
        <Title restaurantInfo={this.state.restaurantInfo} />
        <InfoMenu restaurantInfo={this.state.restaurantInfo} />
        <TopTags restaurantInfo={this.state.restaurantInfo} />
        <Description restaurantInfo={this.state.restaurantInfo} />
        <RestaurantDetails restaurantInfo={this.state.restaurantInfo} />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
