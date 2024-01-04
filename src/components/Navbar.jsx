import React, { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'

function Navbar() {

    const { darkMode, dispatch } = useContext(ExpenseContext);

    const handleTheme = () => {
        dispatch({
            type: "THEME",
            payload: darkMode ? false : true
        })
    };

    return (
        <>
            <div className={darkMode ? "nav bg-black" : "nav"}>
                <h2>KHATABOOK</h2>
                <span>
                    <button className={darkMode ? 'btn btn-sm rounded-5' : 'btn btn-sm rounded-5 text-danger '} id='nav-btn' onClick={handleTheme}>{darkMode ? "LIGHT" : "DARK"}</button>
                </span>
            </div >
            <marquee id="nav-line" width="80%" direction="right" height="100px" scrollamount="4">This is Khatabook App and it manages all your transactions...</marquee>
        </>
    )
}

export default Navbar