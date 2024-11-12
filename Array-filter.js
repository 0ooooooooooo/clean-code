// Frontend filter list by pageNum and pageSize
// Bad
if (this.searchParams.name && this.searchParams.id) {
    this.showTableData = this.originTableData.filter((item) => {
        return (item.name === this.searchParams.name) && item.id.includes(this.searchParams.id);
    }).slice((pageNum - 1) * pageSize, pageNum * pageSize);
} else if (this.searchParams.name) {
    this.showTableData = this.originTableData.filter((item) => {
        return (item.name === this.searchParams.name);
    }).slice((pageNum - 1) * pageSize, pageNum * pageSize);
} else if (this.searchParams.id) {
    this.showTableData = this.originTableData.filter((item) => {
        return item.id.includes(this.searchParams.id);
    }).slice((pageNum - 1) * pageSize, pageNum * pageSize);
} else {
    this.showTableData = this.originTableData.slice((pageNum - 1) * pageSize, pageNum * pageSize);
}

// Good
const { name, id } = this.searchParams;
this.showTableData = this.originTableData.filter((item) => {
  const matchName = name ? item.name.includes(name) : true;
  const matchId = id ? item.id.includes(id) : true;
  return matchName && matchId;
}).slice((pageNum - 1) * pageSize, pageNum * pageSize);

// A array delete B array
// Bad
B.forEach((bitem) => {
  const index = A.findIndex((aItem => aItem.id === bItem.id));
  if (index > -1) {
    A.splice(index, 1);
  }
});

// Good
B = A.filter((aItem) => {
  return !B.some((bItem) => bItem.id === aItem.id);
});

// Delete item
// Bad
const index = this.tableData.findIndex((item) => [current].id === item.id);
if (index > -1) {
    this.tableData.splice(index, 1);
}

// Good
this.tableData = this.tableData.filter((item) => {
    return item.id !== [current].id;
});
