import { FC } from 'react'
import { Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Outlet } from "react-router-dom";
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';

const RankingDetailTab: FC = () => {
    

    return (
        <div >
            <Nav variant="pills" className="mt-4 pb-4 d-flex align-items-center">
                <Nav.Item >
                    <LinkContainer to="/dashboard">
                        <Nav.Link >
                            <ArrowLeftCircleFill size={40} />
                        </Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item >
                    <LinkContainer to="/dashboard/ranking-detail/ranking/:rankingId">
                        <Nav.Link >Projetos</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item >
                    <LinkContainer to="/dashboard/ranking-detail/new-project">
                        <Nav.Link >Adicionar projeto</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
            <Outlet />
        </div>
    )
};


export default RankingDetailTab;