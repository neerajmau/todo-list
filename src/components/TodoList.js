import React, { useState } from "react";
import style from "./todolist.module.scss";
import deleteicon from "../assets/delete.png";
import edit from "../assets/edit.png";
import Button from "./Button";
import * as actionTypes from "../actions/Index";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const dispatch = useDispatch();
  const myState = useSelector((store) => store.TodoListReducer);
  console.log({ myState });
  let todoList = JSON.parse(localStorage.getItem("todoList"));
  const [list, setList] = useState(todoList ? todoList : myState?.data);
  const [title, setTitle] = useState("");
  const addTitle = () => {
    if (title) {
      let newList = list;
      newList.push({ title: title, compalition: false, titleTogle: true });
      dispatch(actionTypes?.AddData(newList));
      setTitle("");
      saveLocalStorage(newList);
    }
  };
  const handleEdit = (index) => {
    let data = list;
    data[index].titleTogle = !data[index].titleTogle;
    saveLocalStorage(data);
    dispatch(actionTypes?.EditData(data));
    return;
  };
  const saveLocalStorage = (data) => {
    localStorage.setItem("todoList", JSON.stringify(data));
  };

  const handleDelete = (index) => {
    let data = list;
    data?.splice(index, 1);
    dispatch(actionTypes?.EditData(data));
  };
  return (
    <div className={style.container}>
      <div className={style.todo_container}>
        <div className={style.heading}>Todo List</div>

        <label className={style.title_lable}>Title</label>
        <div className={style.inputbox}>
          <div className={style.inputcontatiner}>
            <input
              type="text"
              placeholder="Add Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={style.button}>
            <Button type="add" onClick={(e) => addTitle(e)}>
              Add
            </Button>
          </div>
        </div>

        <div className={style.list}>
          {list?.length > 0 && (
            <div className={style.list_header}>
              <div>Title</div>
              <div></div>
            </div>
          )}
          <div className={style.list_cantainer}>
            {list?.map((e, index) => {
              return (
                <div className={style.list_data} key={index}>
                  <div>
                    {e?.titleTogle ? (
                      <>
                        <p className={style.title}>{e.title}</p>
                      </>
                    ) : (
                      <div className={style.edit_title}>
                        <input
                          type="text"
                          placeholder="Edit Title"
                          value={e.title}
                          onChange={(e) => {
                            let data = list;
                            data[index].title = e.target.value;
                            saveLocalStorage(data);
                            setList([...data]);
                          }}
                        />
                        <Button
                          type="add"
                          onClick={() => {
                            let data = list;
                            data[index].titleTogle = !data[index].titleTogle;
                            saveLocalStorage(data);
                            setList([...data]);
                          }}
                        >
                          Save
                        </Button>
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex" }}>
                    <input
                      type="checkbox"
                      id={`status${index}`}
                      className={style.vh}
                      checked={e.compalition}
                      onChange={() => {
                        let data = list;
                        data[index].compalition = !data[index].compalition;
                        saveLocalStorage(data);
                        dispatch(actionTypes?.CampliteData(data));
                      }}
                    />
                    <label
                      htmlFor={`status${index}`}
                      style={{
                        color: "black",
                        marginRight: "1rem",
                      }}
                      className={style.label}
                    >
                      {e.compalition ? "Completed" : "Incomplete"}
                    </label>
                  </div>
                  <div onClick={() => handleEdit(index)}>
                    <img
                      src={edit}
                      alt="editicon"
                      style={{ width: "1.5rem", cursor: "pointer" }}
                    />
                  </div>
                  <div onClick={() => handleDelete(index)}>
                    <img
                      src={deleteicon}
                      alt="deleteicon"
                      style={{ width: "1.5rem", cursor: "pointer" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
