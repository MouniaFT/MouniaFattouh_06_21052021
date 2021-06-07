import {useState} from 'react';


const Formulaire = (props) => {
    const [prenom, setPrenom] = useState("");
    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isErrorFirstName, setIsErrorFirstName] = useState(false);

    const validateFields = () => {
        if (!prenom) {
            setIsErrorFirstName(true)
        }
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        validateFields();

        if (prenom && nom && email && message) {
            console.log(`
            Prénom: ${prenom}
            Nom: ${nom}
            Email: ${email}
            Message: ${message}
        `);
        } else {
            console.log("erreur");
        }
        
    }

    return(
        <div>
            <h1 className="modal-title">Contactez-moi  {props.name}</h1>
            <form className="modal_form">
                <div className="form-group">
                    <label for="prenom">Prénom *</label>
                    <input type="text" name="prenom" id="prenom" onChange={(e) => setPrenom(e.target.value)} value={prenom} placeholder="Prénom" required aria-invalid="true"/>
                    {
                        isErrorFirstName && <span>votre prenom est obligatoire </span>

                    }
                </div>
                <div className="form-group">
                    <label for="nom">Nom *</label>
                    <input type="text" name="nom" id="nom" onChange={(e) => setNom(e.target.value)} value={nom} placeholder="Nom" required aria-invalid="true"/>
                </div>
                <div className="form-group">
                    <label for="email">Email *</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" required aria-invalid="true"/>
                </div>
                <div className="form-group">
                    <label for="message">Votre message *</label>
                    <textarea type="text" name="message" id="message" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Message" required aria-invalid="true"></textarea>
                </div>
                <button className="btn btn-submit" type="submit" onClick={handleSubmit}>Envoyer</button>
            </form>
        </div>
    )

}

export default Formulaire; 