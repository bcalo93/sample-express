import Pet from 'model/pet'
import PetRepository from 'repositories/petRepository'

export default class PetService {
    repository: PetRepository

    constructor() {
        this.repository = new PetRepository()
    }

    findAll(): Promise<Array<Pet>> {
        return this.repository.findAll()
    }
}
