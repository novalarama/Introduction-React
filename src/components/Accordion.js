function Accordion(props) {
  return (
    <div>
      {/* <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toogle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {props.header}
                        </button>
                    </h2>
                    <div id="collapse" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>{props.firstLine}</strong>
                            <p>
                                {props.children}
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {props.header}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>{props.firstLine}</strong>
              <p>
                  {props.children}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Accordion;
