
export default function BT7() {
  return (
    <>
    <header style={{width:"100%", height:"50px", backgroundColor:"gray", display:"flex", justifyContent:"center", alignItems:"center"}}>header</header>
    <section style={{ display:"flex", flexDirection:"row" }}>
        <menu style={{width:"50px", height:"550px", backgroundColor:"blue", marginTop:"0px", display:"flex", justifyContent:"center", alignItems:"center"}}>Menu</menu>
        <section style={{backgroundColor:"wheat",width:"100%", height:"550px",display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <main style={{backgroundColor:"white", width:"95%", height:"450px", display:"flex", justifyContent:"center", alignItems:"center"}}>Main</main>
            <footer style={{width:"95%", height:"50px", backgroundColor:"gray", display:"flex", justifyContent:"center", alignItems:"center"}}>Footer</footer>
        </section>
    </section>
    </>
  )
}
