import drop from '../../assets/images/drop.png'

export default function DonorList(props) {
    const donors = props.donors;
    
            const donores = donors.map((donors) =>
            <li className="col-md-1">
                <img className="position-absolute" src={drop} />
                <p className="position-relative ob-UltimosDoadores_bloodtype text-white">{donors.bloodtype}</p>
                <p className="pt-4 text-white">{donors.name}</p>
              </li>
            );
            return (
                <div >
                    <ul className="d-flex justify-content-center mt-5 list-unstyled">{donores}</ul>
                </div>
            );
  }
