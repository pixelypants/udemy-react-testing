import React from "react";
import { mount, ReactWrapper } from "enzyme";
import Root from "../../Root";
import CommentBox from "../CommentBox";

let wrapped: ReactWrapper;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
})

it('shows a text area and two buttons', () => {

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the textarea', () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        })
        wrapped.update();
    });

    it('has a textarea thay users cam type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('should clear the textarea when the form is submitted', () => {
        wrapped.find('form').simulate('submit')
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});