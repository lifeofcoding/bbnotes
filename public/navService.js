angular.module("ang-bbnotes").factory('navService', ['$state', function($state){
    var self = this;
    this.page = {
        title: '',
        name: '',
        isHome: false,
        isAdd: false,
        isNotes: false
    }
    this.setPage = function(page){
        self.page.title = page.pageTitle;
        self.page.name = page.name;
        if(page.name === 'home'){
            self.page.isHome = true;
            self.page.isAdd = false;
            self.page.isNotes = false;
        }else if(page.name === 'add'){
            self.page.isAdd = true;
            self.page.isNotes = false;
            self.page.isHome = false;
        }else if(page.name === 'notes'){
            self.page.isNotes = true;
            self.page.isAdd = false;
            self.page.isHome = false;
        }
    }
    return this;
}]);