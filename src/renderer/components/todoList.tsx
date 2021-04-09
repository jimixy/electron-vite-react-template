import React, { useState } from 'react'
import {
  todoListState,
  TItem,
  filteredTodoListState
} from '@/renderer/store/ToDoList'
import { useRecoilState, useRecoilValue } from 'recoil'
import TodoItemCreator from './todoItemCreator'
import TodoItem from './todoItem'
import TodoListStats from './todoListStats'
import TodoListFilters from './todoListFilters'

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
