

export default function ClientComponent({data}) {
    {

        const capitalizeFirstLetter =(string) =>{
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
        const { transcripcion, preguntas, linkVideo, cliente, escenario } = data;
        return (
          <>
            <div>
              <h1 className="font-bold">{capitalizeFirstLetter(cliente)}</h1>
              <h2 className="font-bold">Test: {escenario}</h2>
              <h2 className="font-bold aspect-w-16 aspect-h-9">Testeador 1</h2>
                <iframe frameBorder="0" src={linkVideo} allowFullScreen></iframe>
              <div>
                <div className="overflow-scroll">
                <h2>Transcripción</h2>
                <div dangerouslySetInnerHTML={{ __html: transcripcion }} >
                </div>  
                </div>
                <div>
                  <h2 className="font-bold">Tareas</h2>
                  <h2 className="font-bold">
                    Escenario: {escenario}
                  </h2>
                  <hr/>
                  {preguntas.map((pregunta, index) => (
                    <div key={pregunta.texto}>
                      <div className="font-bold text-base leading-6">
                        <h2>Tarea {index + 1}:</h2>
                        <h3 >{pregunta.texto}</h3>
                      </div>
                      {pregunta.tipoTarea === 'opinionScale5' ? <h4>Respuesta: {pregunta.respuesta}</h4> : null}
                      <p  className="text-[#f6905c]">
                        Duración de la tarea: {pregunta.tiempo}
                      </p>
                      <hr/>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
    }
}