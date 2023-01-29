import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../exception/errorHandler";

export default (err: unknown, req: Request, res: Response, next: NextFunction): void => {
    if (err instanceof ErrorHandler) {
        res.status(err.status).json({
            message: err.message,
            status: err.status
        })
        return
    }
    res.json({
        message: 'Internal server error',
        status: 500
    })
}