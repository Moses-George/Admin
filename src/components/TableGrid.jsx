import React, { useState } from 'react';
import { Table } from 'antd';
import TableActionsMenu from './ui/TableActionsMenu';
import MemberForm from './ui/modal/MemberForm';
import { AccountCircle } from '@mui/icons-material';
import DeleteModal from './ui/modal/DeleteModal';

const TableGrid = ({ page, setSearchParams, param, query, tableData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // const Delete = (record) => {
  //   Modal.confirm({
  //     title: 'Are you sure you want to delete this',
  //     onOk: () => {
  //       setData((pre) => {
  //         return pre.filter((person) => person.id != record.id);
  //         b;
  //       });
  //     }
  //   });
  // };

  // const Edit = () => {
  //   setVisible(true);
  // };

  const mentorsColumnData = [
    {
      key: 'avatar',
      title: 'Avatar',
      ellipsis: true,
      render: () => {
        return <AccountCircle className="text-slate-800" sx={{ fontSize: '40px' }} />;
      }
    },
    {
      key: 'id',
      title: 'UUID',
      dataIndex: 'id'
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name > b.name,
      sortDirections: ['descend']
    },
    {
      key: 'email',
      title: 'Email',
      ellipsis: true,
      dataIndex: 'email'
    },
    {
      key: 'address',
      title: 'Address',
      dataIndex: 'address'
    },
    {
      key: 'phone',
      title: 'Phone',
      width: '10%',
      dataIndex: 'phone'
    },
    {
      key: 'category',
      title: 'Category',
      width: '10%',
      dataIndex: 'category'
    },
    {
      key: 'status',
      title: 'Status',
      // ellipsis: true,
      sorter: (a, b) => a.status > b.status,
      sortDirections: ['descend'],
      render: ({ status } = record) => {
        return (
          <span
            className={`text-white pb-1.5 pt-1 w-28 text-center ${
              status === 'failed' ? 'px-5' : 'px-2.5'
            } rounded-3xl ${
              status === 'pending'
                ? 'bg-yellow-500'
                : status === 'failed'
                ? 'bg-red-500'
                : 'bg-lime-500'
            } font-medium`}>
            {status}
          </span>
        );
      }
    },
    {
      key: 'action',
      title: 'Actions',
      render: (record) => {
        return (
          <TableActionsMenu
            record={record}
            setIsEditing={setIsEditing}
            setIsDeleting={setIsDeleting}
            setSearchParams={setSearchParams}
            param={param}
            query={query}
            page={page}
          />
        );
      }
    }
  ];

  const menteesColumnData = [
    {
      key: 'avatar',
      title: 'Avatar',
      ellipsis: true,
      render: () => {
        return <AccountCircle className="text-slate-800" sx={{ fontSize: '40px' }} />;
      }
    },
    {
      key: 'id',
      title: 'UUID',
      // ellipsis: true,
      dataIndex: 'id'
    },
    {
      key: 'name',
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name > b.name,
      sortDirections: ['descend']
    },
    {
      key: 'email',
      title: 'Email',
      // ellipsis: true,
      dataIndex: 'email'
    },
    {
      key: 'address',
      title: 'Address',
      dataIndex: 'address'
    },
    {
      key: 'phone',
      title: 'Phone',
      dataIndex: 'phone'
    },
    {
      key: 'status',
      title: 'Status',
      sorter: (a, b) => a.status > b.status,
      sortDirections: ['descend'],
      render: ({ status } = record) => {
        return (
          <span
            className={`w-full text-white pb-1.5 pt-1 text-center ${
              status === 'failed' ? 'px-5' : 'px-2.5'
            } rounded-3xl ${
              status === 'pending'
                ? 'bg-yellow-500'
                : status === 'failed'
                ? 'bg-red-500'
                : 'bg-lime-500'
            } font-medium`}>
            {status}
          </span>
        );
      }
    },
    {
      key: 'action',
      title: 'Actions',
      render: (record) => {
        return (
          <TableActionsMenu
            record={record}
            setIsEditing={setIsEditing}
            setIsDeleting={setIsDeleting}
            setSearchParams={setSearchParams}
            param={param}
            query={query}
            page={page}
          />
        );
      }
    }
  ];

  const transactionsColumnData = [
    {
      key: 'id',
      title: 'UUID',
      ellipsis: true,
      dataIndex: 'id'
    },
    {
      key: 'customer',
      title: 'Customer',
      dataIndex: 'customer',
      sorter: (a, b) => a.name > b.name,
      sortDirections: ['descend']
    },
    {
      key: 'email',
      title: 'Email',
      // ellipsis: true,
      dataIndex: 'email'
    },
    {
      key: 'date',
      title: 'Date',
      dataIndex: 'date'
    },
    {
      key: 'phone',
      title: 'Phone',
      dataIndex: 'phone'
    },
    {
      key: 'mentor',
      title: 'Mentor',
      dataIndex: 'mentor'
    },
    {
      key: 'status',
      title: 'Status',
      sorter: (a, b) => a.status > b.status,
      sortDirections: ['descend'],
      render: ({ status } = record) => {
        return (
          <span
            className={`text-white pb-1.5 pt-1 text-center ${
              status === 'failed' ? 'px-5' : 'px-2.5'
            } rounded-3xl ${
              status === 'pending'
                ? 'bg-yellow-500'
                : status === 'failed'
                ? 'bg-red-500'
                : 'bg-lime-500'
            } font-medium`}>
            {status}
          </span>
        );
      }
    },
    {
      key: 'action',
      title: 'Actions',
      width: '10%',
      render: (record) => {
        return (
          <TableActionsMenu
            record={record}
            setIsEditing={setIsEditing}
            setIsDeleting={setIsDeleting}
            setSearchParams={setSearchParams}
            param={param}
            query={query}
            page={page}
          />
        );
      }
    }
  ];

  return (
    <>
      {isEditing && <MemberForm isNewMember={false} onClose={() => setIsEditing(false)} />}
      {isDeleting && <DeleteModal setIsDeleting={setIsDeleting} />}
      <div className="app">
        <div className="table">
          <Table
            dataSource={tableData}
            columns={
              page === 'mentors'
                ? mentorsColumnData
                : page === 'mentees'
                ? menteesColumnData
                : transactionsColumnData
            }
            pagination={{ pageSize: 10, total: tableData.length, showSizeChanger: true }}
            className="overflow-x-scroll"
            // scroll={{ x: 700 }}
          />
        </div>
      </div>
    </>
  );
};

export default TableGrid;
