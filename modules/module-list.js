(function(){
    //-------------------------------------------------------------------------------------
    var p=""; //put a unique prefix to avoid conflict with others 
    var H=$vm.hosting_path+"/modules";
    var m=$vm.module_list;
    var api="wimr";
    //-------------------------------------------------------------------------------------
    m[p+"cms-and-research-database"]     ={url:H+"/business/cms-and-research-database/page.html",prefix:p,router:1};
    m[p+"sleepwareg3-adult-database"]={url:H+"/business/sleepwareg3-adult-database/page.html",prefix:p,router:1};
    m[p+"sleepwareg3-pediatrics-database"]={url:H+"/business/sleepwareg3-pediatrics-database/page.html",prefix:p,router:1};
    m[p+"mongodb"]={url:H+"/business/mongodb/page.html",prefix:p,router:1};
})();
