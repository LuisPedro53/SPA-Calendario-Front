import GlobalStyle from "./Styles/global.js";
import Form from "./Components/Form.jsx";
import Grid from "./Components/Grid.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Title } from "./Styles/App.js";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [editingTarefa, setEditingTarefa] = useState(null);

  const fetchTarefas = async (nmTitulo = null, dtTarefa = null) => {
    try {
      const response = await axios.post("http://localhost:8080/graphql", {
        query: `
        query GetTarefas($nmTitulo: String) {
          tarefas(nmTitulo: $nmTitulo) {
            cdTarefa
            nmTitulo
            nmDescricao
            dtTarefa
            horaTarefa
            tempoTarefa
          }
          }
      `,
        variables: {
          nmTitulo,
        },
      });
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
