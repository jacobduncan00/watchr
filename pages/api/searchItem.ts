import type { NextApiRequest, NextApiResponse } from "next";
import { eBay } from "../../utils/ebay";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req);
  eBay.finding
    .findItemsAdvanced({
      keywords: req.body.query_string,
    })
    .then((result) => {
      res.statusCode = 200;
      res.send(result);
      res.end();
    })
    .catch((error) => {
      res.statusCode = 405;
      res.send(error);
      res.end();
    });
}
