import { Button } from 'react-bootstrap';
import * as React from 'react';
import doe from './doe.png'
import './DoePage.css';

export default function DoePage() {
    return (
        <>
            <img className="doe-image" src={doe} />
            <h5>Sua doação importa</h5>
            <p>Até 3 vidas com 1 doação</p>
            <p>Mais de 30.000 doações são necessárias todos os dias</p>
            <p>Apenas 1.9% da população brasileira doa sangue.</p>
            <Button variant="danger">Quero ajudar</Button>
        </>
    )
}