import PetService from 'services/petService'
import type { Request, Response, NextFunction } from 'express'

export default class PetController {
    service: PetService

    constructor() {
        this.service = new PetService()
    }

    async findAll(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = await this.service.findAll()
            res.status(200).json(result)
            next()
        } catch (err) {
            next(err)
        }
    }
}
