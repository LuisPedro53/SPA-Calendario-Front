import GlobalStyle from "./Styles/global.js";
import Form from "./Components/Form.jsx";
import Grid from "./Components/Grid.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Title } from "./Styles/App.js";

function App() {
  const [users, setUsers] = useState([]);
  const [ondEdit, setOndEdit] = useState(null);

  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async (
    nmAluno = null,
    cpfAluno = null,
    emailAluno = null
  ) => {
    try {
      const response = await axios.post("http://localhost:8080/graphql", {
        query: `
        query GetAlunos($nmAluno: String, $cpfAluno: String, $emailAluno: String) {
          alunos(nmAluno: $nmAluno, cpfAluno: $cpfAluno, emailAluno: $emailAluno) {
            cdAluno
            nmAluno
            emailAluno
            cpfAluno
          }
        }
      `,
        variables: {
          nmAluno,
          cpfAluno,
          emailAluno,
        },
      });
      setUsers(response.data.data.alunos);
    } catch (error) {
      toast.error("Erro ao carregar alunos");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  <Form
    editingUser={editingUser}
    setEditingUser={setEditingUser}
    fetchUsers={fetchUsers}
  />;

  return (
    <>
      <Container>
        <Title>Alunos</Title>
        <Form
          editingUser={editingUser}
          setEditingUser={setEditingUser}
          fetchUsers={fetchUsers}
        />

        <Grid
          users={users}
          setUsers={setUsers}
          setEditingUser={setEditingUser}
        />
      </Container>
      <ToastContainer />
      <GlobalStyle />
    </>
  );
}

export default App;
