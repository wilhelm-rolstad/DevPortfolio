import { useState } from 'react'
import { Phone, Mail} from 'lucide-react'
const Contact = () => {
    
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const[message, setMessage] = useState("");
    const [userFeedback, setUserFeedback] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(!name || !email || !title || !message){
            setUserFeedback("Alle felter må fylles ut")
            setStatus("error")
            return;
        }

        else if (!(email.includes("@") && email.includes("."))){
            setUserFeedback("Epost addresse er ikke gyldig")
            setStatus("error")
            return;
        }

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

        if (response.ok) {
            console.log("Success", data);
            setUserFeedback("Epost er sendt")
            setStatus("success")
            setName("")
            setEmail("")
            setTitle("")
            setMessage("")
        } else {
            console.log("Error", data);
        }
    }
    const inputStyle = "border rounded-lg py-2 px-3 w-full bg-gray-100 border-gray-300 focus:outline-none"
    const contactCard = "border border-gray-300 px-5 py-10 rounded-2xl w- bg-gray-200 w-full flex gap-2 items-center justify-center min-w-0"

    return(
        <>  
        <section className="max-w-5xl mx-auto py-10 flex flex-col gap-5">
            <header>
                <h1 className="text-xl"> Kontakt </h1>
                <p>Kontakt meg via mail, over telefon eller bruk kontaktskjemaet</p>
            </header>

            <section className="flex flex-wrap gap-2">
                <section className="flex flex-col flex-1 mx-auto min-w-50 items-center justify-center gap-5">
                    <div className={contactCard}>
                        <Phone/>
                        <p><a href="tel:wilhelmsrolstad@gmail.com"> +47 90 61 23 35</a></p>
                    </div>
                    <div className={contactCard}>
                        <Mail/>
                        <p> <a href="mailto:wilhelmsrolstad@gmail.com"> wilhelmsrolstad@gmail.com</a></p>
                    </div>

                    <div className={contactCard}>
                        <p>fesf</p>
                    </div>

                    <div className={contactCard}>
                        <p>fesf</p>
                    </div>

                    <div className={contactCard}>
                        <p>fesf</p>
                    </div>
                </section>

                <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-w-20 bg-gray-200 border border-gray-300 rounded-2xl mx-auto py-5 px-5 gap-5">
                        <h1 className="text-lg"> Kontaktskjema </h1>
                        <div className="flex gap-2">
                        <input className={inputStyle} value={name} onChange={(e) => setName(e.target.value)} placeholder="Navnet ditt*"></input>
                        <input className={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Din epost addresse*"></input>
                        </div>
                        <input type="text" value={title} className={inputStyle} placeholder="Emne/tittel*" onChange={(e) => setTitle(e.target.value)}/>
                        <textarea className={`${inputStyle} h-70`} value={message} onChange={(e) => setMessage(e.target.value)}   placeholder="Hva kan jeg hjelpe deg med?*"></textarea>
                        <button className="cursor-pointer border rounded-lg p-2 w-100 mx-auto hover:bg-black hover:text-white hover:scale-110 active:scale-90 transition duration-200"> Send melding </button>
                        <p   className={`mx-auto ${status === "success" ? "text-green-400" : status === "error" ? "text-red-400" : ""}`} >{userFeedback}</p>
                </form>
            </section>
        </section>
        </>
    )
}

export default Contact;
