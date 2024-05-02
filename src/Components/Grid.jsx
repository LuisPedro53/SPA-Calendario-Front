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

const Grid = ({ tarefas, setTarefas, setEditingTarefa }) => {
  const handleDelete = async (cdTarefa) => {
    try {
      const response = await axios.post("http://localhost:8080/graphql", {
        query: `
          mutation DeleteTarefa($cdTarefa: String!) {
            deleteTarefa(cdTarefa: $cdTarefa)
          }
        `,
        variables: {
          cdTarefa: cdTarefa,
        },
      });
      console.log(response);

      if (response.data.errors) {
        toast.error("Erro ao excluir tarefa!");
        return;
      }

      if (response.data.data && response.data.data.deleteTarefa) {
        const newArray = tarefas.filter(
          (tarefa) => tarefa.cdTarefa !== cdTarefa
        );
        setTarefas(newArray);
        toast.success("Tarefa excluída com sucesso!");
      } else {
        toast.error("Falha ao excluir tarefa!");
      }
    } catch (error) {
      console.error("Erro ao excluir tarefa:", error);
      toast.error("Erro ao excluir tarefa!");
    }
  };

  const formatarData = (data) => {
    const dataObj = new Date(data);
    const dia = dataObj.getDate().toString().padStart(2, "0");
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, "0");
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Título</Th>
          <Th>Descrição</Th>
          <Th>Data</Th>
          <Th>Hora</Th>
          <Th>Tempo</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {tarefas.map((item, i) => (
          <Tr key={i}>
            <Td width="25%">{item.nmTitulo}</Td>
            <Td width="25%">{item.nmDescricao}</Td>
            <Td width="15%">{formatarData(item.dtTarefa)}</Td>
            <Td width="15%">{item.horaTarefa.substring(0, 5)}</Td>
            <Td width="10%">{item.tempoTarefa}</Td>
            <Td style={{ textAlign: "center" }} width="5%">
              <ActionIconWrapper>
                <FaEdit onClick={() => setEditingTarefa(item)} />
              </ActionIconWrapper>
            </Td>
            <Td style={{ textAlign: "center" }} width="5%">
              <ActionIconWrapper>
                <FaTrash
                  data-testid="delete-icon"
                  onClick={() => handleDelete(item.cdTarefa)}
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
