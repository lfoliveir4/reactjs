// Este aquivo é referente a todas as ações compartilhadas por diferentes reducers
import API from 'goals-todos-api'


export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData(todos, goals) {
    return {
      type: RECEIVE_DATA,
      todos,
      goals,
    }
  }


export function handleInitalData() {
      return (dispatch) => {
        return Promise.all([
          API.fetchTodos(),
          API.fetchGoals()
        ]).then(([ todos, goals ]) => {
          dispatch(receiveData(todos, goals))
        })
      }
    }
