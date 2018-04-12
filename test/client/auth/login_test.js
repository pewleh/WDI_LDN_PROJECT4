/* global describe, it */
import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import Login from '../../../src/components/auth/Login';

describe('login tests', () => {
  it('should render 2 inputs and 1 button', done => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).to.equal(2);
    expect(wrapper.find('button').length).to.equal(1);
    done();
  });
});
