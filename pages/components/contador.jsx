import { useState } from "react"

export default function contador() {

    const estilo = {
        backgroundColor: "#222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection:"column",
        color: "#FFF"       
    }

    const [count, setCount] = useState(0)
    return (
        <div style={estilo}>
            <span style={{padding:"15px"}}>
                Você fez {count} cliques
            </span>
            <button onClick={() => setCount(count + 1)}>Adicionar</button>
            <button onClick={() => setCount(count - 1)}>Remover</button>
        </div>
    )
}