import React from "react";
import { mount, ReactWrapper } from "enzyme";
import Root from "../Root";
import App from "../views/App";

// TODO: Add an action before and after tests that sets isMocked flag

it('can fetch a list of comments and display them', () => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )

    wrapped.find('.fetch-comments').simulate('click');

    expect(wrapped.find('li').length).toBeGreaterThan(3);
});