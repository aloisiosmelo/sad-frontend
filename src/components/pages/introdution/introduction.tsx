import React, { FC } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Introduction: FC = () => {

    return (
        <div className="vh-100 container text-center d-flex flex-column justify-content-center align-items-center">
            <h1>Bem vindo!</h1>
            <p className="mt-3 fs-5">
            Este é um software dedicado a resolver os problemas de direcionamento de verbas em projetos da UFPE. Sinta-se livre para utilizar esta ferramenta e descobrir qual é a melhor decisão no momento.
            </p>
            <LinkContainer to="/dashboard">
                <ButtonGroup size="lg" className="mb-4">
                    <Button variant="danger" className="mt-4">    
                        Começar
                    </Button>
                </ButtonGroup>
            </LinkContainer>
            
        </div>
    );

}


export default Introduction