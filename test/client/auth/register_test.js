/* global describe, it */
import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import Register from '../../../src/components/auth/Register';

describe('register tests', () => {
  it('should render 5 inputs and 1 button', done => {
    const wrapper = shallow(<Register />);
    expect(wrapper.find('input').length).to.equal(5);
    expect(wrapper.find('button').length).to.equal(1);
    done();
  });
});
