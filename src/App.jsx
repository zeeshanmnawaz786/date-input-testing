//================== only Date

// import React, { useState } from "react";
// import moment from "moment";

// function App() {
//   const [date, setDate] = useState("");

//   const handleDate = (e) => {
//     const dateValue = e.target.value;
//     console.log("Selected date:", dateValue);

//     // parse the selected date string into a moment object using format 'YYYY-MM-DD'
//     const selectedDate = moment(dateValue, "YYYY-MM-DD");
//     console.log("Selected date as moment object:", selectedDate);

//     // convert the moment object to a unix timestamp in seconds
//     const timestamp = selectedDate.unix();
//     console.log("Unix timestamp:", timestamp);

//     setDate(dateValue);
//   };

//   return (
//     <div>
//       <center>
//         <input type="date" value={date} onChange={handleDate} />
//       </center>
//     </div>
//   );
// }

// export default App;

// =======================//== Date and time

import React, { useState } from "react";
import moment from "moment";

function App() {
  const [dateTime, setDateTime] = useState("");

  const handleDateTime = (e) => {
    const dateTimeValue = e.target.value;
    console.log("Selected date and time:", dateTimeValue);

    // parse the selected date and time string into a moment object using format 'YYYY-MM-DDTHH:mm'
    const selectedDateTime = moment(dateTimeValue, "YYYY-MM-DDTHH:mm");
    console.log("Selected date and time as moment object:", selectedDateTime);

    // convert the moment object to a unix timestamp in seconds
    const timestamp = selectedDateTime.unix();
    console.log("Unix timestamp:", timestamp);

    setDateTime(dateTimeValue);
  };

  return (
    <div>
      <center>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={handleDateTime}
        />
      </center>
    </div>
  );
}

export default App;
