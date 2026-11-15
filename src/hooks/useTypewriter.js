import { useEffect, useState } from 'react'

// `words` must be a stable array (define it outside the component).
export default function useTypewriter(words, typeMs = 70, deleteMs = 35, pauseMs = 1600) {
  const [text, setText] = useState('')
  const [i, setI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }
    const word = words[i % words.length]
    let t
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pauseMs)
    } else if (deleting && text === '') {
      setDeleting(false)
      setI((n) => n + 1)
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? deleteMs : typeMs,
      )
    }
    return () => clearTimeout(t)
  }, [text, deleting, i, words, typeMs, deleteMs, pauseMs])

  return text
}
