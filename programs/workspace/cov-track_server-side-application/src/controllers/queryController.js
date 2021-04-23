import mongoose from "mongoose";
import { CitizenSchema, HistorySchema, placesSchema } from "../models/covTrackModel";

const Citizen = mongoose.model("Citizen", CitizenSchema);
// const History = mongoose.model("History", HistorySchema);
// const Business = mongoose.model("Business", placesSchema);

// export async function query(req, res) {
//     const data = await User.create(req.body);
//     return res.json(data);
// }

// const ids = [
//     '4ed3ede8844f0f351100000c',
//     '4ed3f117a844e0471100000d',
//     '4ed3f18132f50c491100000e',
// ];

// export async function query(req, res) {
//     const data = await History.find({ '_id': { $in: ids } }, () => {

//     });
//     return res.json(data);
// }

export function AllUsers() {
    Citizen.find({}, function (err, citizens) {

        const citizenMap = {};

        citizens.forEach(function (citizen) {

            citizenMap[citizen._id] = citizen;

        });
        return (citizenMap);
    });
}

// export const queryInfected = (req, res) => {
//     History.findOne(
//       { nic: req.params.nic },
//       req.body,
//       { new: true, useFindAndModify: false },
//       (err, Customer) => {
//         if (err) {
//           res.send(err);
//         }
//         res.json(Customer);
//       }
//     );
//   };
