import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method == 'POST'){   
        return res.json({
            msg: 'Akhmat sila'
        })
    }
}