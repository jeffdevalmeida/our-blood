import React, { useEffect, useState } from 'react';
import './UltimosDoadores.css';
import DonorList from './donorDrop'
import { getDonors } from '../../dataAcess/dataManager'


export default function UltimosDoadores() {
    useEffect(() => {
        getDonors().then(function (response) {
                setDonors(response)
          })
      }, []);

    const [donor, setDonors] = useState([]);

    return (
        <>
        <div class="container-fluid">
            <div className="ob-UltimosDoadores_background">
                <h2 className="ob-UltimosDoadores_title pt-5">Ultimos <span className="text-white">doadores</span>:</h2>
            <div className="row">
                <DonorList donors={donor}  />
            </div>
            </div>
        </div>
        </>
    )
}