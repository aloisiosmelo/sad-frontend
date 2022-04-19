import { FC, useState } from 'react'
import { Nav } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Outlet, useParams } from "react-router-dom";
import { ArrowLeftCircleFill } from 'react-bootstrap-icons';
import { createContext} from 'react';

const DetailTabContext = createContext()

const RankingDetailTab: FC = () => {

    const [ rankingId, setRankingId ] = useState('')
    let params = useParams()

    if(!rankingId ) setRankingId(params.rankingId)
    
    
    return (
        <DetailTabContext.Provider value={{rankingId: 0}}>
            <div >
                <Nav variant="pills" className="mt-4 pb-4 d-flex align-items-center">
                    <Nav.Item >
                        <LinkContainer  to="/dashboard">
                            <Nav.Link >
                                <ArrowLeftCircleFill size={40} />
                            </Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item >
                        <LinkContainer to={`/dashboard/ranking-detail/ranking/${rankingId}`}>
                            <Nav.Link >Projetos</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item >
                        <LinkContainer to={`/dashboard/ranking-detail/new-project/${rankingId}`}>
                            <Nav.Link >Adicionar projeto</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                </Nav>
                <Outlet />
            </div>
        </DetailTabContext.Provider>
    )
};


export default RankingDetailTab;