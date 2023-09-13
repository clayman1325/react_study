import mysql from "mysql2/promise"

const config = {
    user: "root",
    port: 3306,
    host: "localhost",
    password: '',
    dabase: moviedb
}

const connection = await mysql.connection(config)
class MovieModel {
    static async getAll( { genre }) {
        const [movies, tableInfo] = await connection.query(
            'SELECT title, year, director, duration FROM movie'
        )
    }
    static async getById( { id }) {

    }
    static async create( { input }) {

    }
    static async delete( { id }) {

    }
    static async uodate( { id ,input }) {

    }
}