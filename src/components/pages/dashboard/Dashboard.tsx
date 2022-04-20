// import Table from '../table';
import React, {  FC } from 'react';
import { Container,  } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';




const Dashboard: FC = ({children}) => {


    return(
        <div className="container-fluid">
            <h1>O que deseja fazer?</h1>
            <Outlet />
        </div>
            

    )
}


export default Dashboard

