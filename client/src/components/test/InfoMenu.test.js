import React from 'react';
import { shallow } from 'enzyme';
import InfoMenu from '../InfoMenu.jsx';
import Stars from '../Stars.jsx';

describe('<InfoMenu />', () => {
  it('renders stars', () => {
    const wrapper = shallow(<InfoMenu />);
    expect(wrapper.containsMatchingElement(<Stars />)).toBe(true);
  });
});
