
import useFetch from "../../hooks/useFetch";
import "./featured.css";


 const hotelApiUrl = `http://localhost:8800/api`
const Featured = () => {
  const { data, loading, error } = useFetch(
    `${hotelApiUrl}/hotels/countByCity?cities=Bangalore,Delhi,Jaipur,Mumbai`
  ); console.log(error)
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) :
        (
          <>
            <div className="featuredItem">
              <img
                src="https://media.istockphoto.com/photos/bangalore-or-bengalurucity-scape-with-green-trees-on-foreground-picture-id175633219?b=1&k=20&m=175633219&s=170667a&w=0&h=KGwJAcvfaLreppc_IQwTXr4Zv66xWzdE8WHAEhGMzEA="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Bangalore</h1>
                <h2>{data[0]} properties</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img
                src="https://travel-atlas.com/image/1080/delhi0_free.jpg"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Delhi</h1>
                <h2>{data[1]} properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://media.istockphoto.com/photos/amber-fort-and-maota-lake-jaipur-rajasthan-india-picture-id1135820309?k=20&m=1135820309&s=612x612&w=0&h=HTvXNokiDKSuL_D_jcEX8nwVMy5hs0zXBJ0E_zI5lxg="
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Jaipur</h1>
                <h2>{data[2]} properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://wallpapercave.com/wp/wp3768667.jpg"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h2>{data[3]} properties</h2>
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default Featured;
