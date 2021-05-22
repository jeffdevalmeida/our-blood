import * as React from 'react';
import doeImage from '../../assets/images/doe.png'
import { Button } from 'react-bootstrap';
import registerModal from '../registerModal/registerModal'

export default function DoePage() {
    // state = {
    //     show: false
    //   };
    //   showModal = e => {
    //     this.setState({
    //       show: true
    //     });
    //   };
    return (
        <>
        <div style={{textAlign: "center"}}>
            <img className="m-3" src={doeImage} alt="doe Sangue"/>
            <h5>Sua doação importa</h5>
            <p>Até 3 vidas com 1 doação</p>
            <p>Mais de 30.000 doações são necessárias todos os dias</p>
            <p>Apenas 1.9% da população brasileira doa sangue.</p>
            <Button variant="danger" onClick={e => {
            this.showModal();
             }}>Quero ajudar</Button>
            <registerModal />
        </div>
        </>
    )
}
