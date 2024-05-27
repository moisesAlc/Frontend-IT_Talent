import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Table } from 'react-bootstrap';

function Alunos() {
    const [alunos, setAlunos] = useState([])
    const base = "http://localhost:8080"

    useEffect(() => {
        const pegaAlunos = async () => {
            try {
                const res = await axios.get(base + "/alunos/")
                const sortedAlunos = res.data.sort((a, b) => b.id - a.id);
                setAlunos(sortedAlunos);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        pegaAlunos()
    }, [])

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="8">
                    <h1 className="my-4 text-center">Alunos</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Cidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunos.map((aluno) => (
                                <tr key={aluno.id}>
                                    <td>{aluno.id}</td>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.idade}</td>
                                    <td>{aluno.cidade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Alunos;