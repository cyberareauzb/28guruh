import {  PlusOutlined } from "@ant-design/icons";
import { Button, Drawer,  Modal, Result,  Table } from "antd";
import { useEffect } from "react";
import Add from "./Add";
import Edit from "./Edit";
import { useUsers } from "./PostStore";

function Posts() {
    let {users, getUsers, columns, openModal, setOpenmodal, deletemodal, setDeletemodal, open, setOpen, deleteUser} = useUsers()
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <>
            <Modal footer={null} open={deletemodal} onCancel={() => setDeletemodal(false)}>
                <Result
                    status="warning"
                    title="O'chirilgan elementni qayta tiklab bo'lmaydi. Ishonchingiz komilmi?"
                    extra={
                        <Button type="primary" key="console" onClick={deleteUser}>
                            Ha O'chirilsin
                        </Button>
                    }
                />
            </Modal>
            <Modal footer={null} title="Yangilikni taxrirlash" open={openModal} onCancel={() => setOpenmodal(false)}>
                <Edit />
            </Modal>
            <Drawer open={open} onClose={() => setOpen(false)} title="Yangilik joylash">
                <Add />
            </Drawer>
            <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h2>Yangiliklar</h2>
                <Button  onClick={() => setOpen(true)} type="primary" icon={<PlusOutlined />} />
            </div>

            <Table bordered={true} rowKey={'id'} columns={columns} dataSource={users} />
        </>
    );
}

export default Posts;


