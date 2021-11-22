import React from 'react';
import axios from 'axios'
import { runSaga } from '@redux-saga/core';
import { createRandomTodos } from 'helpers/createrandomTodos';
import { fetchTodos } from 'store/ducks/task/sagas';




jest.mock("axios");

describe('Testing sagas', () => {
    it("should test makeFetchTodosRequest saga", async () => {
        const randomTodos = createRandomTodos();
      
        axios.get.mockResolvedValue({ data: randomTodos });
      
        const dispatched = [];
        await runSaga(
          {
            dispatch: (action) => dispatched.push(action),
          },
          fetchTodos
        ).toPromise();
      
        expect(dispatched[0].type).toEqual("SHOW_LOADING");
      
        expect(dispatched[1].type).toEqual("TODOS_FETCHED");
        expect(dispatched[1].data.todos).toEqual(randomTodos);
      });
})