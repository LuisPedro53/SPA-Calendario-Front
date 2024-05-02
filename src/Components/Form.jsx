import React, { useEffect, useState } from "react";
import { FormContainer, InputArea, Input, Label, Button } from "../Styles/Form";
import { toast } from "react-toastify";
import axios from "axios";

const Form = ({ editingUser, setEditingUser, fetchUsers }) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [tempo, setTempo] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingUser) {
      setTitulo(editingUser.nmTitulo);
      setDescricao(editingUser.nmDescricao);
      setData(editingUser.dtTarefa);
      setHora(editingUser.horaTarefa);
      setTempo(editingUser.tempoTarefa);
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  }, [editingUser]);

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
      // fetchUsers();
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
      toast.error("Erro ao criar tarefa!");
    }
  };

  const handleUpdate = async (tarefa) => {
    try {
      const response = await axios.post("http://localhost:8080/graphql", {
        query: `
          mutation UpdateTarefa($cdTarefa: String!, $nmTitulo: String, $nmDescricao: String, $dtTarefa: Date, $horaTarefa: Time, $tempoTarefa: Int) {
            updateTarefa(cdTarefa: $cdTarefa, nmTitulo: $nmTitulo, nmDescricao: $nmDescricao, dtTarefa: $dtTarefa, horaTarefa: $horaTarefa, tempoTarefa: $tempoTarefa) {
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
      fetchUsers();
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
      toast.error("Erro ao atualizar tarefa!");
    }
  };

  const handleSearch = () => {
    fetchUsers(titulo.trim(), descricao.trim(), data, hora, tempo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const tarefa = {
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
      tarefa.cdTarefa = editingUser.cdTarefa;
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
      {!isEditing && (
        <Button type="button" onClick={handleSearch}>
          PESQUISAR
        </Button>
      )}
    </FormContainer>
  );
};

export default Form;
