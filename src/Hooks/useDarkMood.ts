import { useEffect, useState } from "react"

export default function useDarkMood() {
  const [isDark, setIsDark] = useState(false)
    function DarkMood() {
      if (localStorage.getItem('mood') === 'Dark') {
        localStorage.setItem('mood', 'Light')
        document.documentElement.classList.remove('dark')
        setIsDark(false)
      } else {
        localStorage.setItem('mood', 'Dark')
        document.documentElement.classList.add('dark')
        setIsDark(true)
      }
    }
    useEffect(() => {
      const mood = localStorage.getItem('mood')
      if (mood === 'Dark') {
        document.documentElement.classList.add('dark')
        setIsDark(true)
      } else {
        document.documentElement.classList.remove('dark')
        setIsDark(false)
      }
    }, [])
    return { isDark,DarkMood }
}
