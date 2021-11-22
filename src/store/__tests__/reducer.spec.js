import React from 'react';
import { shallow } from 'enzyme';
import reducers from 'store/ducks/task/reducers';




describe('Testing saga reducer', () => {
    it("should return initial state", () => {
        const initialState = {
            taskList: [],
            showError: false,
        }
        expect(reducers(undefined, {})).toEqual(initialState);
    });

    it("should handle ADD_TASK", () => {
        const initialState = {
            taskList: [],
            showError: false,
        }
        const type = "@task/ADD_TASK";

        const payload = []

        const action = { type, payload };

        const reducerReturnValue = reducers(initialState, action);

        expect(reducerReturnValue.taskList).toEqual([[]]);
    });


    it("should handle REMOVE_TASK_BY_ID", () => {
        const initialState = {
            taskList: [],
            showError: false,
        }
        expect(reducers(undefined, {})).toEqual(initialState);
    });

    it("should handle UPDATE_TASK_BY_ID", () => {
        const initialState = {
            taskList: [],
            showError: false,
        }
        const type = "@task/UPDATE_TASK_BY_ID";

        const data = { payload: { id: 1, completed: true } }

        const action = { type, data };

        const reducerReturnValue = reducers(initialState, action);

        expect(reducerReturnValue).toEqual({"showError": false, "taskList": []});
    });
});