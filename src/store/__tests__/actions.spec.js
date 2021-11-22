import React from 'react';
import { shallow } from 'enzyme';
import { addTask, removeTaskById } from 'store/ducks/task';




describe('Testing saga actions', () => {
    it('should test add task action', () => {
        const payload = "testing todo";
        expect(addTask(payload).type).toEqual("@task/ADD_TASK")
        expect(addTask(payload).payload?.task).toEqual("testing todo");
    });

    it('should test remove task by id action', () => {
        expect(removeTaskById(1).type).toEqual("@task/REMOVE_TASK_BY_ID")
        expect(removeTaskById(1).payload).toEqual(1);
    });
});