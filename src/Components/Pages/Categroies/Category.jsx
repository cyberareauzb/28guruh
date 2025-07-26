import { useEffect } from 'react';
import { MainTable } from '../../Macro/MainTable/MainTable';
import { useUsers } from '../Posts/PostStore';
import Add from '../Posts/Add';
import Edit from '../Posts/Edit';

function Category(props) {
    let { users, getUsers, columns, deleteUser, setEd } = useUsers()
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <MainTable
            pageTitle={"Foydalanuvchilar"}
            pcolumns={columns}
            pdata={users}
            add={<Add />}
            edit={<Edit />}
            onEdit={(rec)=>{
                setEd(rec)
            }}
            setEd={setEd}
            onDelete={deleteUser}
            defkey={'id'}
        />
    );
}

export default Category;