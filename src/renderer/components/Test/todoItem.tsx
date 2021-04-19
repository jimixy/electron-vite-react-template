import { useRecoilState } from 'recoil'
import { todoListState, TItem } from '@/renderer/store/TodoList'

export default function TodoItem({ item }: { item: TItem }) {
  const [todoList, setTodoList] = useRecoilState<TItem[]>(todoListState)
  const index = todoList.findIndex((listItem) => listItem === item)

  const editItemText = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value
    })

    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete
    })

    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)

    setTodoList(newList)
  }

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

function replaceItemAtIndex(arr: Array<TItem>, index: number, newValue: TItem) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

function removeItemAtIndex(arr: Array<TItem>, index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}
