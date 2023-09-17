// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Popup from "./common/Popup";
import Listli from "./common/Listli";

function App() {
  const test = "여행";
  const [list, setList] = useState([
    "송도센터럴파크",
    "파주 프로방스 / 헤이리 마을",
    "춘천 소양강 스카이워크",
  ]);
  const [count, setCount] = useState(0);
  const[isOpen,setIsOpen] = useState(false);
  const[titleNo,setTitleNo]=useState(0);
  const[inText,setInText]=useState("");

  function writeList(){
    if(inText==""){
      alert("내용을 입력해주세요");
      return;
    };

    let copy=[...list];
    copy.unshift(inText);
    setList(copy)
  }
    const delList=(i) =>{
      console.log("test",i);
      let copy=[...list];
      copy.splice(i,1);
      setList(copy);
      setInText("");
    }
  
  return (
    <div className="wrap">
      <header>
        <h1>
          <span>가자</span>
          <span>여행</span>
        </h1>
      </header>
      
      <button  onClick={()=>{setIsOpen(true)}}> 열기</button>
      <button  onClick={()=>{setIsOpen(false)}}> 닫기</button>
      <button onClick={()=>{setIsOpen(isOpen)}}>toggle</button>
      <main>
        <div className="textInput">
          <input type="text" value={inText} onChange={(e)=>{
           e.preventDefault();
           setInText(e.target.value);
          }}
           placeholder="어디로 갈까요"></input>
          <button onClick={writeList}>입력</button>
        </div>
        
        <p className="total">
          총 리스트 갯수 <span>{list.length}</span>
        </p>
        {list.length >0?(
          <ul className="list">
          {list.map((list,i) =>{
           return <Listli list={list} key={i} 
              i={i} setIsOpen={setIsOpen} 
               setTitleNo={setTitleNo}
               delList={delList}
           />
           
           
          })}
          
         </ul>
        ):<p style={{textAlign:"center"}}>리스트가 없습니다. </p>
      
        }
      </main>
      {
      isOpen==false ? null : (
         <Popup list={list} setIsOpen={setIsOpen} titleNo={titleNo} />/*if문으로 거짓일시 안보이게 설정*/ 
      )
    } 
  
    </div>
  );
}

export default App;
