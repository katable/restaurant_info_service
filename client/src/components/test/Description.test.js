import React from 'react';
import { shallow } from 'enzyme';
import Description from '../Description.jsx';

describe('<Description />', () => {
  it('renders paragraphs', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper.exists('p')).toBe(true);
  });
});
