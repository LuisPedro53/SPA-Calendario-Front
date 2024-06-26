import React, { useEffect, useState } from "react";
import { FormContainer, InputArea, Input, Label, Button } from "../Styles/Form";
import { toast } from "react-toastify";
import axios from "axios";

const Form = ({ editingUser, editingTarefa, fetchTarefas }) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [tempo, setTempo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [tarefas, setTarefas] = useState("");

  useEffect(() => {
    if (editingTarefa) {
      setTarefas(editingTarefa.cdTarefa);
      setTitulo(editingTarefa.nmTitulo);
      setDescricao(editingTarefa.nmDescricao);
      setData(editingTarefa.dtTarefa);
      setHora(editingTarefa.horaTarefa);
      setTempo(editingTarefa.tempoTarefa);
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [editingTarefa]);

  const handleCreate = async (tarefa) => {
    try {
      const response = await axios.post("http://localhost:8080/graphql", {
        query: `
          mutation CreateTarefa($nmTitulo: String!, $nmDescricao: String!, $dtTarefa: Date!, $horaTarefa: Time!, $tempoTarefa: Int!) {
          createTarefa(nmTitulo: $nmTitulo, nmDescricao: $nmDescricao, dtTarefa: $dtTarefa, horaTarefa: $horaTarefa, tempoTarefa: $tempoTarefa) {
            nmTitulo
            nmDescricao
            dtTarefa
            horaTarefa
            tempoTarefa
          }
            }

        `,
        variables: tarefa,
      });

      toast.success("Tarefa criada com sucesso!");
      fetchTarefas();
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
      toast.error("Erro ao criar tarefa!");
    }
  };

  const handleUpdate = async (tarefa) => {
    try {
      const response = await axios.post("http://localhost:8080/graphql", {
        query: `
        mutation UpdateTarefa(
          $cdTarefa: String!,
          $nmTitulo: String,
          $nmDescricao: String,
          $dtTarefa: Date,
          $horaTarefa: Time,
          $tempoTarefa: Int
        ) {
          updateTarefa(
            cdTarefa: $cdTarefa,
            nmTitulo: $nmTitulo,
            nmDescricao: $nmDescricao,
            dtTarefa: $dtTarefa,
            horaTarefa: $horaTarefa,
            tempoTarefa: $tempoTarefa
          ) {
            cdTarefa
            nmTitulo
            nmDescricao
            dtTarefa
            horaTarefa
            tempoTarefa
          }
        }
      `,
        variables: tarefa,
      });

      toast.success("Tarefa atualizada com sucesso!");
      fetchTarefas();
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      toast.error("Erro ao atualizar tarefa!");
    }
  };

  const handleSearch = () => {
    fetchTarefas(titulo.trim());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let tarefa = {
      nmTitulo: titulo.trim(),
      nmDescricao: descricao.trim(),
      dtTarefa: data,
      horaTarefa: hora + ":00.000Z",
      tempoTarefa: parseInt(tempo),
    };

    if (!titulo || !descricao || !data || !hora || !tempo) {
      return toast.warn("Preencha todos os campos");
    }

    if (isEditing) {
      tarefa = { ...tarefa, cdTarefa: tarefas };
      handleUpdate(tarefa);
    } else {
      handleCreate(tarefa);
    }

    setTitulo("");
    setDescricao("");
    setData("");
    setHora("");
    setTempo("");
    setIsEditing(false);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputArea>
        <Label htmlFor="titulo-input">Título</Label>
        <Input
          id="titulo-input"
          name="nmTitulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </InputArea>

      <InputArea>
        <Label htmlFor="descricao-input">Descrição</Label>
        <Input
          id="descricao-input"
          name="nmDescricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </InputArea>

      <InputArea>
        <Label htmlFor="data-input">Data</Label>
        <Input
          id="data-input"
          name="dtTarefa"
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </InputArea>

      <InputArea>
        <Label htmlFor="hora-input">Hora</Label>
        <Input
          id="hora-input"
          name="horaTarefa"
          type="time"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        />
      </InputArea>

      <InputArea>
        <Label htmlFor="tempo-input">Tempo (minutos)</Label>
        <Input
          id="tempo-input"
          name="tempoTarefa"
          type="number"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
        />
      </InputArea>

      <Button type="submit">{isEditing ? "ATUALIZAR" : "SALVAR"}</Button>
    </FormContainer>
  );
};

export default Form;
