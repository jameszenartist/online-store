import { Items } from "../../../items";

export default function handler({ query: { id } }, res) {
  const found = Items.find((item) => item.id === id);
  if (found) {
    res.status(200).json(found);
  } else {
    res
      .status(400)
      .json({ message: `Item with the id of ${id} is not found.` });
  }
}
