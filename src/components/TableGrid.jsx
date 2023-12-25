import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Table } from 'antd';
import TableActionsMenu from './ui/TableActionsMenu';
import { AccountCircle } from '@mui/icons-material';
import DeleteModal from './ui/modal/DeleteModal';
import { modifiedDate } from '../utils/timeAndDate';
import useMembersFacade from '../facades/useMembersFacade';
import useAdminFacade from '../facades/useAdminFacade';

const TableGrid = ({ page, tableData }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [tableColumn, setTableColumn] = useState([]);

  const { DeleteMember, loading, success, error, data, updateState, fetchMembers } =
    useMembersFacade();
  const { DeleteAdmin, loading: loading_2, success: success_2, fetchAdmins } = useAdminFacade();
  const isLoading = loading || loading_2;

  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get('userId');

  const adminsColumnData = [
    {
      key: 'avatar',
      title: 'Avatar',
      // ellipsis: true,
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
      key: 'firstName',
      title: 'First Name',
      dataIndex: 'firstName',
      sorter: (a, b) => a.name > b.name,
      sortDirections: ['descend']
    },
    {
      key: 'lastName',
      title: 'Last Name',
      dataIndex: 'lastName'
      // ellipsis: true
    },
    {
      key: 'email',
      title: 'Email',
      ellipsis: true,
      dataIndex: 'email'
    },
    {
      key: 'verified',
      title: 'Status',
      sorter: (a, b) => a.status > b.status,
      sortDirections: ['descend'],
      render: ({ verified } = record) => {
        return (
          <span
            className={`text-white pb-1.5 pt-1 w-28 text-center px-2.5
            } rounded-3xl ${!verified ? 'bg-yellow-500' : 'bg-lime-500'} font-medium`}>
            {verified ? 'Verified' : 'Pending'}
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
            setIsDeleting={setIsDeleting}
            page={page}
            setSearchParams={setSearchParams}
          />
        );
      }
    }
  ];

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
      key: 'firstName',
      title: 'Name',
      dataIndex: 'firstName',
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
      key: 'country',
      title: 'Country',
      dataIndex: 'country',
      ellipsis: true
    },
    {
      key: 'telNumber',
      title: 'Phone',
      width: '10%',
      dataIndex: 'telNumber',
      ellipsis: true
    },
    {
      key: 'job_title',
      title: 'Job Title',
      width: '10%',
      dataIndex: 'job_title',
      ellipsis: true
    },
    {
      key: 'price',
      title: 'Price',
      width: '10%',
      dataIndex: 'price',
      ellipsis: true
    },
    {
      key: 'verified',
      title: 'Status',
      // dataIndex: 'verified',
      // ellipsis: true,
      sorter: (a, b) => a.status > b.status,
      sortDirections: ['descend'],
      render: ({ verified } = record) => {
        return (
          <span
            className={`text-white pb-1.5 pt-1 w-28 text-center px-2.5
            } rounded-3xl ${!verified ? 'bg-yellow-500' : 'bg-lime-500'} font-medium`}>
            {verified ? 'Verified' : 'Pending'}
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
            setIsDeleting={setIsDeleting}
            page={page}
            setSearchParams={setSearchParams}
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
      key: 'firstName',
      title: 'Name',
      dataIndex: 'firstName',
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
      key: 'country',
      title: 'Country',
      dataIndex: 'country',
      ellipsis: true
    },
    {
      key: 'telNumber',
      title: 'Phone',
      dataIndex: 'telNumber'
    },
    {
      key: 'mentor_type',
      title: 'Mentor',
      dataIndex: 'mentor_type'
    },
    {
      key: 'action',
      title: 'Actions',
      render: (record) => {
        return (
          <TableActionsMenu
            record={record}
            setIsDeleting={setIsDeleting}
            page={page}
            setSearchParams={setSearchParams}
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
      ellipsis: true,
      dataIndex: 'email'
    },
    {
      key: 'date',
      title: 'Date',
      render: ({ date } = record) => {
        return <span className="">{modifiedDate.formatDate(date)}</span>;
      }
      // dataIndex: 'date'
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
            setIsDeleting={setIsDeleting}
            page={page}
            setSearchParams={setSearchParams}
          />
        );
      }
    }
  ];

  useEffect(() => {
    switch (page) {
      case 'admins':
        setTableColumn(adminsColumnData);
        break;

      case 'mentors':
        setTableColumn(mentorsColumnData);
        break;

      case 'mentees':
        setTableColumn(menteesColumnData);
        break;

      case 'transactions':
        setTableColumn(transactionsColumnData);
        break;

      default:
        break;
    }
  }, [page]);

  const DeleteUser = () => {
    switch (page) {
      case 'admins':
        DeleteAdmin(userId);
        setTimeout(() => {
          fetchAdmins();
          setIsDeleting(false);
          setSearchParams((params) => {
            params.delete('userId');
            return params;
          });
        }, 2500);
        break;

      case 'mentors':
        DeleteMember('mentors', userId);
        setTimeout(() => {
          fetchMembers('mentors');
          setIsDeleting(false);
          setSearchParams((params) => {
            params.delete('userId');
            return params;
          });
        }, 2500);

        break;

      case 'mentees':
        DeleteMember('mentees', userId);
        setTimeout(() => {
          fetchMembers('mentees');
          setIsDeleting(false);
          setSearchParams((params) => {
            params.delete('userId');
            return params;
          });
        }, 2500);
        break;

      case 'transactions':
        console.log('Deleted');
        break;

      default:
        break;
    }
  };

  const deleteMessages = [
    {
      page: 'admins',
      title: 'Delete Admin ?',
      content:
        "Deleting an admin will automatically erase all records of the member. Confirm if you'd want to perform this action."
    },
    {
      page: 'mentors',
      title: 'Delete Member ?',
      content:
        "Deleting a mentor will automatically erase all records of the member. Confirm if you'd want to perform this action."
    },
    {
      page: 'mentees',
      title: 'Delete Member ?',
      content:
        "Deleting a mentee will automatically erase all records of the member. Confirm if you'd want to perform this action."
    },
    {
      page: 'transactions',
      title: 'Delete Transaction data ?',
      content:
        'Deleting a transaction will automatically erase all records related to the transaction.'
    }
  ];

  return (
    <>
      {isDeleting && (
        <DeleteModal
          setIsDeleting={setIsDeleting}
          message={deleteMessages.find((message) => message.page === page)}
          DeleteUser={DeleteUser}
          setSearchParams={setSearchParams}
          loading={isLoading}
        />
      )}
      <div className="w-full app scroller glossy h-screen ">
        <div className="w-full table">
          <Table
            dataSource={tableData}
            columns={tableColumn}
            pagination={{ pageSize: 10, total: tableData?.length, showSizeChanger: true }}
            rowKey={(record) => record.id}
            className="lg:w-full w-[100rem]"
          />
        </div>
      </div>
    </>
  );
};

export default TableGrid;
