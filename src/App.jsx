import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Title } from "./Styles/App";
import Form from "./Components/Form";
import Grid from "./Components/Grid";
import SearchForm from "./Components/SearchForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./Styles/global";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [editingTarefa, setEditingTarefa] = useState(null);

  const fetchTarefas = async (
    nmTitulo = null,
    dataInicial = null,
    dataFinal = null
  ) => {
    try {
      const query = `
      query GetTarefas($nmTitulo: String, $dataInicial: Date, $dataFinal: Date) {
        tarefas(nmTitulo: $nmTitulo, dataInicial: $dataInicial, dataFinal: $dataFinal) {
          cdTarefa
          nmTitulo
          nmDescricao
          dtTarefa
          horaTarefa
          tempoTarefa
        }
      }
    `;

      const variables = {
        nmTitulo,
        dataInicial,
        dataFinal,
      };

      const requestBody = {
        query,
        variables,
      };

      const response = await axios.post(
        "http://localhost:8080/graphql",
        requestBody
      );

      setTarefas(response.data.data.tarefas);
    } catch (error) {
      toast.error("Erro ao carregar as tarefas");
    }
  };

  useEffect(() => {
    fetchTarefas();
  }, []);

  return (
    <>
      <Container>
        <Title>Tarefas</Title>
        <Form
          editingTarefa={editingTarefa}
          setEditingTarefa={setEditingTarefa}
          fetchTarefas={fetchTarefas}
        />
        <SearchForm fetchTarefas={fetchTarefas} />
        <Grid
          tarefas={tarefas}
          setTarefas={setTarefas}
          setEditingTarefa={setEditingTarefa}
        />
      </Container>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
