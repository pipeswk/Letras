import Spinner from "./Spinner"


const Letra = ( { letra, spinner } ) => {


  return (
    <>
      {spinner ? (
        <Spinner />
      ) : (
        <div className='letra'>
            {letra}
        </div>
      )}
    </>
  )
}

export default Letra