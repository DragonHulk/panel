var eip = {};

eip.initChildren = function  () {};

eip.initView = function  () {
    this.view = util.loadFile('views/eip.html');
};

eip.prepopulate = function  () {};

eip.onEntitySelected = function  (entity) {
    var entityPanel = (entity === 'employee') ? employeePanel : companyPanel;
    entityPanel.setup();
};

eip.listenEvents = function  () {
    em.listen('entitySelected', eip.onEntitySelected);
};

eip.applyDefaults = function  () {};
