'use client'


import React, { useEffect, useState } from 'react'

const UseThemeSwitch = (): [string, (value:string) => void] => {
    const preferenceTheme = "(prefers-color-schema:light)"
    const storageKey = "theme"

    const toggleTheme = (theme:string) =>{
        if(theme === "dark"){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }

        window.localStorage.setItem(storageKey,theme)
    }

    const getUserPreference = () =>{
        const userPref = window.localStorage.getItem(storageKey)
        if (userPref){
            return userPref
        }
        return window.matchMedia(preferenceTheme).matches ? "dark" : "light"
    }
    const [mode, setMode] = useState('dark');



    useEffect(() =>{

        const mediaQuery = window.matchMedia(preferenceTheme)

        const handleChange = () =>{
            const newMode = getUserPreference()

            setMode(newMode)
            toggleTheme(newMode)
        }
        handleChange()

        mediaQuery.addEventListener("change",handleChange)

        return()=>{
            mediaQuery.removeEventListener('change', handleChange)
        }
    },[])

    useEffect(() =>{
        toggleTheme(mode)
    },[mode])


    return [mode, setMode]
}

export default UseThemeSwitch
