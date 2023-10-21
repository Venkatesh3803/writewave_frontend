import "./ContactPage.css"
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/footer'

const ContactPage = () => {
    return (
        <main>
            <Navber />
            <div className='contact-page'>
                <div className="map">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3420354245!2d78.24323229028!3d17.412281015541446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1697869571460!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy"  referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="contact-info">
                    <h2 style={{textAlign:"center"}}>Contact us</h2>


                    <form action="">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="number" placeholder="Phone Number" />
                        <input type="text" placeholder="example@email.com" />

                        <button>Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default ContactPage