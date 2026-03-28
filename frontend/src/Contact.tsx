import { useRef, useState } from 'react'
import { Phone, Mail,} from 'lucide-react'
import { Wobble } from 'ldrs/react'
import 'ldrs/react/Wobble.css'

const Contact = () => {
    
    const[name, setName] = useState("");
   
    const[email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const[message, setMessage] = useState("");
    const [userFeedback, setUserFeedback] = useState("");
    const [isLoaderClosing, setIsLoaderClosing] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [buttonLabel, setButtonLabel] = useState("Send melding");
    const [showButtonLabel, setShowButtonLabel] = useState(true);
    const [showFieldText, setShowFieldText] = useState(true);
    const [showPlaceholderText, setShowPlaceholderText] = useState(true);
    const loaderWasShown = useRef(false);

    function showSuccessLabel() {
        setButtonLabel("Melding sendt!");
        setShowButtonLabel(true);

        setTimeout(() => {
            setShowButtonLabel(false);

            setTimeout(() => {
                setButtonLabel("Send melding");
                setShowButtonLabel(true);
            }, 300);
        }, 2000);
    }

    function resetFormWithFade() {
        setShowFieldText(false);
        setShowPlaceholderText(false);

        setTimeout(() => {
            setName("");
            setEmail("");
            setTitle("");
            setMessage("");
            setShowFieldText(true);
            setShowPlaceholderText(true);
        }, 1000);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name || !email || !title || !message) {
        setUserFeedback("Alle felter må fylles ut");
        return;
    }

    if (!(email.includes("@") && email.includes("."))) {
        setUserFeedback("Epost addresse er ikke gyldig");
        return;
    }

    setIsSubmitting(true);
    setUserFeedback("");
    setIsLoaderClosing(false);
    loaderWasShown.current = false;

    const loaderTimer = setTimeout(() => {
        loaderWasShown.current = true;
        setShowLoader(true);
    }, 180);

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                title,
                message,
            }),
        });

        const data = await response.json();
        clearTimeout(loaderTimer);

        if (response.ok) {
            if (loaderWasShown.current) {
                setIsLoaderClosing(true);

                setTimeout(() => {
                    setShowLoader(false);
                    setIsLoaderClosing(false);
                    setIsSubmitting(false);
                    loaderWasShown.current = false;
                    showSuccessLabel();
                    setUserFeedback("");
                    resetFormWithFade();
                }, 300);
            } else {
                setShowLoader(false);
                setIsSubmitting(false);
                setIsLoaderClosing(false);
                setUserFeedback("");
                resetFormWithFade();
                showSuccessLabel();
            }
        } else {
            console.log("Error", data);
            setShowLoader(false);
            setIsLoaderClosing(false);
            setIsSubmitting(false);
            loaderWasShown.current = false;
            setUserFeedback("Noe gikk galt");
        }
    } catch (error) {
        clearTimeout(loaderTimer);
        setShowLoader(false);
        setIsLoaderClosing(false);
        setIsSubmitting(false);
        loaderWasShown.current = false;
        setUserFeedback("Noe gikk galt");
    }
}

    const inputStyle = "border rounded-lg py-2 px-3 w-full bg-white border-gray-300 focus:outline-none text-black"
    const contactCard = "cursor-pointer border border-gray-200 px-5 py-10 rounded-2xl bg-gray-100 w-full flex gap-2 items-center justify-center min-w-0 hover:-translate-y-2 hover:shadow-lg transition"

    return(
        <>  
        <section className="max-w-6xl mx-auto py-10 flex flex-col gap-5 p-10">
            <header>
                <h1 className="text-xl"> Kontakt </h1>
                <p>Kontakt meg via mail, over telefon eller bruk kontaktskjemaet</p>
            </header>

            <section className="flex flex-wrap gap-5">
                <section className="flex flex-col flex-1 mx-auto min-w-80 sm:min-w-100 items-center justify-center gap-5 h-full">
              
                        <a href="tel:wilhelmsrolstad@gmail.com" className={contactCard}>
                            <Phone/>
                            <p> +47 90 61 23 35</p>
                        </a>
         
         
                        <a href="mailto:wilhelmsrolstad@gmail.com" className={contactCard}>
                            <Mail/>
                            <p> wilhelmsrolstad@gmail.com</p>
                        </a>

                    <div className={contactCard}>
                        <p>Wilhelm Rolstad</p>
                    </div>
                </section>

                <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-w-80 sm:min-w-100 bg-gray-100 border border-gray-200 rounded-2xl mx-auto py-5 px-5 gap-5">
                        <h1 className="text-lg"> Kontaktskjema </h1>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-2 flex-wrap md:flex-nowrap">
                                <div className="relative min-w-10 w-full">
                                    <input
                                        spellCheck={false}
                                        className={`${inputStyle} transition-colors duration-1000 ${showFieldText ? "text-black" : "text-transparent"}`}
                                        value={name}
                                        onChange={(e) => {setName(e.target.value); }}
                                    ></input>
                                    <span
                                        className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-opacity ${
                                            name || !showPlaceholderText ? "opacity-0 duration-0" : "opacity-100 duration-1000"
                                        }`}
                                    >
                                        Navnet ditt*
                                    </span>
                                </div>

                                <div className="relative  min-w-10 w-full">
                                    <input
                                        spellCheck={false}
                                        className={`${inputStyle} transition-colors duration-1000 ${showFieldText ? "text-black" : "text-transparent"}`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                                    <span
                                        className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-opacity ${
                                            email || !showPlaceholderText ? "opacity-0 duration-0" : "opacity-100 duration-1000"
                                        }`}
                                    >
                                        Din epost addresse*
                                    </span>
                                </div>
                            </div>
                            <div className="relative w-full">
                                <input
                                    spellCheck={false}
                                    type="text"
                                    value={title}
                                    className={`${inputStyle} transition-colors duration-1000 ${showFieldText ? "text-black" : "text-transparent"}`}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <span
                                    className={`pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-opacity ${
                                        title || !showPlaceholderText ? "opacity-0 duration-0" : "opacity-100 duration-1000"
                                    }`}
                                >
                                    Emne/tittel*
                                </span>
                            </div>
                            <div className="relative w-full">
                                <textarea
                                    spellCheck={false}
                                    className={`${inputStyle} h-70 transition-colors duration-1000 ${showFieldText ? "text-black" : "text-transparent"}`}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <span
                                    className={`pointer-events-none absolute left-3 top-3 text-gray-400 transition-opacity ${
                                        message || !showPlaceholderText ? "opacity-0 duration-0" : "opacity-100 duration-1000"
                                    }`}
                                >
                                    Hva kan jeg hjelpe deg med?*
                                </span>
                            </div>
                        </div>
                        
                        <button
                            disabled={isSubmitting}
                            className="bg-orange-300 relative flex items-center justify-center cursor-pointer border-0 rounded-lg p-2 w-60 mx-auto hover:shadow-lg hover:scale-105 active:scale-95 transition duration-200">
                            <span
                                className={`transition-opacity duration-300 ${
                                    showLoader || !showButtonLabel ? "opacity-0" : "opacity-100"
                                }`}
                            >
                                {buttonLabel}
                            </span>
                            {showLoader && (
                                <div
                                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                                        isLoaderClosing ? "opacity-0" : "opacity-100"
                                    }`}
                                >
                                    <Wobble size="45" speed="0.8" color="black" />
                                </div>
                            )}
                        </button>

                        
                       
                        <p className={`mx-auto text-red-400`} >{userFeedback}</p>
                </form>
            </section>
        </section>
        </>
    )
}

export default Contact;
