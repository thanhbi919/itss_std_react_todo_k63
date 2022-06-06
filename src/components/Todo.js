import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);
  const [filter, setFilter] = React.useState('ALL');
 const displayItems = items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
  });
const setItems = (item) =>{
    const newItems = items.map((e)=>{
      if(e.key ===item.key)
      e=item;
      return e;
    })
  putItems(newItems);
}
const handleFilterChange = value => setFilter(value);
const setTodos = (text) =>{
  const newItem = {key:getKey(),text:text,done:false}
  putItems([...items,newItem])
}
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
       <Filter
        onChange={handleFilterChange}
        value={filter}
      />
      <Input setTodos = {setTodos}/>
      {items.map(item => (
        // <label className="panel-block">
        //     <input type="checkbox" />
        //     {item.text}
        // </label>
      <TodoItem item = {item} key = {item.key} setItems = {setItems} />
      ))}
      <div className="panel-block">
        {items.length} items
      </div>
      
    </div>
  );
}

export default Todo;