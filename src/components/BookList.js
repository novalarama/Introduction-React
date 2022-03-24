import { FaStar } from "react-icons/fa";

export default function BookList(props) {
  return (
    <div
      className="row m-2 p-2 rounded-lg"
      style={{ border: `2px solid lightgrey` }}
    >
      {/* Cover Area */}
      <div className="col-lg-3">
        <img
          src={props.cover}
          width={`200px`}
          height={`280px`}
          alt={`Book'sCOver`}
        />
      </div>

      {/* Labels Area */}
      <div className="col-lg-9">
        <h5>
          ISBN : {props.isbn} <br />
        </h5>
        Title : {props.name} <br />
        Author : {props.author} <br />
        Publisher : {props.publisher} <br />
        Price : {props.price} <br />
        Rating :{" "}
        {[...Array(5)].map((item, index) => {
          if (index < props.rating) {
            return (
              <b className="text-warning">
                <FaStar icon="fa-solid fa-star" />
              </b>
            );
          }
          return <FaStar icon="fa-solid fa-star" />;
        })}{" "}
        <br />
        Progress :
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: `${props.progress}%`}}
            aria-valuenow={props.progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
              {`${props.progress}%`}
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
