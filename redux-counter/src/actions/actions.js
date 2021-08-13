// This file is usually an OBJECT but in this case its a string

// One action is incrementing and the other is decrementing

export const ADD_ONE = "ADD_ONE";
export const MINUS_ONE = "MINUS_ONE";


// an action is like an event that describes something that happened in the application.
// The "type" field should be a string that gives this action a descriptive name, like "domain/eventName" where: 
// The domain = the feature or category that this action belongs to
// The eventName = the specific thing that happened

// export const ADD_ONE = {
//     type: "ADD_ONE"
//     // NOT sure what to do for the payload so leaving it blank
// };

// export const MINUS_ONE = {
//     type: "MINUS_ONE"
// }

