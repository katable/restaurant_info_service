import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title.jsx';
import InfoMenu from './components/InfoMenu.jsx';
import TopTags from './components/TopTags.jsx';
import Description from './components/Description.jsx';
import RestaurantDetails from './components/RestaurantDetails.jsx';
import PrivateDining from './components/PrivateDining.jsx';
import './scss/base.scss';

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
          map: '',
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
      expanded: false,
    };
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  componentDidMount() {
    this.getRestaurantInfo();
  }

  getRestaurantInfo() {
    fetch('/restaurant/profile/17')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          restaurantInfo: json,
        });
      });
  }

  toggleExpand() {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  }

  render() {
    const { restaurantInfo } = this.state;
    const { expanded } = this.state;
    return (
      <div id="overview-section">
        <Title restaurantName={restaurantInfo.name} />
        <InfoMenu restaurantInfo={restaurantInfo} />
        <TopTags restaurantTags={restaurantInfo.tags.main} />
        <Description
          restaurantDescription={restaurantInfo.description}
          expanded={expanded}
          toggleExpand={this.toggleExpand}
        />
        <RestaurantDetails restaurantInfo={restaurantInfo} />
        <PrivateDining privateDining={restaurantInfo.private_dining} />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
