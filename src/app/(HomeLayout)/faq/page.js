"use client"
import { useRef, useState } from "react"

const FaqsCard = ({ faqsList, idx }) => {
    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.scrollHeight
        setState(!state)
        setAnswerH(state ? '0px' : `${answerElH}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef}
                className="duration-300 transition-height"
                style={{ height: answerH }}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

const page = () => {
    const faqsList = [
        {
            q: "I dati anagrafici e di pagamento inseriti dagli utenti verranno trasmessi a terzi?",
            a: "ASSOLUTAMENTE NO. I dati rimarranno internamente e verranno gestiti per migliorare l’esperienza dell’utente all’interno del nostro marketplace."
        },
        {
            q: "Quando il coach riceve i pagamenti derivanti dalle sue vendite?",
            a: "Settimanalmente. Alla fine di ogni programma settimanale, se lo studente non richiede la restituzione dell’importo pagato."
        },
        {
            q: "Se lo studente non è soddisfatto potrà automaticamente avere i soldi indietro?",
            a: "NO. Questa procedura avviene solo se lo studente è in grado di provare che il coach non abbia rispettato il programma."
        },
        {
            q: "E’ possibile lasciare recensioni su un coach senza acquistare un suo corso?",
            a: "NO. Non è possibile lasciare alcuna recensione se non si acquista un corso tramite TrustYourGuru.com."
        },
        {
            q: "Il coach può valutare lo studente?",
            a: "SI. Il coach valuterà l’impegno dello studente nel voler ottenere i risultati prefissati."
        },
        {
            q: "Il coach può guadagnare TrustPoints in classifica vendendo percorsi esternamente?",
            a: "NO. Il coach può guadagnare punteggio solo vendendo tramite TrustYourGuru.com."
        }
    ];
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
             <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">Domande Frequenti</h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Abbiamo risposto a tutte le domande frequenti. Ancora confuso? Sentiti libero di contattarci.
        </p>
      </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            key={idx} // Ensure unique key for each item
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default page;
