import React from 'react'

const TodoInput = () => {
    // todo가 CRUD 대상(object) -> 속성이 됌
    let [todo, setTodo] = useState(0)
    return <> 
    <h1>할일 등록</h1>
    <form action="">
        <div>
            <input type = 'text' name = 'todo'/> <br/>
            <input type = 'submit' value = 'SUBMIT'/>
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