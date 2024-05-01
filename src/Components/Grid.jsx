import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  Th,
  Td,
  Tr,
  Tbody,
  Thead,
  Table,
  ActionIconWrapper,
} from "../Styles/Grid";

const Grid = ({ users, setUsers, setEditingUser }) => {
  const handleDelete = async (cdAluno) => {
    try {
      const response = await axios.post("http://localhost:8080/graphql", {
        query: `
                mutation DeleteAluno($cdAluno: String!) {
                    deleteAluno(cdAluno: $cdAluno)
                }
            `,
        variables: {
          cdAluno: cdAluno,
        },
      });
      console.log(response); 

      if (response.data.errors) {
        toast.error("Erro ao excluir aluno!");
        return;
      }

      if (response.data.data && response.data.data.deleteAluno) {
        const newArray = users.filter((user) => user.cdAluno !== cdAluno);
        setUsers(newArray);
        toast.success("Aluno excluído com sucesso!");
      } else {
        toast.error("Falha ao excluir aluno!");
      }
    } catch (error) {
      console.error("Erro ao excluir aluno:", error);
      toast.error("Erro ao excluir aluno!");
    }
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th>CPF</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="50%">{item.nmAluno}</Td>
            <Td width="50%">{item.emailAluno}</Td>
            <Td width="50%">{item.cpfAluno}</Td>
            <Td style={{ textAlign: "center" }} width="5%">
              <ActionIconWrapper>
                <FaEdit onClick={() => setEditingUser(item)} />
              </ActionIconWrapper>
            </Td>
            <Td style={{ textAlign: "center" }} width="5%">
              <ActionIconWrapper>
                <FaTrash
                  data-testid="delete-icon"
                  onClick={() => handleDelete(item.cdAluno)}
                />
              </ActionIconWrapper>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
