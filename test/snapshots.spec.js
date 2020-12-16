/* global it, describe, expect, jest */

import React from 'react'; // eslint-disable-line no-unused-vars
import DefDateTime from '../src/DefDateTime';
import renderer from 'react-test-renderer';

// findDOMNode is not supported by the react-test-renderer,
// and even though this component is not using that method
// a dependency is probably using it. So we need to mock it
// to make the tests pass.
// https://github.com/facebook/react/issues/7371
jest.mock('react-dom', () => ({
    findDOMNode: () => {},
}));

// Mock date to get rid of time as a factor to make tests deterministic
// 2016-12-21T23:36:07.071Z
Date.now = jest.fn(() => 1482363367071);

it('everything default: renders correctly', () => {
    const tree = renderer.create(
        <DefDateTime />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('value: set to arbitrary value', () => {
    const tree = renderer.create(
        <DefDateTime value={new Date(Date.now)} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('defaultValue: set to arbitrary value', () => {
    const tree = renderer.create(
        <DefDateTime defaultValue={Date.now()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('initialValue: set to arbitrary value', () => {
    const tree = renderer.create(
        <DefDateTime initialValue={new Date(Date.now())} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe('dateFormat', () => {
    it('set to true', () => {
        const tree = renderer.create(
            <DefDateTime dateFormat={true} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('set to false', () => {
        const tree = renderer.create(
            <DefDateTime dateFormat={false} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('timeFormat', () => {
    it('set to true', () => {
        const tree = renderer.create(
            <DefDateTime timeFormat={true} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('set to false', () => {
        const tree = renderer.create(
            <DefDateTime timeFormat={false} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('input', () => {
    it('input: set to true', () => {
        const tree = renderer.create(
            <DefDateTime input={true} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('input: set to false', () => {
        const tree = renderer.create(
            <DefDateTime input={false} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('open', () => {
    it('set to true', () => {
        const tree = renderer.create(
            <DefDateTime open={true} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('set to false', () => {
        const tree = renderer.create(
            <DefDateTime open={false} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('viewMode', () => {
    it('set to days', () => {
        const tree = renderer.create(
            <DefDateTime viewMode={'days'} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it ('set to quarters', () => {
        const tree = renderer.create(
            <DefDateTime viewMode={'quarters'}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('set to months', () => {
        const tree = renderer.create(
            <DefDateTime viewMode={'months'} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('set to years', () => {
        const tree = renderer.create(
            <DefDateTime viewMode={'years'} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('set to time', () => {
        const tree = renderer.create(
            <DefDateTime viewMode={'time'} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

it('className: set to arbitraty value', () => {
    const tree = renderer.create(
        <DefDateTime className={'arbitrary-value'} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe('inputProps', () => {
    it('with placeholder specified', () => {
        const tree = renderer.create(
            <DefDateTime inputProps={{ placeholder: 'arbitrary-placeholder' }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('with disabled specified', () => {
        const tree = renderer.create(
            <DefDateTime inputProps={{ disabled: true }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('with required specified', () => {
        const tree = renderer.create(
            <DefDateTime inputProps={{ required: true }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('with name specified', () => {
        const tree = renderer.create(
            <DefDateTime inputProps={{ name: 'arbitrary-name' }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('with className specified', () => {
        const tree = renderer.create(
            <DefDateTime inputProps={{ className: 'arbitrary-className' }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

it('isValidDate: only valid if after yesterday', () => {
    const yesterday = DefDateTime.moment().subtract(1, 'day');
    const valid = (current) => current.isAfter(yesterday);
    const tree = renderer.create(
        <DefDateTime isValidDate={ valid } />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renderDay: specified', () => {
    const renderDay = (props, currentDate) => <td {...props}>{ '0' + currentDate.date() }</td>;
    const tree = renderer.create(
        <DefDateTime renderDay={renderDay} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renderMonth: specified', () => {
    const renderMonth = (props, currentDate) => <td {...props}>{ '0' + currentDate.date() }</td>;
    const tree = renderer.create(
        <DefDateTime renderMonth={renderMonth} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renderYear: specified', () => {
    const renderYear = (props, currentDate) => <td {...props}>{ '0' + currentDate.date() }</td>;
    const tree = renderer.create(
        <DefDateTime renderYear={renderYear} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
