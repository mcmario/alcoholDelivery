app.controller('myCtrl', ['UserService', function (UserService) {
    var vm = this;
    vm.volume1=false;
    vm.volume2=false;
    vm.volume3=false;
    vm.volume4=false;
    vm.strength1=false;
    vm.strength2=false;
    vm.strength3=false;
    vm.strength4=false;
    vm.brand1=false;
    vm.brand2=false;
    vm.brand3=false;
    vm.brand4=false;
    vm.country1=false;
    vm.country2=false;
    vm.country3=false;
    vm.country4=false;
    vm.country5=false;
    vm.country6=false;
    vm.show_registration=false;
    vm.show_sign_in=false;
    vm.year=[];
    vm.selectdays='';
    vm.selectmonth='';
    vm.selectyear='';
    vm.month=[];
    vm.days=[];
    vm.NewUser=[];
    vm.ConfirmOrder=[];
    vm.Orders=[];
    vm.detorder=[];
    vm.CountGood='В корзині немає товарів';
    vm.items=[];
    vm.page_count=0;
    vm.search='';


    vm.openNav=function () {
        document.getElementById("mySidenav").style.width = "350px";
    }
    vm.closeNav=function () {
        document.getElementById("mySidenav").style.width = "0";
    }


    vm.localStore = function () {
        if(!JSON.parse(localStorage.getItem('cOrder'))){
            vm.Orders=[];
        }
        else {
            vm.Orders = JSON.parse(localStorage.getItem('cOrder'))
        }
        if(!JSON.parse(localStorage.getItem('cOrderDetails'))){
            vm.detorder=[];
        }
        else {
            vm.detorder = JSON.parse(localStorage.getItem('cOrderDetails'))
        }
    };

    vm.signup_new_user=function (new_user) {
        vm.NewUser.name=new_user.name;
        vm.NewUser.lastname=new_user.lastname;
        vm.NewUser.day=new_user.selectdays;
        vm.NewUser.month=new_user.selectmonth;
        vm.NewUser.year=new_user.selectyear;
        vm.NewUser.email=new_user.email;
        vm.NewUser.password=new_user.password;

        vm.show_registration=false;
    };

    //get goods
    vm.getGoods = function () {
        vm.goods = UserService.getGoods();
    };
    vm.getUsers = function () {
        vm.user = UserService.getUsers();
    };
    vm.getYears=function () {
        for(var i=1920; i<2017; i++){
            vm.year.push(i);
        }
    vm.log_function=function (CurentUser) {
        console.log(CurentUser);
        for(var i=0;i<vm.user.length;i++){
            if (CurentUser.email==vm.user[i].email&&
            CurentUser.password==vm.user[i].password){
            console.log('welcome');
            localStorage.setItem('cUser', JSON.stringify(vm.user[i]));
            vm.show_sign_in=false;
            }
    }
    }


    }
    vm.getDays=function () {
        for(var i=1; i<32; i++){
            vm.days.push(i);
        }
    }
    vm.getMonth=function () {
        for(var i=1; i<13; i++){
            vm.month.push(i);
        }
    }

    vm.search1=function (el) {
        if(vm.search!='')
            return true
    }

    vm.myfilter=function(el){
        if
        ((vm.volume1==false&& vm.volume2==false &&
            vm.volume3==false && vm.volume4==false &&
            vm.strength1==false && vm.strength2==false &&
            vm.strength3==false && vm.strength4==false &&
            vm.brand1==false && vm.brand2==false &&
            vm.brand3==false && vm.brand4==false &&
            vm.country1==false && vm.country2==false &&
            vm.country3==false && vm.country4==false &&
            vm.country5==false && vm.country6==false)||
            (el.volume=='750'&& vm.volume4==true)||
            (el.volume=='500'&& vm.volume3==true)||
            (el.volume=='330'&& vm.volume2==true)||
            (el.volume=='250'&& vm.volume1==true)||
            (el.strength=='0'&& vm.strength1==true)||
            (el.strength=='0,5'&& vm.strength2==true)||
            (el.strength=='2'&& vm.strength3==true)||
            (el.strength=='3'&& vm.strength4==true)||
            (el.brand=='Hoegaarden'&& vm.brand1==true)||
            (el.brand=='Krombacher'&& vm.brand2==true)||
            (el.brand=='Leffe'&& vm.brand3==true)||
            (el.brand=='Lowenbrau'&& vm.brand4==true)||
            (el.country=='Бельгія' && vm.country1==true)||
            (el.country=='Великобританія' && vm.country2==true)||
            (el.country=='Ірландія' && vm.country3==true)||
            (el.country=='Мексика' && vm.country4==true)||
            (el.country=='Німеччина' && vm.country5==true)||
            (el.country=='Чехія' && vm.country6==true)
        ){
            return true
        }else

            return false
    }
    vm.orderByMe = function(x) {
        vm.myOrderBy = x;
    }
    vm.sign_in = function () {
        vm.show_sign_in=!vm.show_sign_in;
        vm.show_registration=false;
    }
    vm.sign_up = function () {
        vm.show_registration=!vm.show_registration;
        vm.show_sign_in=false;
    }

    vm.Confirm = function (deteils) {
        vm.ConfirmOrder.name=deteils.name;
        vm.ConfirmOrder.lastname=deteils.lastname;
        vm.ConfirmOrder.phone=deteils.phone;
        vm.ConfirmOrder.mail=deteils.mail;
        vm.ConfirmOrder.street=deteils.street;
        vm.ConfirmOrder.house=deteils.house;
        vm.ConfirmOrder.flat=deteils.flat;
        vm.ConfirmOrder.entrance=deteils.entrance;
        vm.ConfirmOrder.floor=deteils.floor;
        vm.ConfirmOrder.comments=deteils.comments;
        vm.ConfirmOrder.orders=vm.check=JSON.parse(localStorage.getItem('cOrder'));
        vm.ConfirmOrder.TotalSum=vm.TotalPrice;
       // console.log(vm.ConfirmOrder);

    }
    vm.detail_of_goods = function (gooddet) {
        localStorage.setItem('cOrderDetails', JSON.stringify(gooddet));
        // vm.detorder=JSON.parse(localStorage.getItem('cOrderDetails'));

        vm.detorder=gooddet;
        vm.detorder.count=1;
        console.log(vm.detorder);
        localStorage.setItem('cOrderDetails', JSON.stringify(vm.detorder));

    }
    vm.ByGoods2 = function () {
       vm.detorder=JSON.parse(localStorage.getItem('cOrderDetails'));
       vm.check=JSON.parse(localStorage.getItem('cOrder'));
        vm.check.push(vm.detorder)
        localStorage.setItem('cOrder', JSON.stringify(vm.check));
    }

    vm.ByGoods = function (neworder) {
        var new_orders={};
        new_orders.name=neworder.name;
        new_orders.image=neworder.image;
        new_orders.volume=neworder.volume;
        new_orders.price=neworder.price;
        new_orders.goodsid=neworder.id;
        new_orders.count=1;

        var k=0;
        for(var i=0; i<vm.Orders.length;i++){
            if(vm.Orders[i].goodsid==neworder.id){
                vm.Orders[i].count++;
                k++;
            }
        }
        if(k==0){
            vm.Orders.push(new_orders)
        }
        localStorage.setItem('cOrder', JSON.stringify(vm.Orders));
        vm.CountGood='В корзині '+vm.Orders.length+' товарів'

    }
        vm.basket=function () {
            vm.TotalPrice=0;
           if(!JSON.parse(localStorage.getItem('cOrder'))){
                vm.check=[];
            }else
                vm.check=JSON.parse(localStorage.getItem('cOrder'));

           for(var i=0;i<vm.check.length;i++){
                vm.TotalPrice+=vm.check[i].count*vm.check[i].price;
            }
            vm.CountGood='В корзині '+vm.check.length+' товарів';


        }

        vm.plus1 = function (count) {
        vm.TotalPrice=0;
        vm.check=JSON.parse(localStorage.getItem('cOrder'));
        for(var i=0;i<vm.check.length;i++){
            if (vm.check[i].goodsid==count.goodsid){
                vm.check[i].count++;
                count.count++;
            }
            vm.TotalPrice+=vm.check[i].count*vm.check[i].price;
        }
        localStorage.setItem('cOrder', JSON.stringify(vm.check))
        }

    vm.plus2 = function (count) {
        vm.check=JSON.parse(localStorage.getItem('cOrderDetails'));
         vm.check.count++;
         count.count++;
     localStorage.setItem('cOrderDetails', JSON.stringify(vm.check))
    }
    vm.minus2 = function (count) {
        vm.check=JSON.parse(localStorage.getItem('cOrderDetails'));
        if(count.count>1) {
            vm.check.count--;
            count.count--;
        }
        localStorage.setItem('cOrderDetails', JSON.stringify(vm.check))
    }

    vm.minus1 = function (count) {
        vm.check=JSON.parse(localStorage.getItem('cOrder'));
        if(count.count>=2){
            vm.TotalPrice=0;
            for(var i=0;i<vm.check.length;i++){
                if (vm.check[i].goodsid==count.goodsid){
                    vm.check[i].count--;
                    count.count--;
                }
                vm.TotalPrice+=vm.check[i].count*vm.check[i].price;
            }
        }
        localStorage.setItem('cOrder', JSON.stringify(vm.check))
    }

    vm.delete_order = function (orderDel) {
        vm.check=JSON.parse(localStorage.getItem('cOrder'));
        vm.TotalPrice=0;
        for(var i=0;i<vm.check.length;i++){
            if(vm.check[i].goodsid==orderDel.goodsid){
                vm.check.splice(i,1);
            }
        }
        localStorage.setItem('cOrder', JSON.stringify(vm.check));
        for(var i=0;i<vm.check.length;i++){
            vm.TotalPrice+=vm.check[i].count*vm.check[i].price;
        }
        vm.CountGood='В корзині '+vm.check.length+' товарів'
  };
    vm.paginations =function () {
        vm.currentPage = 0;
        vm.itemsPerPage = 12;
        vm.items = vm.page_count;
        console.log(vm.page_count);

    };

    vm.firstPage = function() {
        return vm.currentPage == 0;
    }
    vm.lastPage = function() {
        var lastPageNum = Math.ceil(vm.page_count / vm.itemsPerPage - 1);
        return vm.currentPage == lastPageNum;
    }
    vm.numberOfPages = function(){
         return Math.ceil(vm.page_count / vm.itemsPerPage);
    }
    vm.startingItem = function() {
        return vm.currentPage * vm.itemsPerPage;
    }
    vm.pageBack = function() {
        vm.currentPage = vm.currentPage - 1;
    }
    vm.pageForward = function() {
       vm.currentPage = vm.currentPage + 1;
    }


    vm.init = function () {
        vm.getGoods();
        vm.orderByMe();
        vm.getYears();
        vm.getDays();
        vm.getMonth();
        vm.getUsers();
        vm.localStore();
        vm.basket();
        vm.paginations();
        vm.firstPage();
        vm.lastPage();
        vm.numberOfPages();
        vm.startingItem();
        vm.pageBack();
        vm.pageForward();



    };
    vm.init();
}]);
