/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
// style ={{color:item.done?'gray':'initial'}}
function TodoItem( {item,key,setItems} ) {
  
  return (
     <label className="panel-block"  >
            <input type="checkbox" onChange = {
              (e) => e.target.checked ===true?setItems({...item,done:true}):setItems({...item,done:false})
            }/>
         <span style ={{color:item.done?'gray':'initial'}}> {item.text}</span>  
        </label>
  );
};




export default TodoItem;