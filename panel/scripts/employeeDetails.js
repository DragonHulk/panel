var employeeDetails = {};

employeeDetails.initChildren = function  () {};

employeeDetails.initView = function  () {
    this.view = util.loadFile('views/employeeDetails.html');
};

employeeDetails.prepopulate = function  () {};

employeeDetails.onRecordSelected = function  (employee) {
    document.getElementById('employeeId').value = employee.id;
    document.getElementById('employeeName').value = employee.name;
};

employeeDetails.listenEvents = function  () {
    em.listen('recordSelected', employeeDetails.onRecordSelected);
};

employeeDetails.applyDefaults = function  () {};
