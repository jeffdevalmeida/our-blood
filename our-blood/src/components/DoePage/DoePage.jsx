import * as React from 'react';
import {useState} from 'react'; 
import doeImage from '../../assets/images/doe.png'
import { Button, Modal, Form } from 'react-bootstrap';

export default function DoePage() {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var 
    return (
        <>
        <div style={{textAlign: "center"}}>
            <img className="m-3" src={doeImage} alt="doe Sangue"/>
            <h5>Sua doação importa</h5>
            <p>Até 3 vidas com 1 doação</p>
            <p>Mais de 30.000 doações são necessárias todos os dias</p>
            <p>Apenas 1.9% da população brasileira doa sangue.</p>
            <Button variant="danger" onClick={handleShow}>Quero ajudar</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Seu Cadastro:</Modal.Title>
                </Modal.Header>
                <Form>
                <Modal.Body>
                    <Form.Group controlId="name">
                        <Form.Label>Nome Completo:</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="birthday">
                        <Form.Label>Data de Nascimento</Form.Label>
                         <Form.Control type="date" placeholder="" /> 
                    </Form.Group>
                    <Form.Group controlId="cpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="state">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="bloodType">
                        <Form.Label>Tipo sanguineo</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="" />
                    </Form.Group>
                    
                    <Form.Group controlId="password">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>
                  
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Modal.Footer>
                </Form>
            </Modal>
        </div>
        </>
    )
}
