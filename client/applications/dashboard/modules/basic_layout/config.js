export default {
  tabs: [{
    name: ['basic_layout'],
    key: 'basic_layout',
    default: true
  }],
  btns: [{
    value: ['create'],
    key: 'create',
    type: 'create',
    icon: 'plus-circle-o',
    disabled: false
  }, {
    value: ['refresh'],
    key: 'refresh',
    type: 'primary',
    icon: 'reload',
    disabled: false
  }],
  table: {
    rowKey: 'id',
    dataKey: 'id',
    loading: false,
    columns: [{
      title: ['name'],
      key: 'name',
      dataIndex: 'name'
    }, {
      title: ['email'],
      key: 'email',
      dataIndex: 'email'
    }, {
      title: ['sex'],
      key: 'sex',
      dataIndex: 'sex'
    }, {
      title: ['id'],
      key: 'id',
      dataIndex: 'id'
    }],
    data: []
  }
};
