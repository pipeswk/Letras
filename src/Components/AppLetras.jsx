import Formulario from "./Formulario"
import useLetras from "../Hooks/useLetras"
import Alerta from "./Alerta"
import Letra from "./Letra"
import Spinner from "./Spinner"

const AppLetras = () => {

  const { alerta, validacion, letra, spinner } = useLetras()

  return (
    <>
      <header>
        Busqueda de letra de canciones
      </header>

      <Formulario />

      <main>
        {validacion ? (
          <Alerta>
            {alerta}
          </Alerta>
        ) : letra ? (
          <Letra
            letra={letra}
            spinner={spinner}
          />
        ) : spinner ? (
          <Spinner />
        ) : (
          <p className='text-center'>
            Busca letras de tus artistas favoritos...
          </p>
        )}

      </main>
    </>
  )
}

export default AppLetras