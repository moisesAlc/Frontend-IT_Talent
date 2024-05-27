import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Table } from 'react-bootstrap';

function Aluno() {
    const { id } = useParams();
    const [aluno, setAluno] = useState([null]);
    const base = "http://localhost:8080"

    useEffect(() => {
        const pegaAluno = async () => {
            try {
                const res = await axios.get(`${base}/aluno/${id}`); 
                setAluno(res.data[0]);
                console.log(res.data[0]);
                console.log(id)
            } catch (error) {
                console.log(error);
            }
        }
        if (id) pegaAluno();
    }, [id]);

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="8">
                    <h1 className="my-4 text-center">Aluno</h1>
                    {aluno ? (
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
                                <tr>
                                    <td>{aluno.id}</td>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.idade}</td>
                                    <td>{aluno.cidade}</td>
                                </tr>
                            </tbody>
                        </Table>
                    ) : (
                        <p>Carregando...</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Aluno;
