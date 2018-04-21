var employeeList = {};
var employees = [];

employeeList.initChildren = function  () {};

employeeList.initView = function  () {
    this.view = util.loadFile('views/employeeList.html');
};

employeeList.prepopulate = function  () {};

employeeList.onRecordSelected = function  (employee) {
    this.currentRecord = employee;
    em.fire('recordSelected', employee);
};

employeeList.listenEvents = function  () {
    document.querySelector('#employeesList tbody').addEventListener('click', function  (e) {
        var rowIndex = e.target.parentElement.rowIndex;
        employeeList.onRecordSelected(employees[rowIndex - 1]);
    });
};

employeeList.prepareRow = function  (employee) {
    return util.loadFile('views/employeeRow.html')
                          .replace('id', employee.id)
                          .replace('name', employee.name);
};

employeeList.applyDefaults = function  () {
    employees = util.readAll('data/employees.json');
    var employeeTable = document.querySelector('#employeesList tbody');
    employees.forEach(function  (employee) {
        employeeTable.insertAdjacentHTML('beforeend', employeeList.prepareRow(employee));
    });

    this.onRecordSelected(employees[0]);
};
