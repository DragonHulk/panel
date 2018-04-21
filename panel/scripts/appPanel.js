var app = {};

// function loadJs(url) {
//     var jsString = util.loadFile(url);
//     this.eval(jsString);
// }

app.initChildren = function  () {
    // loadJs('scripts/entitySelection.js');
    // loadJs('scripts/entityInfo.js');

    esp.initChildren();
    eip.initChildren();
};

app.initView = function  () {
    esp.initView();
    eip.initView();

    this.view = util.loadFile('views/appPanel.html');
    
    document.getElementById('appContainer').innerHTML = this.view;
    document.getElementById('espContainer').innerHTML = esp.view;
    document.getElementById('eipContainer').innerHTML = eip.view;

};

app.prepopulate = function  () {
    esp.prepopulate();
    eip.prepopulate();
};

app.listenEvents = function  () {
    esp.listenEvents();
    eip.listenEvents();
};

app.applyDefaults = function  () {
    esp.applyDefaults();
    eip.applyDefaults();
};

app.setup = function  () {
    this.initChildren();
    this.initView();
    this.prepopulate();
    this.listenEvents();
    this.applyDefaults();
};
