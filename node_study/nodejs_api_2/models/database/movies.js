import { MongoClient, ObjectId, ServerApiVersion } from "mongodb"
const uri = 'mongodb+srv://user:???@cluster0.dhwmu.mongodb.net/?retryWrites=true&w=majority'

const client = MongoClient(uri, {
    ServerApi: {
        version: ServerApiVersion.v1,
        strct: true,
        deprecationErrors: true
    }
})

async function connect () {
    try {
        await client.connect()
        const database = client.db("database")
        return database.collection("movies")
    } catch (error) {
        console.error("Error conneting to the databasse")
        console.error(error)
        await client.close()
    }
}

export class MovieModel {
    static async getAll ({ genre }) {
        const db = await connect()

        if (genre) {
            return db.find({
                genre: {
                    $elementMatch: {
                        $regex: genre,
                        $options: 'i'
                    }
                }
            }).toArray()
        }

        return db.find({}).toArray
    }

    static async getById ({ id }) {
        const db = await connect()
        const objectId = new ObjectId(id)
        return db.findOne({ _id: objectId})
    }

    static async create ({ input }) {
        const db = await connect()

        const { insertedId } = db.insertOne(input)

        return {
            id: insertedId,
            ...input
        }
    }

    static async delete ({ id }) {
        const db = await connect()
        const objectId = new ObjectId(id)
        const { deletedCount } = await db.deleteOne({ _id: objectId })
        return deletedCount > 0
    }

    static async update ({ id, input }) {
        const db = await connect()
        const objectId = new ObjectId(id)

        const { ok, value } = await db.findOneAndUpdate({ _id: objectId }, { $set: input }, { returnNewDocument: true })

        if (!ok) return false

        return value
    }
}