import { gql, useQuery } from '@apollo/client'
import { link } from 'fs'
import { NewUserForm } from './components/newUserForm'

type User = {
  id: number
  name: string
}

export const GET_USER = gql`
  query{
    users{
      id
      name
    }
  }
`


function App() {
  const {data, loading} = useQuery(GET_USER)

  console.log(data)

  if(loading) return <h1>Loading...</h1>

  return (
    <div>
      <ul>
        {
          data.users.map((user:User) => <li value={user.id}>{user.name}</li>)
        }
      </ul>
      <NewUserForm  />
    </div>
  )
}

export default App
