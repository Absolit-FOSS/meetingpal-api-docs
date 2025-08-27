import { render } from "preact";
import React from "preact/compat";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./style.css";

const App: React.FC = () => {
  return (
    <div>
      <SwaggerUI url="swagger.json" />
    </div>
  );
};

export default App;

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("app"));
}

// "/attendees/add-to-panel": {
//       "post": {
//         "summary": "Adds a attendee to the panel.",
//         "description": "Adds an attendee to the panel in the meeting.",
//         "parameters": [
//           {
//             "in": "body",
//             "name": "body",
//             "description": "",
//             "required": true,
//             "schema": {
//               "type": "object",
//               "properties": {
//                 "attendeeId": { "type": "string" },
//                 "meetingId": { "type": "string" },
//                 "addToPanel": { "type": "boolean" }
//               },
//               "required": ["attendeeId", "meetingId", "addToPanel"]
//             }
//           }
//         ],
//         "security": [
//           {
//             "bearerAuth": []
//           }
//         ],
//         "responses": {
//           "200": {
//             "description": "Attendee added to the panel",
//             "schema": {
//               "type": "object",
//               "properties": {
//                 "message": { "type": "string" }
//               }
//             }
//           },
//           "400": {
//             "description": "Client content error"
//           },
//           "401": {
//             "description": "Not authorized"
//           },
//           "404": {
//             "description": "Not found"
//           },
//           "500": {
//             "description": "Internal server error"
//           }
//         }
//       }
//     },
