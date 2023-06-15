import React, {useEffect, useState} from 'react';
import axios from "axios";

const UserTest = () => {
    const [data, setData] = useState()

    const loadUsers = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setData(res.data)
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <div>
            {data.map(user => <div key={user.id} data-testid="user-item">{user.name}</div>)}
        </div>
    );
};

export default UserTest;
