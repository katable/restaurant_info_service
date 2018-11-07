/* eslint-env jest */
/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import InfoMenu from '../InfoMenu';
import Stars from '../Stars';

describe('<InfoMenu />', () => {
  it('renders stars', () => {
    const wrapper = shallow(<InfoMenu />);
    expect(wrapper.containsMatchingElement(<Stars />)).toBe(true);
  });
});
