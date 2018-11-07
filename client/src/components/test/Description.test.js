/* eslint-env jest */
/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { shallow } from 'enzyme';
import Description from '../Description';

describe('<Description />', () => {
  it('renders paragraphs', () => {
    const wrapper = shallow(<Description />);
    expect(wrapper.exists('p')).toBe(true);
  });
});
