import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-mumbai/room-and-suites/luxury-room/detail/1965luxury-room-bedroom-the-oberoi-mumbai--2.jpg?w=724&extension=webp&hash=4c6ce7a7270e3e74617e9f727cc03aab",
    },
    {
      src: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-mumbai/room-and-suites/premier-ocean-view-room/detail/premier-ocean-view-room-2.jpg?w=724&extension=webp&hash=f8a70d3b4c3eff16657f2866a3b92582",
    },
    {
      src: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-mumbai/room-and-suites/deluxe-suite/detail/1858-deluxe-suite-living-room.jpg?w=724&extension=webp&hash=e535f1dcc2c06f4e5796cef4afcdc926",
    },
    {
      src: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-mumbai/room-and-suites/presidential-suites/detail/tom-kohinoor---presedential-suite-living-room-2.jpg?w=724&extension=webp&hash=a4c04f0fa33e88436bfded24c25d31a0",
    },
    {
      src: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-mumbai/room-and-suites/presidential-suites/detail/kohinoor-suite-bathroom-the-oberoi-mumbai.jpg?extension=webp",
    },
    {
      src: "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-mumbai/room-and-suites/oberoi-executive-suites-with-ocean-view/detail/executive-suites-with-or-without-ocean-views-724-x-407.jpg?w=724&extension=webp&hash=09fff99b2c53699ad6e91232f2322dcf",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Aashish House</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Mumbai - The Oberoi, Mumbai</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹19400 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                "Bird’s eye views across the ocean".
                <p>
                Especially designed for you to relax and unwind. 
                The sophisticated interiors of these suites flow through a comfortable living room into a king size master bedroom and a 
                spectacular bathroom. 
                Wall to wall windows throughout, frame magnificent ocean views; 
                these can even be enjoyed while relaxing in the bathtub. 
                An experience made all the more special when complimented by our warm hospitality, 24 hours a day.
                For your privacy, there is a separate entrance for your personal butler and a fully equipped pantry. 
                And for your wellbeing, there is a treadmill for you to work out on. 
                An unrivalled stay experience in Mumbai. This suite has an optional extra interconnecting twin bedroom.
                </p>
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Mumbai, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>₹129999</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;