import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Ranking: FC = ({id}) => {


    
    

    return (
        <div className="d-flex flex-column bg-primary p-3 rounded text-white justify-content-start align-items-start" >
            <span className="font-weight-bold fs-5">Nome do ranking</span>
            <p className="fs-7">
                Criado em 26 de Março de 2022
            </p>
            

            <LinkContainer to={`/dashboard/ranking-detail/ranking/${id}`}>
                <Button variant="outline-primary" style={{backgroundColor: 'white'}}>Abrir</Button>
            </LinkContainer>
            
           
            
        </div>
    );
}

export default Ranking;