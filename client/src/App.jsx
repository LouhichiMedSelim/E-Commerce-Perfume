import React, { useEffect, useState } from "react";

import Login from "./ComponentForAcces/Login.jsx";

import axios from "axios";
import AdminPage from "./ComponentForAdmin/AdminPage.jsx";
import UserPage from "./Component/UserPage.jsx";

const App = () => {
    const [view, setView] = useState('login')
    const [dataAdmin, setDataAdmin] = useState([])
    const [dataUser, setDataUser] = useState([])
    const [dataProduct, setDataProduct] = useState([])


    const changeView = () => {
        if (view === 'login') {
            return <Login setView={setView} signup={signup} login={login} />
        }
        if (view === 'AdminPage') {
            return <AdminPage getProducts={getProducts} dataProduct={dataProduct} />
        }
        if (view === 'UserPage') {
            return <UserPage getProducts={getProducts} dataProduct={dataProduct} />
        }

    }
    useEffect(() => {
        getAdminData()
        getUserData()
        getProducts()
    }, [])


    const getProducts = () => {
        axios.get('/api/product/getAllProducts')
            .then((res) => setDataProduct(res.data))
            .catch((err) => console.log(err))
    }
    const getAdminData = () => {
        axios.get('/api/admin/getAdmin')
            .then((res) => setDataAdmin(res.data))
            .catch((err) => console.log(err))
    }
    const getUserData = () => {
        axios.get('/api/user/getAllUsers')
            .then((res) => setDataUser(res.data))
            .catch((err) => console.log(err))
    }

    const login = (x) => {
        var tr = 0
        for (var i = 0; i < dataAdmin.length; i++) {
            if (dataAdmin[i].name === x.email && dataAdmin[i].password === x.password) {
                setView('AdminPage')
                tr++
            }
        }
        for (var j = 0; j < dataUser.length; j++) {
            if (dataUser[j].userName === x.email || dataUser[j].email === x.email && dataUser[j].password === x.password) {
                setView('UserPage')
                tr++
            }
        }
        if (tr === 0) {
            alert('your name and password doesnt match ')
        }
    }
    const signup = (x) => {
        axios.post('/api/user/createUser', x)
            .then(() => { setView('login'), getUserData() })
            .catch((err) => console.log(err))
    }



    return (
        <div>
            {changeView()}
        </div>
    )

}
export default App