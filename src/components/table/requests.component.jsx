import React from 'react';

import { Table, Button } from 'antd';

const columns = [
  {
    title: 'Usuario',
    dataIndex: 'name'
  },
  {
    title: 'Docente',
    dataIndex: 'age'
  },
  {
    title: 'Fecha',
    dataIndex: 'address'
  }
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `nombre.usuario`,
    age: `Nombre Apellido Apellido`,
    address: `11/12/19`
  });
}

class RequestsTable extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false
  };

  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type='primary'
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Borrar
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected
              ? `${selectedRowKeys.length} elementos seleccionados`
              : ''}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    );
  }
}

export default RequestsTable;
