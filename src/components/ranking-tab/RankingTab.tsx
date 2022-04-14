import { FC } from "react";
import {  Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";


const RankingTab: FC = () => {

    return (
        <div >
            <Nav variant="pills" className="mt-4 pb-4">
                <Nav.Item >
                    <LinkContainer to="/dashboard">
                        <Nav.Link >Meus rankings</Nav.Link>
                    </LinkContainer>
                    
                </Nav.Item>
                <Nav.Item >
                    <LinkContainer to="/dashboard/new-ranking">
                        <Nav.Link >Criar novo ranking</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
            <Outlet />
            
        </div>
    );
}

export default RankingTab