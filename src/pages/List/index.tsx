import React, { useEffect, useState } from "react"
import { Modal } from "../../components/Modal";
import { Spinner } from "../../components/Spinner";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/api"
import { PetCard } from "./components/PetCard";
import { ListContainer, ListContent, PetsArea } from "./styles"


export function List() {

  const { getUserData } = useAuth();

  const [pets, setPets] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [modalImage, setModalImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);



  function handleCloseModal() {
    setModalImage("");
    setIsModalOpen(false)
  }

  function handleOpenModal(imgUrl: string) {
    setModalImage(imgUrl)
    setIsModalOpen(true)
  }



  async function fetchPets(breed?: string) {
    setIsLoading(true)
    const { token } = getUserData();

    try {
      const response = await api.get('list', {
        params: {
          breed
        },
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        }
      })
      const { data } = response;
      setIsLoading(false);
      setPets(data.list);
    } catch (e) {
      alert("Erro ao obter pets!");
    }
  }

  useEffect(() => {
    fetchPets()
  }, [])

  return (
    <ListContainer>
      <h1>Lista de Pets</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => fetchPets()}>CHIHUAHUA</button>
          </li>
          <li>
            <button onClick={() => fetchPets("husky")}>HUSKY</button>
          </li>
          <li>
            <button onClick={() => fetchPets("pug")}>PUG</button>
          </li>
          <li>
            <button onClick={() => fetchPets("labrador")}>LABRADOR</button>
          </li>
        </ul>
      </nav>
      <ListContent>

        {isLoading ? (<Spinner />) : (
          <>
            <Modal displayImage={modalImage} showModal={isModalOpen} onCloseModal={handleCloseModal} />
            <PetsArea>
              {pets.map((pet) => (
                <PetCard petImage={pet} key={pet} handleClick={() => handleOpenModal(pet)} />
              ))}
            </PetsArea>
          </>
        )}
      </ListContent>
    </ListContainer>
  )
}