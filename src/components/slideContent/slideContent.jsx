import "./slideContent.css"

const SlideContent = () => {
    return (
        <div className='slider-card'>
            <div className="slider-img">
                <img src="https://images.pexels.com/photos/18129270/pexels-photo-18129270/free-photo-of-neushwanstein-castle-on-a-cloudy-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className="slider-info">
                <div className="slider-category">
                    <h4>Travel -</h4>
                    <span>july 2, 2023</span>
                </div>
                <h1>Your most unhappy customers are your greatest source of learning.</h1>
                <p>mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean</p>
                <div className="slider-profile">
                    <div className="profile-img">
                        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div className="profile-name">
                        <h3>venkatesh</h3>
                        <span>Software</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SlideContent
