import { resolve } from 'path'
import { promises as fs } from 'fs'
import Pet from 'model/pet'

export default class PetRepositories {
    dataPath: string

    constructor() {
        this.dataPath = resolve('data', 'pets.json')
        console.log(this.dataPath)
    }

    async findAll(): Promise<Array<Pet>> {
        const pets = JSON.parse(
            await fs.readFile(this.dataPath, { encoding: 'utf-8' })
        ) as Array<Pet>
        return pets.map((pet) => new Pet(pet))
    }
}
