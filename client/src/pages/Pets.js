import React, {useState} from 'react'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'
import PetsList from '../components/PetsList'
import NewPetModal from '../components/NewPetModal'
import Loader from '../components/Loader'

const GET_PETS = gql`
  query petsList {
    pets {
      id
      name
      type
      img
    }
  }
`;

const CREATE_PET = gql`
  mutation AddPet($newPet: NewPetInput!) {
    addPet(input: $newPet) {
      id
      name
      img
      type
    }
  }
`;


export default function Pets () {
  const [modal, setModal] = useState(false)

  const {data, loading, error} = useQuery(GET_PETS);
  const [addPet, newPet] = useMutation(CREATE_PET);

  const onSubmit = input => {
    setModal(false)
    console.log(input);
    addPet({
      variables: {newPet: input}
    })
  }
  
  if (modal) {
    return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
  }
  if (loading || newPet.loading) return <Loader />
  if (error || newPet.error) return <p>ERROR</p>

  return (
    <div className="page pets-page">
      <section>
        <div className="row betwee-xs middle-xs">
          <div className="col-xs-10">
            <h1>Pets</h1>
          </div>

          <div className="col-xs-2">
            <button onClick={() => setModal(true)}>new pet</button>
          </div>
        </div>
      </section>
      <section>
        <PetsList pets={data.pets}/>
      </section>
    </div>
  )
}
