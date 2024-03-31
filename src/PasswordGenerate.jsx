import { useEffect } from "react"
import { useRef } from "react"
import { useCallback } from "react"
import { useState } from "react"

function PasswordGenerate(){

    const [length,setLength] = useState(8)
    const [numberAllowed,setNumber] = useState(false)
    const [charAllowed,setChar] = useState(false)
    const [password,setPassword] = useState('')

    // Password Generator method
    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllowed) str += "0123456789"
        if(charAllowed) str += "!@#$%^&*()_+-=[]{}~`"

        for(let i=1; i<=length; i++){
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }

        setPassword(pass)

    } , [length,numberAllowed,charAllowed,setPassword])

    // useCallback(function,dependencies)

    // useEffect(callBack, dependencies)

    useEffect(() => {
        passwordGenerator()
    }, [length,numberAllowed,charAllowed,passwordGenerator])

    // useRef()
    const passRef = useRef(null)

    const copyPassword = useCallback(() => {
        passRef.current?.select()
        // this line is only for highlight the copied value
        // passRef.current?.setSelectionRange(0,3)
        // value select hogi usi range me
        window.navigator.clipboard.writeText(password)
    }, [password])
    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 pt-5 pb-5 text-orange-800 bg-gray-800">
                <h1 className="text-white text-center">Password Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-2">
                    <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly ref={passRef}/>
                    <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPassword }>Copy</button>
                </div>
                <div className="flex-col text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e) => setLength(e.target.value)}/>
                        <label>Length : {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => setNumber((prev) => !prev)}/>
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => setChar((prev) => !prev)}/>
                        <label htmlFor="charInput">Characters</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGenerate