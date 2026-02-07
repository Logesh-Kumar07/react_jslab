import React, { useState } from 'react'

function Tab() {
    const [activeTab, setactiveTab] = useState('Home')
    return (
        <div style={style.Container}>
            <h1>Tab Componenet</h1>
            <div style={style.tabContainer}>
                <button style={activeTab === "Home" ? style.activeBtn : style.Btn} onClick={() => setactiveTab('Home')}>Home</button>
                <button style={activeTab === "About" ? style.activeBtn : style.Btn} onClick={() => setactiveTab('About')}>About</button>
                <button style={activeTab === "Contact" ? style.activeBtn : style.Btn} onClick={() => setactiveTab('Contact')}>Contact</button>
            </div>
            <div style={style.contentBox}>
                {activeTab == "Home" && (<p>this is home page</p>)}
                {activeTab == "About" && (<p>this is about page</p>)}
                {activeTab == "Contact" && (<p>this is contact page</p>)}
            </div>
        </div>
    )
}
const style = {
    Container: {
        widhth: "100px",
        height: "500px",
        padding: "30px",
        background: "red"

    },
    tabContainer: {
        padding: "20px",
        border: "none",
        margin: "20px",
        

    },
    contentBox: {
        height: "50px",
        widhth: "40px",
        border: "2px solid white",
        marginleft: "1px",
        color:"blue",
    },
    activeBtn:{
        background:"yellow",
        border:"none",
        padding:"10px"
        
        
    },
    btn:{
        background:"white"
    },
    

}

export default Tab
