import { useCallback, useState, useEffect } from 'react'
import "./App.css"
import CustomInput from "./CustomInput"

// function FancyBorder(props) {
//   return (
//   <div style={{ border: `2px solid ${props.color}`, margin: '4px' }}>
//   {props.children}
//   </div>
//   );
//   }
//   function WelcomeDialog() {
//   return (
//   <FancyBorder color="blue">
//   <h1>Welcome</h1>
//   <p>Thank you for visiting our spacecraft!</p>
//   </FancyBorder>
//   );
//   };


// function App() {
//   console.log("App 컴포넌트 함수 실행")
//   const [value, setValue] = useState(1)

//   const handleClick = () => {
//     setValue(value + 1)
//   }

//   return (
//   <div>
//     <span>증가값: {value}</span>
//     <button onClick={  handleClick }>Update</button>
//     </div>
//   )
//   }

// function App() {
//   const [ count, setCount ] = useState(1)
//   const [ text, setText ] = useState("")
  
//   const handleCountUpdate = () => {
//   setCount(count+1)
//   }

//   const handleInputChange = (e) => {
//     setText(e.target.value)
//   }

//   useEffect(() => {
//     console.log("렌더링")
//   }, [count])

//   // 렌더링 될때마다 호출
//   useEffect(() => {
//     console.log("렌더링")
//   })

//   useEffect(() => {
//     console.log("Mount!")
//   }, [])

//   useEffect(() => {
//     console.log("count 상태 변경")
//   }, [count])

//   useEffect(() => {
//     console.log("text 상태 변경")
//   }, [text])

//   return (
//     <div>
//       <button onClick={handleCountUpdate}>Update</button>
//       <div>Count: {count}</div>
//       <input type="text" onChange={handleInputChange} />
//       <div>Input Value: {text}</div>
//     </div>
//   )
//   }

// function App() {
//   const [showTimer, setShowTimer] = useState(false)

//   return (
//   <div>
//   <button onClick={
//   () => setShowTimer(!showTimer)
//   }>타이머 ON/OFF</button>
//   {showTimer && <Timer></Timer>}
//   </div>)
// }

// export default App


// function App() {
//     const inputRef = useRef()

//     useEffect(() => {
//         inputRef.current.focus()
//     }, [])

//     const login = () => {
//         alert(`WELCOME, ${inputRef.current.value}`)
//         inputRef.current.focus()
//     }

//     return (
//         <>
//         <div>
//             <input type="text" placeholder='사용자 이름 입력'></input>
//             <button onClick={login}>로그인</button>
//         </div>
//         </>
//     )
// }



// const calculate = (number) => {
//   console.log("어려운 계산 시작")
//   let result = 0
//   for (let i = 0; i < 99999999; i++) {
//   result += Math.sin(i + number)
//   }
//   console.log("어려운 계산 완료")
//   return result
//   }
//   export const App = () => {
//   const [inputValue, setInputValue] = useState(1)
//   const calValue = useMemo(
//   () => calculate(inputValue),
//   [inputValue]
//   )
//   const [count, setCount ] = useState(0)
//   const handleCount = () => { setCount(count+1) }
//   return (
//   <div>
//   <h3>어려운 계산기</h3>
//   <input
//   type="number"
//   value={inputValue}
//   onChange={(e) => setInputValue(parseInt(e.target.value))}
//   />
//   <div>결과 = {calValue}</div>
//   <button onClick={handleCount}>증가:{count}</button>
//   </div>
//   )
//   }


function App() {
 const refInput = useRef()


  return (
    <div>
      <CustomInput ref={refInput} />
      <button onClick={() => {
        refInput.current.focus()
      }}>Focus</button>
      </div>
      )
    }

