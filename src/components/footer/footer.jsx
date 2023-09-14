import "./footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-left">
                <h2>Blogify</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, maxime, tenetur molestias obcaecati ipsa ad magnam laboriosam dicta hic id, in animi aliquid quaerat corrupti similique illum. Sit, aspernatur impedit!</p>
            </div>
            <div className="footer-right">
                <div className="footer-list">
                    <h4 style={{fontSize:"20px", marginBottom:"0.6rem"}}>Links</h4>

                    <li>Home</li>
                    <li>Contact</li>
                    <li>Support</li>
                    <li>About</li>

                </div>
                <div className="footer-list">
                    <h4 style={{fontSize:"20px", marginBottom:"0.6rem"}}>Tags</h4>

                    <li>Travel</li>
                    <li>Food</li>
                    <li>Sports</li>
                    <li>News</li>
                    <li>Technology</li>

                </div>
                <div className="footer-list">
                    <h4 style={{fontSize:"20px", marginBottom:"0.6rem"}}>Social</h4>

                    <li>Facebook</li>
                    <li>instagram</li>
                    <li>Twitter</li>


                </div>
            </div>
        </div>
    )
}

export default Footer
