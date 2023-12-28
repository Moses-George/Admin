import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Table } from 'antd';
import TableActionsMenu from './ui/TableActionsMenu';
import { AccountCircle } from '@mui/icons-material';
import DeleteModal from './ui/modal/DeleteModal';
import { modifiedDate } from '../utils/timeAndDate';
import { useDeleteUserMutation } from '../store/api/userApi';
import { useDeleteMemberMutation } from '../store/api/memberApi';
import { subscriptionStatus } from '../utils/helpers';

const TableGrid = ({ page, tableData, refetch }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [tableColumn, setTableColumn] = useState([]);
  const [rowData, setRowData] = useState(tableData);
  const [searchParams, setSearchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  const [
    deleteUser,
    { isLoading: loading_u, isError: isError_u, error: error_u, isSuccess: success_u, data: data_u }
  ] = useDeleteUserMutation();
  const [
    deleteMember,
    { isLoading: loading_m, isError: isError_m, error: error_m, isSuccess: success_m, data: data_m }
  ] = useDeleteMemberMutation();
  const loading = loading_u || loading_m;
  const success = success_u || success_m;

  const adminsColumnData = [
    {
      key: 'avatar',
      title: 'Avatar',
      // ellipsis: true,
      render: ({ imageUrl } = record) => {
        return imageUrl ? (
          <img src={imageUrl} alt="" className="w-[3.5rem] h-[3.5rem] rounded-full" />
        ) : (
          <AccountCircle className="text-slate-800" sx={{ fontSize: '60px' }} />
        );
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
      ellipsis: true,
      render: ({ firstName } = record) => {
        return <span className="">{!firstName ? 'Null' : firstName}</span>;
      },
      sorter: (a, b) => a.name > b.name,
      sortDirections: ['descend']
    },
    {
      key: 'lastName',
      title: 'Last Name',
      dataIndex: 'lastName',
      ellipsis: true
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
            refetch={refetch}
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
      render: ({ image } = record) => {
        return image ? (
          <img src={image} alt="" className="w-[3.5rem] h-[3.5rem] rounded-full" />
        ) : (
          <AccountCircle className="text-slate-800" sx={{ fontSize: '60px' }} />
        );
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
      render: ({ country } = record) => {
        return <span className="">{!country ? 'Null' : country}</span>;
      },
      ellipsis: true
    },
    {
      key: 'telNumber',
      title: 'Phone',
      render: ({ telNumber } = record) => {
        return <span className="">{!telNumber ? 'Null' : telNumber}</span>;
      },
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
      render: ({ price } = record) => {
        return <span className="">{!price ? 'Null' : price}</span>;
      },
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
            refetch={refetch}
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
      render: ({ image } = record) => {
        return image ? (
          <img src={image} alt="" className="w-[3.5rem] h-[3.5rem] rounded-full" />
        ) : (
          <AccountCircle className="text-slate-800" sx={{ fontSize: '60px' }} />
        );
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
      ellipsis: true,
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
      render: ({ country } = record) => {
        return <span className="">{!country ? 'Null' : country}</span>;
      },
      ellipsis: true
    },
    {
      key: 'telNumber',
      title: 'Phone',
      render: ({ telNumber } = record) => {
        return <span className="">{!telNumber ? 'Null' : telNumber}</span>;
      },
      ellipsis: true
    },
    {
      key: 'mentor_type',
      title: 'Mentor',
      render: ({ mentor_type } = record) => {
        return <span className="">{!mentor_type ? 'Null' : mentor_type}</span>;
      },
      ellipsis: true
    },
    {
      key: 'subscription',
      title: 'Subscription',
      sortDirections: ['descend'],
      render: ({ subscribed_at } = record) => {
        const status = subscriptionStatus(subscribed_at);
        return (
          <span
            className={`text-white pb-1.5 pt-1 w-28 text-center px-2.5
            } rounded-3xl ${status === "Unsubscribed" ? 'bg-yellow-500' : status === "Subscribed" ? "bg-lime-500" : 'bg-red-500'} font-medium`}>
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
            setIsDeleting={setIsDeleting}
            page={page}
            setSearchParams={setSearchParams}
          />
        );
      }
    }
  ];

  const paymentsColumnData = [
    {
      key: 'payment_Id',
      title: 'UUID',
      ellipsis: true,
      dataIndex: 'payment_Id'
    },
    {
      key: 'mentee_name',
      title: 'Mentee',
      dataIndex: 'mentee_name',
      sorter: (a, b) => a.name > b.name,
      sortDirections: ['descend'],
      ellipsis: true
    },
    {
      key: 'mentor_name',
      title: 'Mentor',
      dataIndex: 'mentor_name',
      sorter: (a, b) => a.name > b.name,
      sortDirections: ['descend'],
      ellipsis: true
    },
    {
      key: 'date',
      title: 'Date',
      render: ({ subscribed_at } = record) => {
        return <span className="">{modifiedDate.formatDate(subscribed_at)}</span>;
      },
      ellipsis: true
    },
    {
      key: 'amount',
      title: 'Amount($)',
      dataIndex: 'amount'
    },
    {
      key: 'status',
      title: 'Status',
      sorter: (a, b) => a.status > b.status,
      sortDirections: ['descend'],
      render: ({ payment_status } = record) => {
        return (
          <span
            className={`text-white pb-1.5 pt-1 text-center ${
              payment_status === 'failed' ? 'px-5' : 'px-2.5'
            } rounded-3xl ${
              payment_status === 'pending'
                ? 'bg-yellow-500'
                : payment_status === 'failed'
                ? 'bg-red-500'
                : 'bg-lime-500'
            } font-medium`}>
            {payment_status}
          </span>
        );
      }
    },
  ];

  useEffect(() => {
    setRowData(tableData);
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

      case 'payments':
        setTableColumn(paymentsColumnData);
        break;

      default:
        break;
    }
  }, [page, tableData]);

  useEffect(() => {
    if (success) {
      setIsDeleting(false);
      setSearchParams((params) => {
        params.delete('userId');
        return params;
      });
    }
  }, [success]);

  const DeleteUser = () => {
    switch (page) {
      case 'admins':
        deleteUser(userId);
        setRowData((tableData) => tableData.filter((row) => row.id != userId));
        break;

      case 'mentors':
        deleteMember({ member: 'mentors', Id: userId });
        setRowData((tableData) => tableData.filter((row) => row.id != userId));
        break;

      case 'mentees':
        deleteMember({ member: 'mentees', Id: userId });
        setRowData((tableData) => tableData.filter((row) => row.id != userId));
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
      page: 'payments',
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
          loading={loading}
        />
      )}
      <div className="w-full app scroller glossy ">
        <div className="w-full table">
          <Table
            dataSource={rowData}
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
