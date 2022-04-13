import { useState, useContext } from 'react'
import useLetras from '../Hooks/useLetras'

const Formulario = () => {

    const { setAlerta, setValidacion, busquedaLetra, setSpinner } = useLetras()

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')) {
            setAlerta('Coloca el nombre del Artista y la Canción')
            setValidacion(true)
            return
        }
        setSpinner(true)
        setAlerta('')
        setValidacion(false)
        busquedaLetra(busqueda)
    }

  return (
    <form
        onSubmit={handleSubmit}
    >
        <legend>Busca por artistas y canción</legend>

        <div className='form-grid'>
            <div>
                <label>Artista</label>
                <input
                    type='text'
                    name='artista'
                    placeholder='Ej: Metallica'
                    value={busqueda.artista}
                    onChange={ e => setBusqueda({
                        ...busqueda,
                        [e.target.name]: e.target.value
                    }) }
                />
            </div>

            <div>
                <label>Canción</label>
                <input
                    type='text'
                    name='cancion'
                    placeholder='Ej: The Day That Never Comes'
                    value={busqueda.cancion}
                    onChange={ e => setBusqueda({
                        ...busqueda,
                        [e.target.name]: e.target.value
                    }) }
                />
            </div>
            <input
                type='submit'
                value='Buscar letra'
            />
        </div>

    </form>
  )
}

export default Formulario