import 'reflect-metadata'
import path from 'node:path';


import { buildSchema } from 'type-graphql'

async function main() {
    
    const schema = await buildSchema({
        resolvers:[],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })

}

main()