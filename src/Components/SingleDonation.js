// import React from "react";
// import Donations from "../Components/Donations";

// export default function SingleDonation({ donation }) {
//     return (
//         <div className="SingleDonation">
//             <h2>Single Donation</h2>
//             {donation ? (
//                 <Donations
//                     donation={donation}
//                     onEdit={(editedDonation) => {
//                     }}
//                     onDelete={(deletedDonation) => {
//                     }}
//                 />
//             ) : (
//                 <p>No donation selected.</p>
//             )}
import React, { useState } from "react";
// import Donation from "../Components/Donation";
// import Donation from "./Donations";

export default function SingleDonation({ donation }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //make api call to backend for a SINGLE donation id

  //         <div className="SingleDonation">
  //             <h2>Single Donation</h2>
  //             {donation ? (
  //                 <Donation
  //                     donation={donation}
  //                     onEdit={(editedDonation) => {
  //                     }}
  //                     onDelete={(deletedDonation) => {
  //                     }}
  //                 />
  //             ) : (
  //                 <p>No donation selected.</p>
  //             )}
  //         </div>
  //     );
  // }

  return (
    // <div>
    <div className="column control is-flex is-justify-content-center is-align-items-center">
      {/* <div className="control " > */}
      <button
        className="button is-medium is-rounded is-primary has-text-weight-bold"
        onClick={openModal}
      >
        Show More
      </button>
      {/* </div> */}
      {/* </div> */}

      <div className={`modal ${isModalOpen ? "is-active" : ""}`}>
        <div className="modal-background " onClick={closeModal}></div>
        <div className="modal-card">
          <section className="modal-card-body py-6 px-6 has-background-info">
            <div className="columns">
              <h1 className="modal-card-title title is-2 has-text-primary has-text-left">
                User Donation
              </h1>
              <button
                className="delete"
                aria-label="close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="columns">
              <div className="column is-one-fifth">
                <figure className="image is-64x64">
                  <img
                    src="https://bulma.io/images/placeholders/64x64.png"
                    alt="donation"
                    className="is-rounded"
                  />
                <p className="content is-size-6 is-large has-text-dark mt-3">
                  User:{" "}
                </p>
                <p className="content is-size-6 is-large has-text-dark ">
                  Date:{" "}
                </p>
                </figure>
              </div>
              <div className="column has-text-left is-four-fifth">
                <p className="content is-size-4 is-large has-text-primary has-text-weight-bold">
                  Title:{" "}
                </p>
                <p className="content is-size-6 is-large has-text-dark">
                  Category:{" "}
                </p>
                <p className="content is-size-6 is-large has-text-dark">
                  Description:{" content blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "}
                </p>
                {/* <p className="content is-size-6 is-large has-text-dark">
                  Distance: miles away
                </p> */}
              </div>
            </div>
              <figure className="image is-96x128 pt-4">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="donation"
                  />
                </figure>
            <button className="button has-background-primary is-rounded has-text-white has-text-weight-bold mt-5" onClick={closeModal}>
              Message "The Giver/Donor"
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
