/* eslint-env jest */
/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import RestaurantDetails from '../RestaurantDetails';

describe('<RestaurantDetails />', () => {
  it('has a prop restaurantInfo', () => {
    const wrapper = shallow(<RestaurantDetails />);
    expect.objectContaining(wrapper.props().restaurantInfo);
  });
});
