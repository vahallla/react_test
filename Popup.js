export default function Popup({list,setIsOpen,titleNo})/*list도 가능(props대신) */ {
  return (
    <>
      <section className="popup">{list[titleNo]}
      <button  onClick={()=>{setIsOpen(false)}}> 닫기</button>

      
      </section>
   
    </>//props.list[0]도 list[0]가능
  );
}
