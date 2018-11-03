import React from 'react';
import { shallow } from 'enzyme';
import RestaurantDetails from '../RestaurantDetails.jsx';

describe('<RestaurantDetails />', () => {
  it('has a prop restaurantInfo', () => {
    const wrapper = shallow(<RestaurantDetails />);
    expect.objectContaining(wrapper.props().restaurantInfo);
  });
});
