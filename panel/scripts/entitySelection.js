var esp = {};

esp.initChildren = function  () {};

esp.initView = function  () {
    this.view = util.loadFile('views/esp.html');
};

esp.prepopulate = function  () {};

esp.onEntitySelected = function  (entity) {
    em.fire('entitySelected', entity);
};

esp.listenEvents = function  () {
    document.getElementById('employee').addEventListener('click', function  () {
        esp.onEntitySelected('employee');
    });
};

esp.applyDefaults = function  () {
    this.onEntitySelected('employee');
};
