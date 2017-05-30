import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Header from './Header';

describe('<Header />', () => {
  it('renders a H1 tag', () => {
    expect(shallow(<Header />).find('nav')).to.have.length(1);
  });
});
