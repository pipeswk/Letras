import { useState, createContext } from 'react'
import axios from 'axios'

const LetrasContext = createContext()

const LetrasProvider = ( { children } ) => {

    const [alerta, setAlerta] = useState('')
    const [validacion, setValidacion] = useState(false)
    const [letra, setLetra] = useState('')
    const [spinner, setSpinner] = useState(false)

    const busquedaLetra = async (busqueda) => {

        const { artista, cancion } = busqueda
        try {
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
            const {data} = await axios.get(url)
            setLetra(data.lyrics)
            setSpinner(false)
        } catch (error) {
            setAlerta('Cancion no encontrada')
            setValidacion(true)
            console.error(error)  
        }
    }

    return (
        <LetrasContext.Provider
            value={{
                alerta,
                setAlerta,
                validacion,
                setValidacion,
                busquedaLetra,
                letra,
                spinner,
                setSpinner
            }}
        >
            {children}
        </LetrasContext.Provider>
    )

}

export {
    LetrasProvider
}

export default LetrasContext