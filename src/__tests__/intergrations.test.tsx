import React from "react";
import { mount, ReactWrapper } from "enzyme";
import Root from "../Root";
import App from "../views/App";

it('can fetch a list of comments and display them', () => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )

    wrapped.find('.fetch-comments').simulate('click');

    expect(wrapped.find('li').length).toEqual(500);
});