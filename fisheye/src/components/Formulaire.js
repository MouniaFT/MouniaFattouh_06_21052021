import {useState} from 'react';


const Formulaire = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isErrorFirstName, setIsErrorFirstName] = useState(false);
    const [isErrorLastName, setIsErrorLastName] = useState(false);
    const [isErrorEmail, setIsErrorEmail] = useState(false);
    const [isErrorMessage, setIsErrorMessage] = useState(false);

    //Vérifier le champs Email
    const isEmail = () => {
        if (!/\S+@\S+\.\S+/.test(email)) {
            setIsErrorEmail(true)
            return false
        } else {
            return true
        }
    }

    //Ajouter ou supprimer les messages d'erreurs 
    const validateFields = () => {
        if (!firstName) {
            setIsErrorFirstName(true)
        } else {
            setIsErrorFirstName(false)
        }

        if (!lastName) {
            setIsErrorLastName(true)
        } else {
            setIsErrorLastName(false)
        }

        if (!email) {
            setIsErrorEmail(true)
        } else if (isEmail()){
            setIsErrorEmail(false)
        }

        if (!message) {
            setIsErrorMessage(true)
        } else {
            setIsErrorMessage(false)
        }
    
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        validateFields();
    
        if (firstName && lastName && isEmail() && message) {

            //Afficher la valeur de chaque champs à la console 
            console.log(`
            Prénom: ${firstName}
            Nom: ${lastName}
            Email: ${email}
            Message: ${message}
        `)
        } else {
            console.log("les champs ne sont pas valides");
        }
    }

    return(
        <div>
            <h1 className="modal-title">Contactez-moi  {props.name}</h1>
            <form className="modal_form" >
                <div className="form-group">
                    <label for="prenom">Prénom *</label>
                    <input type="text" name="prenom" id="prenom" onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="Prénom" required aria-invalid="true"/>
                    {
                        isErrorFirstName && <span className="error-message">Veuillez saisir votre prénom</span>

                    }
                </div>
                <div className="form-group">
                    <label for="nom">Nom *</label>
                    <input type="text" name="nom" id="nom" onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Nom" required aria-invalid="true"/>
                    {
                        isErrorLastName && <span className="error-message">Veuillez saisir votre nom</span>

                    }
                </div>
                <div className="form-group">
                    <label for="email">Email *</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" required aria-invalid="true"/>
                    {
                        isErrorEmail && <span className="error-message">Veuillez saisir une adresse email valide</span>

                    }
                </div>
                <div className="form-group">
                    <label for="message">Votre message *</label>
                    <textarea type="text" name="message" id="message" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Message" required aria-invalid="true"></textarea>
                    {
                        isErrorMessage && <span className="error-message">Veuillez saisir votre message</span>

                    }
                </div>
                <button className="btn btn-submit" type="submit" onClick={handleSubmit} >Envoyer</button>
            </form>
        </div>
    )

}

export default Formulaire; 