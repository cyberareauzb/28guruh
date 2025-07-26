import {  Image } from "antd";
import axios from "axios";
import { create } from "zustand";

export let useUsers = create((set, get) => ({
    users: [],
    test: [],

    openModal: false,
    setOpenmodal: (s) => set({ openModal: s }),

    deletemodal: false,
    setDeletemodal: (s) => set({ deletemodal: s }),

    open: false,
    setOpen: (s) => set({ open: s }),

    deletedUser: null,
    setDeletedUser: (u) => set({ deletedUser: u }),
    ed: null,
    setEd: (u) => set({ ed: u }),

    columns: [
        {
            title: "ID",
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: "Rasm",
            dataIndex: 'mainImg',
            key: 'mainImg',
            render: (_, record) => <Image height={50} src="https://assets.weforum.org/article/image/responsive_large_0ZUBmNNVLRCfn3NdU55nQ00UF64m2ObtcDS0grx02fA.jpg" />
        },
        {
            title: "Ism Sharifi",
            dataIndex: 'firstname',
            key: 'firstname',
            render: (_, record) => <h4>{_} {record.lastname}</h4>
        },
        {
            title: "Telefon",
            dataIndex: 'tel',
            key: 'tel'
        },
        {
            title: "Yoshi",
            dataIndex: 'age',
            key: 'age'
        },

    ],

    getUsers: () => axios.get('/dars').then(res => set({ users: res.data })).catch(error=>console.log(error)),
    addUser: (values) => axios.post('/dars', values).then(res => get().getUsers()),
    updateUser: (v) => axios.put('/dars/' + v.id, v).then(res => get().getUsers()),
    deleteUser: (_, u) => axios.delete('/dars/' + u.id).then(res => {
        get().getUsers()
        get().setDeletemodal(false)
        get().setDeletedUser(null)
    })
}))