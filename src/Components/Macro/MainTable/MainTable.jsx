import { SearchOutlined, PlusOutlined, PrinterOutlined, FileExcelOutlined, DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import {Button, Drawer, Input, Space, Table} from 'antd';
import { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import {TableStat} from "./TableStat";
import css from './MainTable.module.css'
import * as XLSX from 'xlsx'
import {useReactToPrint} from "react-to-print";


export function MainTable({pdata, pcolumns, defkey, add, onDelete, onEdit, edit, setEd, viewBtn, statData, pageTitle, xwidth, onView, edw, adw}) {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);

    const [open, setOpen] = useState(false);
    const [openedit, setOpenedit] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const showDrawerEdit = () => {
        setOpenedit(true);

    };
    const onCloseEdit = () => {
        setOpenedit(false);
        setEd({})
    };

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Поиск...`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Искать
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Очистить
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });


    let columns = pcolumns?.map((item)=>{
        return Object.assign({
            sorter: (a, b) => {
                // a.dataIndex.length - b.dataIndex.length
                if(a[item.dataIndex] > b[item.dataIndex]) return 1;
                if(a[item.dataIndex] === b[item.dataIndex]) return 0;
                if(a[item.dataIndex] < b[item.dataIndex]) return -1;
            },
            sortDirections: ['descend', 'ascend'],
            ...getColumnSearchProps(item.dataIndex),
        }, item)
    })
    columns?.push({
        title: 'Инструменты',
        dataIndex: 'tools',
        key: 'tools',
        fixed: 'right',
        width: 150,
        align: 'right',
        render: (_, rec) => <Space>
            {(viewBtn) ? <Button type="primary" style={{backgroundColor: 'indigo'}} onClick={ e => onView(e, rec)} shape="circle" icon={<EyeOutlined />}/> : ''}
            {(edit) ? <Button type="primary" style={{marginLeft: '5px'}} onClick={ e => { onEdit(rec); setOpenedit(true) }} shape="circle" icon={<EditOutlined />}/> : ''}
            <Button type="primary" onClick={ e => onDelete(e, rec)} style={{marginLeft: '5px'}} danger shape="circle" icon={<DeleteOutlined />}/>
        </Space>,
    })

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return <>
        <TableStat statData={statData} />
        <Drawer title="Ma'lumot qo'shish" width={(adw) ? adw : '760px'} size={'large'} placement="right" onClose={onClose} open={open}>
            {add}
        </Drawer>

        <Drawer title="Ma'lumotni taxrirlash" width={(edw) ? edw : '760px'} size={'large'} placement="right" onClose={onCloseEdit} open={openedit}>
            {edit}
        </Drawer>
        <div className={css.heading}>
            <h2>{pageTitle}</h2>
            <Space>
                <Button onClick={handlePrint} type="primary" style={{backgroundColor: 'gray'}} shape="circle" icon={<PrinterOutlined/>}/>
                <Button type="primary" onClick={showDrawer} shape="circle" icon={<PlusOutlined/>}/>
            </Space>
        </div>
        <Table scroll={{
            x: (xwidth)? xwidth : 1300,
        }} rowKey={defkey} ref={componentRef} bordered={true} columns={columns} dataSource={pdata}/>
    </>;

}