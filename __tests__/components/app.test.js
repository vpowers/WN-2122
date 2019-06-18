import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../../src/components/App';

describe('<App />', () => {
    let component, editButton, deleteButton, props;

    it('it should render App', () => {
        component = shallow(<App />);
        expect(toJson(component)).toMatchSnapshot();
    });
});