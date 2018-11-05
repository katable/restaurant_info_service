import React from 'react';
import Title from './Title.jsx';
import InfoMenu from './InfoMenu.jsx';
import TopTags from './TopTags.jsx';
import Description from './Description.jsx';
import RestaurantDetails from './RestaurantDetails.jsx';
import PrivateDining from './PrivateDining.jsx';
import styles from '../scss/base.scss';

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
      expandContent: false,
    };
    this.toggleDescriptionExpand = this.toggleDescriptionExpand.bind(this);
    this.toggleContentExpand = this.toggleContentExpand.bind(this);    
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

  toggleDescriptionExpand() {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded,
    });
  }

  toggleContentExpand() {
    const { expandContent } = this.state;
    this.setState({
      expandContent: !expandContent,
    });
  }

  render() {
    const { restaurantInfo, expanded, expandContent } = this.state;
    return (
      <div id={styles.overviewSection}>
        <Title restaurantName={restaurantInfo.name} />
        <InfoMenu restaurantInfo={restaurantInfo} />
        <TopTags restaurantTags={restaurantInfo.tags.main} />
        <Description
          restaurantDescription={restaurantInfo.description}
          expanded={expanded}
          toggleDescriptionExpand={this.toggleDescriptionExpand}
        />
        <div>
          <div id={styles.details} className={expandContent ? styles.autoHeight : 'false'}>
            <RestaurantDetails restaurantInfo={restaurantInfo} />
            <PrivateDining privateDining={restaurantInfo.private_dining} />
            <div className={expandContent ? styles.hide : styles.transparent} />
          </div>
          <div id={styles.allDetailsButton} role="presentation" onClick={this.toggleContentExpand} className={expandContent ? styles.hideAllDetailsButton : 'false'}>View all details</div>
        </div>
      </div>
    );
  }
}

export default App;
