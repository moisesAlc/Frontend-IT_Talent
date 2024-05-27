import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

function Create() {

    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [cidade, setCidade] = useState('');
    const base = "http://localhost:8080"

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newAluno = { nome, idade: parseInt(idade), cidade };
            const res = await axios.post(base + "/alunos", newAluno);
            setAlunos([...alunos, res.data]);
            setNome('');
            setIdade('');
            setCidade('');
        } catch (error) {
            console.error("Erro ao adicionar aluno:", error);
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h2 className="mt-5">Adicionar Novo Aluno</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="nome" className="mb-3">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="idade" className="mb-3">
                            <Form.Label>Idade:</Form.Label>
                            <Form.Control
                                type="number"
                                value={idade}
                                onChange={(e) => setIdade(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="cidade" className="mb-3">
                            <Form.Label>Cidade:</Form.Label>
                            <Form.Control
                                type="text"
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button className="form-control" type="submit" variant="secondary">Adicionar Aluno</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Create;