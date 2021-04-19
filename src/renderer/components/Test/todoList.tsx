import React, { useState } from 'react'
import { TItem, filteredTodoListState } from '@/renderer/store/TodoList'
import { useRecoilState, useRecoilValue } from 'recoil'

import TodoItem from './todoItem'
import TodoItemCreator from './todoItemCreator'
import TodoListFilters from './todoListFilters'
import TodoListStats from './todoListStats'

export default function Test() {
  const todoList = useRecoilValue(filteredTodoListState)
  //   const todoList = useRecoilValue(todoListState)
  //   console.log('1--todoList', todoList)
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem: TItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  )
}
