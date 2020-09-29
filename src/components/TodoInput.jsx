import React, {useState} from 'react'
import uuid from 'uuid/v4'
import {useDispatch} from 'react-redux'

///객체 = 기능 + 속성
// 함수 = 기능
//함수 = 객체 - 속성
// 속성 = 변수 + 상수
// state, 변수 = 객체 - 함수
// 

const TodoInput = () => {
    // todo가 CRUD 대상(object) -> 속성이 됌
    // es6 이전 모드 var     이후 let, const 두가지로 변수 상수 declare
    //함수는 const타입 
    // JSON = JavaScript Object Notation
    // object { 'a' : 'a' 면 a로 써줌,  '':'' , b : ()=>{} }, array []  {}기능도 될수있고 속성도될수있어

                                 //todo의 타입결정
    const [todo, setTodo] = useState('')  //변수랑 펑션 묶여있어서 객체.. [] 니까 const로  //useState   todo 도 엄밀히 말하면 {] 안에 있어야.. setTodo도 엄밀히 말하면 :()=>{}
    const dispatch = useDispatch()          //얘가 reducers랑 연결고리
    const submitForm = e => { // e = 이벤트   얘는 이벤트 처리하는 녀석
        e.preventDefault() //default 기능을 막고, 내가 정의한 기능을 구현해라
        const newTodo = {   //얘는 submitform안에서만 쓰는거야, 지역변수... addtodo처럼 밖에쓰면 속성
            todoId : uuid(),
            name : todo,  // 저절로 넘어와  이런게 변수
            complete : false
        }
        addTodo(newTodo)
        setTodo("")
    }
    const handleChange = e => {
        e.preventDefault()
        setTodo(e.target.value)  //target 은 말 치는 박스,  value 는 그 안에 value
    }
    const addTodo = todo => {
        dispatch(addTodoAction(todo))  //얘는 디스패치란 다른 공간에 얘를 전송해  //영속적으로 저장할곳 state -> api -> db
        
    }

    ///// 요 2가지 형태만 있어
    //handleChange이벤트..클릭이나 뭐 이런 액션에 의해 움직이는건 전부 이벤트
    return <> 
    <h1>할일 등록</h1>
    <form onSubmit={submitForm} method='POST'>
        <div>
            <input type = 'text' name = 'todo' onChange={handleChange} /> <br/>    
            <input type = 'submit' value = 'ADD TODO'/>
        </div>
    </form>
    </>    
}

export default TodoInput 




// 얘는 newjss
// import React from 'react'
// const TodoInput = () => {
//     return <> </>    
// }

// export default TodoInput 