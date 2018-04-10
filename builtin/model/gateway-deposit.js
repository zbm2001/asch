module.exports = {
  table: 'gateway_deposits',
  tableFields: [
    { name: 'tid', type: 'String', length: 64, primary_key: true },
    { name: 'currency', type: 'String', length: 10, index: true },
    { name: 'amount', type: 'String', length: 50 },
    { name: 'address', type: 'String', length: 50, index: true },
    { name: 'confirmations', type: 'Number' },
    { name: 'processed', type: 'Number' },
    { name: 'oid', type: 'String', length: 64 , index: true }
  ]
}