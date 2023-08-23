import './App.css';
import React, { useState } from 'react'

function App() {

 //作成ボタンをクリックしたら、一覧に表示させるuseState
   const [todos, setTodos] = useState([
    { id: 1, title: '買い物に行く', status: 'done' },
    { id: 2, title: '子どものお迎え', status: 'notStarted' },
    { id: 3, title: '企画書の提出', status: 'inProgress' }
  ])

  // inputにtextを入力するuseState
  const [todoTitle, setTodoTitle] = useState('')

  //新しく作成するtodoに持たせるidをstateで管理する準備
  const [todoId, setTodoId] = useState(todos.length + 1)

  //編集中かどうかのstate
  const [isEditable, setIsEditable] = useState(false)

  //編集したいtodoのidの状態
  const [editId, setEditId] = useState('')

  //新しいタイトルのstateを定義してinputと紐づけ
  const [newTitle, setNewTitle] = useState('')

  const handleAddFormChanges = (e) => {
    setTodoTitle(e.target.value)
  }

  const resetFormInput = () => {
    setTodoTitle('')
  }

  const handleAddTodo = () => {
    // 問題1. 新規todoにステータスプロパティを持たせよう
    // ここまで
    setTodoId(todoId + 1)
    resetFormInput()
  }

  const handleDeleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo !== targetTodo))
  }

  const handleOpenEditForm = (todo) => {
    setIsEditable(true)
    setEditId(todo.id)
    setNewTitle(todo.title)
  }

  const handleEditFormChange = (e) => {
    setNewTitle(e.target.value)
  }

  const handleCloseEditForm = () => {
    setIsEditable(false)
    setEditId('')
  }

  const handleEditTodo = () => {
    const newArray = todos.map((todo) =>
      todo.id === editId ? { ...todo, title: newTitle } : todo
    )
    setTodos(newArray)
    setNewTitle('')
    setEditId()
    handleCloseEditForm()
  }

  return (
    <>
      {isEditable ? (
        <div>
          <input
            type="text"
            label="新しいタイトル"
            value={newTitle}
            onChange={handleEditFormChange}
          />
          <button onClick={handleEditTodo}>編集を保存</button>
          <button onClick={handleCloseEditForm}>キャンセル</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            label="タイトル"
            value={todoTitle}
            onChange={handleAddFormChanges}
          />
          <button onClick={handleAddTodo}>作成</button>
        </div>
      )}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            {/* 問題2. todoの隣にセレクトボックスを追加しよう */}

            {/* ここまで */}
            <button onClick={() => handleOpenEditForm(todo)}>編集</button>
            <button onClick={() => handleDeleteTodo(todo)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;
