import { PROPERTYLISTINGSAMPLE } from "@/constants";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const property = PROPERTYLISTINGSAMPLE.find((p) => p.name === id);
  if (property) res.status(200).json(property);
  else res.status(404).json({ error: "Not found" });
}