export default function ContactForm(){
    return(
        <div className="contact-container">
            <form className="contact-form">
                <h2>Contact</h2>
            <div className="contact-inputs">
                <div>
                    <label htmlFor="first-name">Name *</label>
                    <input type="text" name="first-name" id="first-name" placeholder="First Name" required/>
                    <input type="text" name="last-name" id="last-name" placeholder="Last Name" required/>
                </div>
                <div>
                    <label htmlFor="email">Email *</label>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div>
                    <label htmlFor="message">Message *</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}