import "./AboutPage.css"
import Navber from '../../components/navber/navber'
import Footer from '../../components/footer/footer'

const AboutPage = () => {
    return (
        <main>
            <Navber />
            <div className='blogpage'>
                <h2>About WriteWave</h2>
                <p>
                    Welcome to WriteWave, where passion meets pixels. We're more than just words on a screen; we're a community of curious minds, dreamers, and explorers. Our blog is your ticket to a world of inspiration, knowledge, and creativity.
                </p>
                <p>
                    At WriteWave, we believe in the power of storytelling. Our journey is your journey, and we're here to share experiences, insights, and adventures that make life a little more extraordinary. Whether you're a seasoned traveler, a DIY enthusiast, a foodie, or simply someone seeking a daily dose of inspiration, you've found your virtual home.
                </p>
                <p>
                    Our "About Page" is where our story begins. Get to know the faces behind the blog, our mission, and the heart and soul that drive every pixel on this screen. We're more than just content creators; we're your fellow dream-chasers, eager to connect with you and share the magic of the everyday.
                </p>
                <p>
                    Join us in this delightful journey of discovery, laughter, and inspiration. Let's turn the digital realm into a place where stories come alive, and connections are forged. Dive into the heart of WriteWave, where every click opens a door to a world of wonder.
                </p>
            </div>
            <Footer />
        </main>
    )
}

export default AboutPage
