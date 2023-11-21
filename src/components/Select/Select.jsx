/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react"
import "./select.css"

export default function Select({ ops, onClick, text, val }) {
    const [selected, setSelected] = useState(val ? val : ops[0])
    const [showOptions, setShowOptions] = useState(false)

    const dropdownRef = useRef(null);

    function handleShowOptions() {
        setShowOptions(!showOptions)
    }

    function handleOptionClick(op) {
        setShowOptions(!showOptions)
        setSelected(op)
        onClick(op)
    }

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setShowOptions(false);
        }
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="select_container">
            <label className="select_title" htmlFor="sel">{text}</label>
            <div className="select" id="sel" onClick={handleShowOptions}>{selected.name}</div>
            {selected.inStock === false && <div className="select_notice">Item esgotado</div>}
            {showOptions &&
                <div className="select_dropdown" ref={dropdownRef}>
                    {
                        ops.map((op, i) => {
                            return (
                                <div className={`select_option ${selected.name === op.name && "select_option_selected"}`} onClick={() => handleOptionClick(op)} key={i}>{op.name}</div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}