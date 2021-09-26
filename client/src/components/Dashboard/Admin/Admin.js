import React, { useContext, useState } from 'react';
import './Admin.css';
import logo from '../../../images/navLogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHdd, faPlus, faUserPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import OrderList from './OrderList/OrderList';
import AddService from './AddService/AddService';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageServices from './ManageServices/ManageServices';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name} = loggedInUser;

    let history = useHistory();
    function handleClick() {
        history.push("/");
      }

    const [orderList, setOrderList] = useState(true);
    const [addService, setAddService] = useState(false);
    const [makeAdmin, setMakeAdmin] = useState(false);
    const [manageService, setManageService] = useState(false);

    const handleOrderList = ()=>{
        setOrderList(true);
        setAddService(false);
        setMakeAdmin(false);
        setManageService(false);
    }
    const handleAddService = ()=>{
        setOrderList(false);
        setAddService(true);
        setMakeAdmin(false);
        setManageService(false);
    }
    const handleMakeAdmin = ()=>{
        setOrderList(false);
        setAddService(false);
        setMakeAdmin(true);
        setManageService(false);
    }
    const handleManageServices = ()=>{
        setOrderList(false);
        setAddService(false);
        setMakeAdmin(false);
        setManageService(true);
    }

    return (
        <>
            <div className="d-flex justify-content-between font-weight-bold">
                <p className="logo" onClick={handleClick}><img src={logo} alt="" width="40px" /> Event Photography</p>
                <h4 className="bg-warning">{name}</h4>
            </div><hr/>
            <div className="row">
                    <div className="col-md-12 col-lg-3 screen">
                        <h6 className={`${orderList?"text-secondary":""}`} onClick={handleOrderList}>
                            <FontAwesomeIcon icon={faHdd}/> Order List
                        </h6><br/>
                        <h6 className={`${addService?"text-secondary":""}`} onClick={handleAddService}>
                            <FontAwesomeIcon icon={faPlus}/> Add Service
                        </h6><br/>
                        <h6 className={`${makeAdmin?"text-secondary":""}`} onClick={handleMakeAdmin}>
                            <FontAwesomeIcon icon={faUserPlus}/> Make Admin
                        </h6><br/>
                        <h6 className={`${manageService?"text-secondary":""}`} onClick={handleManageServices}>
                            <FontAwesomeIcon icon={faTasks}/> Manage Services
                        </h6><br/>
                    </div>
                    <div className="col-md-12 col-lg-9">
                        {
                            orderList && <OrderList></OrderList>
                        }
                        {
                            addService && <AddService></AddService>
                        }
                        {
                            makeAdmin && <MakeAdmin></MakeAdmin>
                        }
                        {
                            manageService && <ManageServices></ManageServices>
                        }
                    </div>
            </div>
        </>
    );
};

export default Admin;