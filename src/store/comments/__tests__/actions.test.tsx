import { SaveComment, SAVE_COMMENT } from "../actions";

describe('saveComment', () => {

    // No need to test typing as this app uses TypeScript

    it('has the correct payload', () => {
        const comment = "New Comment";
        const action = SaveComment(comment);

        expect(action.payload).toEqual(comment);
    })
})