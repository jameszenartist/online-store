import { Items } from "../../../items";
export default function handler(req, res) {
  res.status(200).json(Items);
}
