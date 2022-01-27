function Form(){
    
    
    
    
    return (
    <form>
    <p>
        <fieldset>
        <legend>Genre<abbr title="Ce champ est obligatoire">*</abbr></legend>
        <input type="radio" required name="title" id="r1" value="Mr"/><label for="r1">M.</label>
        <input type="radio" required name="title" id="r2" value="Ms"/><label for="r2">Mme.</label>
        </fieldset>
    </p>
    <p>
        <label for="n1">Quel est votre âge ?</label>
        <input type="number" min="12" max="120" step="1" id="n1" name="age"
            pattern="\d+" />
    </p>
    <p>
        <label for="t1">Nom<abbr title="Ce champ est obligatoire">*</abbr></label>
        <input type="text" pattern="[A-Za-z]{2,50}" id="t1" name="fruit" list="l1" required/>
    </p>
    <p>
        <label for="t2">Prenom<abbr title="Ce champ est obligatoire">*</abbr></label>
        <input type="text" pattern="[A-Za-z]{2,50}" id="t2" name="fruit" list="l1" required/>
    </p>
    <p>
        <label for="t3">Quelle est votre adresse électronique ?</label>
        <input type="email" id="t3" name="email" />
    </p>
    <p>
        <label for="t4">Laissez un court message</label>
        <textarea id="t4" name="msg" type="text" pattern="[A-Za-z]" ></textarea>
    </p>
    <p>
        <button>Soumettre</button>
    </p>
    </form>
    )
}
    export default Form            