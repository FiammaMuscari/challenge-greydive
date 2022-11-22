

export default function ClientComponent({data}) {
    {

        const capitalizeFirstLetter =(string) =>{
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
        const { transcripcion, preguntas, linkVideo, cliente, escenario } = data;
        return (
          <>
            <div className="flex gap-2 flex-col m-16">
              <h1 className="font-bold text-3xl mb-4">{capitalizeFirstLetter(cliente)}</h1>
              <h2 className="font-bold text-2xl mb-6">Test: {escenario}</h2>
              <h2 className="font-bold text-2xl mb-6">Testeador 1</h2>
                <iframe className="w-full aspect-video mb-8" frameBorder="0" src={linkVideo} do-not-allow="autoplay" allowFullScreen ></iframe>
              <div>
                <div  className="lg:px-24">
                <h2 className="font-bold text-2xl my-4">Transcripción</h2>
                <div className="overflow-scroll lg:px-10 py-8 lg:my-12">
                <div className="h-60 p-4 my-4" dangerouslySetInnerHTML={{ __html: capitalizeFirstLetter(transcripcion) }} >
                </div>  
                </div>
                <div>
                  <h2 className="font-bold text-2xl my-4">Tareas</h2>
                  <h2 className="font-bold m-4 flex justify-center">
                    Escenario: {escenario}
                  </h2>
                  <hr className="mb-8"/>
                  </div>
                  <div className="flex flex-wrap -mx-1 lg:-mx-4 items-center justify-center">
                  {preguntas.map((pregunta, index) => (
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 flex flex-col gap-2 max-w-sm  cursor-pointer" key={pregunta.texto}>
                      <div className="font-bold text-base leading-6">
                        <h2 className="mb-1">Tarea {index + 1}:</h2>
                        <h3>{pregunta.texto}</h3>
                      </div>
                      {pregunta.tipoTarea === 'opinionScale5' ? <h4>Respuesta: {pregunta.respuesta}</h4> : null}
                      <p  className="text-[#f6905c]">
                        Duración de la tarea: {pregunta.tiempo}
                      </p>
                      <hr className="my-5 border border-solid border-2 border-[#f6905c] shadow-[0_6px_20px_rgba(246,144,92,_0.7)]"/>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
}