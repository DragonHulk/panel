var employeePanel = {};

employeePanel.initChildren = function  () {
    employeeList.initChildren();
    employeeDetails.initChildren();
};

employeePanel.initView = function  () {
    employeeList.initView();
    employeeDetails.initView();

    this.view = util.loadFile('views/employeePanel.html');

    document.getElementById('infoContainer').innerHTML = this.view;
    document.getElementById('employeeListContainer').innerHTML = employeeList.view;
    document.getElementById('employeeDetailsContainer').innerHTML = employeeDetails.view;

};

employeePanel.prepopulate = function  () {
    employeeList.prepopulate();
    employeeDetails.prepopulate();
};

employeePanel.listenEvents = function  () {
    employeeList.listenEvents();
    employeeDetails.listenEvents();
};

employeePanel.applyDefaults = function  () {
    employeeList.applyDefaults();
    employeeDetails.applyDefaults();
};

employeePanel.setup = function  () {
    this.initChildren();
    this.initView();
    this.prepopulate();
    this.listenEvents();
    this.applyDefaults();
};
