import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( {setTodos} ) {

  return (
    <div className="panel-block">
      <input class="input is-primary" type="text" placeholder="Add to do" onKeyPress={(e) => {if(e.key ==='Enter'){
        setTodos(e.target.value);
      e.target.value = ''
    }
  }
}
        />
    </div>
  );
}

export default Input;
