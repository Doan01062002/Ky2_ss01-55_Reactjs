import React, { useReducer } from 'react';

// Định nghĩa interface Todo để quản lý kiểu dữ liệu của công việc
interface Todo {
  id: number;
  name: string;
  state: boolean;
}

// Định nghĩa interface State để quản lý kiểu dữ liệu của state
interface State {
  todos: Todo[];
  isLoading: boolean;
  todo: Todo;
}

// Khởi tạo state ban đầu
const initial: State = {
  todos: [], // Mảng các công việc
  isLoading: false, // Trạng thái tải
  todo: {
    id: 0, // ID của công việc hiện tại
    name: "", // Tên công việc hiện tại
    state: false, // Trạng thái của công việc hiện tại
  },
};

// Định nghĩa hàm reducer để xử lý các hành động và cập nhật state
const reducer = (state: State, action: { type: string; payload: any }): State => {
  switch (action.type) {
    case "CHANGE_INPUT":
      // Cập nhật giá trị name của công việc hiện tại
      return { ...state, todo: { ...state.todo, name: action.payload } };
    case "ADD_TODO":
      // Thêm công việc mới vào danh sách todos và reset name của công việc hiện tại
      return {
        ...state,
        todos: [
          ...state.todos,
          { ...action.payload, id: Math.floor(Math.random() * 1000000000 + new Date().getMilliseconds()) }
        ],
        todo: { ...state.todo, name: "" },
      };
    case "DELETE_TODO":
      // Xóa công việc khỏi danh sách todos
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

// Component chính
export default function UseReducerAdvanced() {
  // Khai báo state và dispatch từ useReducer
  const [state, dispatch] = useReducer(reducer, initial);

  // Hàm xử lý khi thay đổi giá trị của input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value; // Lấy giá trị từ input
    dispatch({ type: "CHANGE_INPUT", payload: inputValue }); // Dispatch hành động CHANGE_INPUT
  };

  // Hàm thêm công việc mới
  const addTodo = () => {
    dispatch({ type: "ADD_TODO", payload: state.todo }); // Dispatch hành động ADD_TODO
  };

  // Hàm xóa công việc
  const deleteTodo = (id: number) => {
    dispatch({ type: "DELETE_TODO", payload: id }); // Dispatch hành động DELETE_TODO
  };

  return (
    <div>
      <h1>UseReducerAdvanced</h1>
      {/* Input để nhập tên công việc */}
      <input onChange={handleChange} type="text" value={state.todo.name} />
      {/* Button để thêm công việc */}
      <button onClick={addTodo}>Thêm công việc</button>
      <p>Danh sách công việc</p>
      <ul>
        {/* Hiển thị danh sách công việc */}
        {state.todos.map((item: Todo, index: number) => (
          <li key={item.id}>
            {item.name}
            {/* Button để xóa công việc */}
            <button onClick={() => deleteTodo(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
