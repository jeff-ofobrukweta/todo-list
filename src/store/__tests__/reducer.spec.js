import React from 'react';
import { shallow } from 'enzyme';
import faker from 'faker'
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

        const payload = {
            completed: false,
            title: "testing aut here",
            userId: 1
        }

        const action = { type, payload };

        const reducerReturnValue = reducers(initialState, action);

        expect(reducerReturnValue.taskList[0]).toEqual({ ...payload, id: 1 });
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

        expect(reducerReturnValue).toEqual({ "showError": false, "taskList": [] });
    });

    it("should handle @task/ADD_TASK", () => {
        const type = "@task/ADD_TASK";
        const initialState = {
            taskList: [],
            showError: false,
        }

        // create random todos
        const taskList = [];
        Array.from(Array(faker.datatype.number(21)).keys()).forEach((idx) => {
            taskList.push({
                id: idx,
                title: faker.lorem.sentence(),
                completed: faker.datatype.boolean(),
                userId: idx,
            });
        });

        const actionData = {
            taskList
        }
        const action = {
            type,
            payload: actionData?.taskList
        };

        const reducerReturnValue = reducers({ ...initialState }, action);

        expect(reducerReturnValue.showError).toEqual(false);
        expect( reducerReturnValue.taskList.length).toEqual(taskList.length);

    });

});