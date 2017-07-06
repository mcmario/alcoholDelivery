var app=angular.module("myapp", ['ngRoute' , 'ngAnimate','uiSlider']);

app.controller('myCtrl', ['UserService', function (UserService) {
    var vm = this;
    // vm.volume1 = false;
    // vm.volume2 = false;
    // vm.volume3 = false;
    // vm.volume4 = false;
    // vm.strength1 = false;
    // vm.strength2 = false;
    // vm.strength3 = false;
    // vm.strength4 = false;
    // vm.brand1 = false;
    // vm.brand2 = false;
    // vm.brand3 = false;
    // vm.brand4 = false;
    // vm.country1 = false;
    // vm.country2 = false;
    // vm.country3 = false;
    // vm.country4 = false;
    // vm.country5 = false;
    // vm.country6 = false;
    vm.show_registration = false;
    vm.show_sign_in = false;

    vm.year = [];
    vm.selectdays = '';
    vm.selectmonth = '';
    vm.selectyear = '';
    vm.month = [];
    vm.days = [];
    vm.NewUser = [];
    vm.ConfirmOrder = [];
    vm.Orders = [];
    vm.detorder = [];
    vm.CountGood = 'В корзині немає товарів';
    vm.items = [];
    vm.page_count = 0;
    vm.search = '';
    vm.show_basket = false;
    vm.show_map = false;
    vm.show_hide = function () {
       document.getElementById("myHide").style.height = "0";
        document.getElementById("show").style.display='block';
        document.getElementById("hide").style.display='none';
     }
    vm.close_show_hide = function () {
        document.getElementById("myHide").style.height = "auto";
        document.getElementById("show").style.display='none';
        document.getElementById("hide").style.display='block';
    }
    vm.show = function () {
        document.getElementById("myHide2").style.height = "auto";
        document.getElementById("hide2").style.display='block';
        document.getElementById("show2").style.display='none';
    }
    vm.hide = function () {
        document.getElementById("myHide2").style.height = "0";
        document.getElementById("hide2").style.display='none';
        document.getElementById("show2").style.display='block';
    }
    vm.show2 = function () {
        document.getElementById("myHide3").style.height = "auto";
        document.getElementById("hide3").style.display='block';
        document.getElementById("show3").style.display='none';
    }
    vm.hide2 = function () {
        document.getElementById("myHide3").style.height = "0";
        document.getElementById("hide3").style.display='none';
        document.getElementById("show3").style.display='block';
    }
    vm.show3 = function () {
        document.getElementById("myHide4").style.height = "auto";
        document.getElementById("hide4").style.display='block';
        document.getElementById("show4").style.display='none';
    }
    vm.hide3 = function () {
        document.getElementById("myHide4").style.height = "0";
        document.getElementById("hide4").style.display='none';
        document.getElementById("show4").style.display='block';
    }
    vm.show4 = function () {
        document.getElementById("myHide5").style.height = "auto";
        document.getElementById("hide5").style.display='block';
        document.getElementById("show5").style.display='none';
    }
    vm.hide4 = function () {
        document.getElementById("myHide5").style.height = "0";
        document.getElementById("hide5").style.display='none';
        document.getElementById("show5").style.display='block';
    }
    vm.show5 = function () {
        document.getElementById("myHide6").style.height = "auto";
        document.getElementById("hide6").style.display='block';
        document.getElementById("show6").style.display='none';
    }
    vm.hide5 = function () {
        document.getElementById("myHide6").style.height = "0";
        document.getElementById("hide6").style.display='none';
        document.getElementById("show6").style.display='block';
    }
    vm.openNav = function () {
        document.getElementById("mySidenav").style.width = "350px";
    }
    vm.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
    }


    vm.localStore = function () {
        if (!JSON.parse(localStorage.getItem('cOrder'))) {
            vm.Orders = [];
        }
        else {
            vm.Orders = JSON.parse(localStorage.getItem('cOrder'))
        }
        if (!JSON.parse(localStorage.getItem('cOrderDetails'))) {
            vm.detorder = [];
        }
        else {
            vm.detorder = JSON.parse(localStorage.getItem('cOrderDetails'))
        }
    };


    vm.signup_new_user = function (new_user) {
        vm.NewUser = new_user;
        vm.NewUser.day = new_user.selectdays;
        vm.NewUser.month = new_user.selectmonth;
        vm.NewUser.year = new_user.selectyear;
        vm.NewUser.email = new_user.email;
        vm.NewUser.password = new_user.password;

        vm.show_registration = false;
    };

    //get goods
    // vm.getGoods = function () {
    //     vm.goods = UserService.getGoods();
    // };
    vm.getUsers = function () {
        vm.user = UserService.getUsers();
    };
    vm.getYears = function () {
        for (var i = 1920; i < 2017; i++) {
            vm.year.push(i);
        }
        vm.log_function = function (CurentUser) {
            console.log(CurentUser);
            for (var i = 0; i < vm.user.length; i++) {
                if (CurentUser.email == vm.user[i].email &&
                    CurentUser.password == vm.user[i].password) {
                    console.log('welcome');
                    localStorage.setItem('cUser', JSON.stringify(vm.user[i]));
                    vm.show_sign_in = false;
                }
            }
        }


    }
    vm.getDays = function () {
        for (var i = 1; i < 32; i++) {
            vm.days.push(i);
        }
    }
    vm.getMonth = function () {
        for (var i = 1; i < 13; i++) {
            vm.month.push(i);
        }
    }

    vm.search1 = function (el) {
        if (vm.search != '')
            return true
    }


    // vm.myfilter=function(el){
    //     if
    //     ((vm.volume1==false&& vm.volume2==false &&
    //         vm.volume3==false && vm.volume4==false &&
    //         vm.strength1==false && vm.strength2==false &&
    //         vm.strength3==false && vm.strength4==false &&
    //         vm.brand1==false && vm.brand2==false &&
    //         vm.brand3==false && vm.brand4==false &&
    //         vm.country1==false && vm.country2==false &&
    //         vm.country3==false && vm.country4==false &&
    //         vm.country5==false && vm.country6==false)||
    //         (el.volume=='750'&& vm.volume4==true)||
    //         (el.volume=='500'&& vm.volume3==true)||
    //         (el.volume=='330'&& vm.volume2==true)||
    //         (el.volume=='250'&& vm.volume1==true)||
    //         (el.strength=='0'&& vm.strength1==true)||
    //         (el.strength=='0,5'&& vm.strength2==true)||
    //         (el.strength=='2'&& vm.strength3==true)||
    //         (el.strength=='3'&& vm.strength4==true)||
    //         (el.brand=='Hoegaarden'&& vm.brand1==true)||
    //         (el.brand=='Krombacher'&& vm.brand2==true)||
    //         (el.brand=='Leffe'&& vm.brand3==true)||
    //         (el.brand=='Lowenbrau'&& vm.brand4==true)||
    //         (el.country=='Бельгія' && vm.country1==true)||
    //         (el.country=='Великобританія' && vm.country2==true)||
    //         (el.country=='Ірландія' && vm.country3==true)||
    //         (el.country=='Мексика' && vm.country4==true)||
    //         (el.country=='Німеччина' && vm.country5==true)||
    //         (el.country=='Чехія' && vm.country6==true)
    //     ){
    //         return true
    //     }else
    //
    //         return false
    // }

    vm.open_basket = function () {
        vm.show_basket = !vm.show_basket;
    }
    vm.open_map = function () {
        vm.show_map = !vm.show_map;
    }
// FILTERS AND SORTERS
    vm.getBeer = function () {
        vm.goods = []
        console.log('getbeer');

        vm.goods = UserService.getBeer();
        console.log(vm.goods);
        vm.FiltersPrepare()
    }
    vm.getWine = function () {
        vm.goods = []
        console.log('get wine');
        vm.goods = UserService.getWine();
        console.log(vm.goods)
        vm.FiltersPrepare()
    }

    vm.FiltersPrepare = function () {
        vm.price = [];
        vm.volume = [];
        vm.strength = [];
        vm.brand = [];
        vm.state = [];
        vm.category = []
        vm.onlyUnique = function (value, index, self) {
            return self.indexOf(value) === index;
        }
        for (i in vm.goods) {
            vm.category.push(vm.goods[i].category)
            vm.category = vm.category.filter(vm.onlyUnique)
            vm.price.push(parseInt(vm.goods[i].price))
            vm.price = vm.price.filter(vm.onlyUnique).sort()
            vm.brand.push(vm.goods[i].brand)
            vm.brand = vm.brand.filter(vm.onlyUnique)
            vm.state.push(vm.goods[i].country)
            vm.state = vm.state.filter(vm.onlyUnique)
            vm.strength.push(vm.goods[i].strength)
            vm.strength = vm.strength.filter(vm.onlyUnique)
            vm.volume.push(parseInt(vm.goods[i].volume))
            vm.volume = vm.volume.filter(vm.onlyUnique)
        }
        vm.lower_price_bound = vm.price[0];
        vm.upper_price_bound = vm.price[vm.price.length - 1];
        vm.lp = vm.price[0]
        vm.hp = vm.price[vm.price.length - 1]


    }

    // filtering by PRICE
    vm.priceRange = function (goods) {
        return (parseInt(goods['price']) >= vm.lower_price_bound && parseInt(goods['price']) <= vm.upper_price_bound);
    };
    vm.sortGoods = function (x) {
        vm.myOrderBy = x;
    }

    // filtering by VOLUME

    vm.volumeIncludes = []
    vm.includeVolume = function (volume) {
        var i = vm.volumeIncludes.indexOf(volume)
        if (i > -1) {
            vm.volumeIncludes.splice(i, 1);
        } else {
            vm.volumeIncludes.push(volume);
        }
    };
    vm.volumeFilter = function (volume) {
        if (vm.volumeIncludes.length > 0) {
            if (vm.volumeIncludes.indexOf(volume.volume) < 0)
                return;
        }
        return volume;
    };

// filtering by BRAND

    vm.brandIncludes = []
    vm.includeBrand = function (brand) {
        var i = vm.brandIncludes.indexOf(brand)
        if (i > -1) {
            vm.brandIncludes.splice(i, 1);
        } else {
            vm.brandIncludes.push(brand);
        }
    };
    vm.brandFilter = function (brand) {
        if (vm.brandIncludes.length > 0) {
            if (vm.brandIncludes.indexOf(brand.brand) < 0)
                return;
        }
        return brand;
    };

// filtering by COUNTRY

    vm.countryIncludes = []
    vm.includeCountry = function (country) {
        var i = vm.countryIncludes.indexOf(country)
        if (i > -1) {
            vm.countryIncludes.splice(i, 1);
        } else {
            vm.countryIncludes.push(country);
        }
    };
    vm.countryFilter = function (country) {
        if (vm.countryIncludes.length > 0) {
            if (vm.countryIncludes.indexOf(country.country) < 0)
                return;
        }
        return country;
    };

// filtering by STRENGTH

    vm.strengthIncludes = []
    vm.includeStrength = function (strength) {
        var i = vm.strengthIncludes.indexOf(strength)
        if (i > -1) {

            vm.strengthIncludes.splice(i, 1);
        } else {
            vm.strengthIncludes.push(strength);

        }
    };
    vm.strengthFilter = function (strength) {

        if (vm.strengthIncludes.length > 0) {
            if (vm.strengthIncludes.indexOf(strength.strength) < 0)
                return;
        }
        return strength;
    };


    vm.sign_in = function () {
        vm.show_sign_in = !vm.show_sign_in;
        vm.show_registration = false;
    }
    vm.sign_up = function () {
        vm.show_registration = !vm.show_registration;
        vm.show_sign_in = false;
    }

    vm.Confirm = function (deteils) {
        vm.ConfirmOrder = deteils;

        vm.ConfirmOrder.orders = vm.check = JSON.parse(localStorage.getItem('cOrder'));
        vm.ConfirmOrder.TotalSum = vm.TotalPrice;
        // console.log(vm.ConfirmOrder);

    }
    vm.detail_of_goods = function (gooddet) {
        localStorage.setItem('cOrderDetails', JSON.stringify(gooddet));
        // vm.detorder=JSON.parse(localStorage.getItem('cOrderDetails'));

        vm.detorder = gooddet;
        vm.detorder.count = 1;
        console.log(vm.detorder);
        localStorage.setItem('cOrderDetails', JSON.stringify(vm.detorder));

    }
    vm.ByGoods2 = function () {
        vm.detorder = JSON.parse(localStorage.getItem('cOrderDetails'));
        vm.check = JSON.parse(localStorage.getItem('cOrder'));
        vm.check.push(vm.detorder)
        localStorage.setItem('cOrder', JSON.stringify(vm.check));
    }

    vm.ByGoods = function (neworder) {
        var new_orders = {};
        new_orders.name = neworder.name;
        new_orders.image = neworder.image;
        new_orders.volume = neworder.volume;
        new_orders.price = neworder.price;
        new_orders.goodsid = neworder.id;
        new_orders.count = 1;

        var k = 0;
        for (var i = 0; i < vm.Orders.length; i++) {
            if (vm.Orders[i].goodsid == neworder.id) {
                vm.Orders[i].count++;
                k++;
            }
        }
        if (k == 0) {
            vm.Orders.push(new_orders)
        }
        localStorage.setItem('cOrder', JSON.stringify(vm.Orders));
        vm.CountGood = 'В корзині ' + vm.Orders.length + ' товарів'

    }
    vm.basket = function () {
        vm.TotalPrice = 0;
        if (!JSON.parse(localStorage.getItem('cOrder'))) {
            vm.check = [];
        } else
            vm.check = JSON.parse(localStorage.getItem('cOrder'));

        for (var i = 0; i < vm.check.length; i++) {
            vm.TotalPrice += vm.check[i].count * vm.check[i].price;
        }
        vm.CountGood = 'В корзині ' + vm.check.length + ' товарів';


    }

    vm.plus1 = function (count) {
        vm.TotalPrice = 0;
        vm.check = JSON.parse(localStorage.getItem('cOrder'));
        for (var i = 0; i < vm.check.length; i++) {
            if (vm.check[i].goodsid == count.goodsid) {
                vm.check[i].count++;
                count.count++;
            }
            vm.TotalPrice += vm.check[i].count * vm.check[i].price;
        }
        localStorage.setItem('cOrder', JSON.stringify(vm.check))
    }

    vm.plus2 = function (count) {
        vm.check = JSON.parse(localStorage.getItem('cOrderDetails'));
        vm.check.count++;
        count.count++;
        localStorage.setItem('cOrderDetails', JSON.stringify(vm.check))
    }
    vm.minus2 = function (count) {
        vm.check = JSON.parse(localStorage.getItem('cOrderDetails'));
        if (count.count > 1) {
            vm.check.count--;
            count.count--;
        }
        localStorage.setItem('cOrderDetails', JSON.stringify(vm.check))
    }

    vm.minus1 = function (count) {
        vm.check = JSON.parse(localStorage.getItem('cOrder'));
        if (count.count >= 2) {
            vm.TotalPrice = 0;
            for (var i = 0; i < vm.check.length; i++) {
                if (vm.check[i].goodsid == count.goodsid) {
                    vm.check[i].count--;
                    count.count--;
                }
                vm.TotalPrice += vm.check[i].count * vm.check[i].price;
            }
        }
        localStorage.setItem('cOrder', JSON.stringify(vm.check))
    }

    vm.delete_order = function (orderDel) {
        vm.check = JSON.parse(localStorage.getItem('cOrder'));
        vm.TotalPrice = 0;
        for (var i = 0; i < vm.check.length; i++) {
            if (vm.check[i].goodsid == orderDel.goodsid) {
                vm.check.splice(i, 1);
            }
        }
        localStorage.setItem('cOrder', JSON.stringify(vm.check));
        for (var i = 0; i < vm.check.length; i++) {
            vm.TotalPrice += vm.check[i].count * vm.check[i].price;
        }
        vm.CountGood = 'В корзині ' + vm.check.length + ' товарів'
    };
    vm.paginations = function () {
        vm.currentPage = 0;
        vm.itemsPerPage = 12;
        vm.items = vm.page_count;
        console.log(vm.page_count);

    };

    vm.firstPage = function () {
        return vm.currentPage == 0;
    }
    vm.lastPage = function () {
        var lastPageNum = Math.ceil(vm.page_count / vm.itemsPerPage - 1);
        return vm.currentPage == lastPageNum;
    }
    vm.numberOfPages = function () {
        return Math.ceil(vm.page_count / vm.itemsPerPage);
    }
    vm.startingItem = function () {
        return vm.currentPage * vm.itemsPerPage;
    }
    vm.pageBack = function () {
        vm.currentPage = vm.currentPage - 1;
    }
    vm.pageForward = function () {
        vm.currentPage = vm.currentPage + 1;
    }


    vm.init = function () {
        // vm.getGoods();
        vm.getBeer();
        // vm.orderByMe();
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
        vm.FiltersPrepare()


    };
    vm.init();
}]);

app.factory("UserService", function ($http) {
    return {
        goods: [
            {
                id: 1,
                category: 'beer',
                brand: 'Hoegaarden',
                name: "beer2",
                country: "Бельгія",
                strength: 3,
                volume: 750,
                price: "60",
                image: '../img/im-1.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 2,
                category: 'beer',
                brand: 'Krombacher',
                name: "beer1",
                country: "Великобританія",
                strength: 0,
                volume: 500,
                price: "50",
                image: '../img/im-2.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 3,
                category: 'beer',
                brand: 'Leffe',
                name: "beer3",
                country: "Ірландія",
                strength: 2.5,
                volume: 330,
                price: "40",
                image: '../img/im-3.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 4,
                category: 'beer',
                brand: 'Lowenbrau',
                name: "beer4",
                country: "Мексика",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 5,
                category: 'beer',
                brand: 'Hoegaarden',
                name: "beer5",
                country: "Німеччина",
                strength: 3,
                volume: 750,
                price: "60",
                image: '../img/im-1.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 6,
                category: 'beer',
                brand: 'Krombacher',
                name: "abeer6",
                country: "Чехія",
                strength: 0,
                volume: 500,
                price: "50",
                image: '../img/im-2.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 7,
                category: 'beer',
                brand: 'Leffe',
                name: "beer7",
                country: "Німеччина",
                strength: 0.5,
                volume: 330,
                price: "40",
                image: '../img/im-3.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 8,
                category: 'beer',
                brand: 'Lowenbrau',
                name: "beer8",
                country: "Чехія",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 9,
                category: 'beer',
                brand: 'Hoegaarden',
                name: "beer9",
                country: "Бельгія",
                strength: 3,
                volume: 750,
                price: "60",
                image: '../img/im-1.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 10,
                category: 'beer',
                brand: 'Krombacher',
                name: "cbeer10",
                country: "Великобританія",
                strength: 0,
                volume: 500,
                price: "50",
                image: '../img/im-2.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 11,
                category: 'beer',
                brand: 'Leffe',
                name: "beer11",
                country: "Ірландія",
                strength: 0.5,
                volume: 330,
                price: "40",
                image: '../img/im-3.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 12,
                category: 'beer',
                brand: 'Lowenbrau',
                name: "beer12",
                country: "Мексика",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 13,
                category: 'beer',
                brand: 'Hoegaarden',
                name: "dbeer13",
                country: "Німеччина",
                strength: 3,
                volume: 750,
                price: "60",
                image: '../img/im-1.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 14,
                category: 'beer',
                brand: 'Krombacher',
                name: "beer14",
                country: "Чехія",
                strength: 0,
                volume: 500,
                price: "50",
                image: '../img/im-2.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 15,
                category: 'beer',
                brand: 'Leffe',
                name: "beer15",
                country: "Німеччина",
                strength: 0.5,
                volume: 330,
                price: "40",
                image: '../img/im-3.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 16,
                category: 'beer',
                brand: 'Lowenbrau',
                name: "beer16",
                country: "Чехія",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 17,
                category: 'beer',
                brand: 'Hoegaarden',
                name: "beer17",
                country: "Бельгія",
                strength: 3,
                volume: 750,
                price: "60",
                image: '../img/im-1.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 18,
                category: 'beer',
                brand: 'Krombacher',
                name: "beer18",
                country: "Великобританія",
                strength: 0,
                volume: 500,
                price: "50",
                image: '../img/im-2.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 19,
                category: 'beer',
                brand: 'Leffe',
                name: "beer19",
                country: "Ірландія",
                strength: 0.5,
                volume: 330,
                price: "40",
                image: '../img/im-3.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 20,
                category: 'beer',
                brand: 'Lowenbrau',
                name: "beer20",
                country: "Мексика",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 21,
                category: 'beer',
                brand: 'Hoegaarden',
                name: "beer21",
                country: "Німеччина",
                strength: 3,
                volume: 750,
                price: "60",
                image: '../img/im-1.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 22,
                category: 'beer',
                brand: 'Krombacher',
                name: "beer22",
                country: "Чехія",
                strength: 0,
                volume: 500,
                price: "50",
                image: '../img/im-2.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 23,
                category: 'beer',
                brand: 'Leffe',
                name: "beer23",
                country: "Німеччина",
                strength: 0.5,
                volume: 330,
                price: "40",
                image: '../img/im-3.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 24,
                category: 'beer',
                brand: 'Lowenbrau',
                name: "beer24",
                country: "Чехія",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 25,
                category: 'wine',
                brand: 'Lowenbrau',
                name: "wine",
                country: "Чехія",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            }, {
                id: 25,
                category: 'wine',
                brand: 'Lowenbrau',
                name: "wine2",
                country: "Чехія",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            }, {
                id: 25,
                category: 'wine',
                brand: 'Lowenbrau',
                name: "wine 3",
                country: "Чехія",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            }, {
                id: 25,
                category: 'wine',
                brand: 'Lowenbrau',
                name: "wine4",
                country: "Чехія",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            }, {
                id: 25,
                category: 'wine',
                brand: 'Lowenbrau',
                name: "wine5",
                country: "Чехія",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 26,
                category: 'wine',
                brand: 'Lowenbrau',
                name: "wine6",
                country: "Чехія",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 26,
                category: 'vodka',
                brand: 'Lowenbrau',
                name: "beer24",
                country: "Чехія",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 26,
                category: 'vodka',
                brand: 'Lowenbrau',
                name: "beer24",
                country: "Чехія",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 26,
                category: 'vodka',
                brand: 'Lowenbrau',
                name: "beer24",
                country: "Чехія",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 26,
                category: 'vodka',
                brand: 'Lowenbrau',
                name: "beer24",
                country: "Чехія",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            },
            {
                id: 26,
                category: 'vodka',
                brand: 'Lowenbrau',
                name: "beer24",
                country: "Чехія",
                strength: 0.5,
                volume: 250,
                price: "30",
                image: '../img/im-4.png',
                description: 'Дуис омнес детерруиссет но ест, те яуи тритани малуиссет реферрентур. Хис еи аеяуе феугаит. Ех тантас долорум евертитур ест, пробатус суавитате вулпутате вис ан. Цибо персиус ат меа, алиа мовет аетерно ид хас, фалли цаусае апеириан хис ут. Дуо ин нисл плацерат тхеопхрастус, яуас рецусабо мнесарчум вим еа.'
            }
        ],
        user: [
            {
                id: 1,
                name: 'ivan',
                lastname: 'ivanov',
                day: 15,
                month: 10,
                year: 1986,
                email: "mail1@gmail.com",
                password: "pass1"
            },
            {
                id: 2,
                name: 'ivan2',
                lastname: 'ivanov2',
                day: 15,
                month: 10,
                year: 1986,
                email: "mail2@gmail.com",
                password: "pass2"
            },
            {
                id: 3,
                name: 'ivan3',
                lastname: 'ivanov3',
                day: 15,
                month: 10,
                year: 1986,
                email: "mail3@gmail.com",
                password: "pass3"
            },
            {
                id: 4,
                name: 'ivan4',
                lastname: 'ivanov4',
                day: 15,
                month: 10,
                year: 1986,
                email: "mail4@gmail.com",
                password: "pass4"
            }
        ],
        goodsBeer: [],
        getGoods: function () {
            return this.goods
        },
        getBeer: function () {
            goodsBeer = this.goods
            for (i in goodsBeer) {
                if (goodsBeer[i].category != 'beer') {
                    goodsBeer.slice(i, 1)

                }
            }
            return goodsBeer
        },
        getWine: function () {
            goodsWine=[]
            for(i in this.goods){
                if(this.goods[i].category=='wine'){
                    goodsWine.push(this.goods[i])
                }
            }


            return goodsWine
        },
        getUsers: function () {
            return this.user
        }

    }
})
app.filter('startFrom', function () {
    return function (input, start) {
        if (input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
})
;
window.location.href.split('#')[0];
function getE(id) {
    return document.getElementById(id);
}
// function showMainMenu(){}
// getE('burger_menu').onclick = function () {
//     if (getE("header_navbar_links").style.top == "35px") {
//         var pos1 = 35;
//         var id1 = setInterval(frame1, 5);
//         function frame1() {
//             if (pos1 == -435) {
//                 clearInterval(id1);
//             } else {
//                 pos1 -= 5;
//                 getE("header_navbar_links").style.top = pos1 + 'px';
//             }
//         }
//     }
//     else {
//         var pos = -435;
//         var id = setInterval(frame, 5);
//         function frame() {
//             if (pos == 35) {
//                 clearInterval(id);
//             } else {
//                 pos += 5;
//                 getE("header_navbar_links").style.top = pos + 'px';
//             }
//         }
//     }
// };
//
// getE('header_navbar_links').onclick = function () {
//     if (getE("header_navbar_links").style.top == "35px") {
//         var pos1 = 35;
//         var id1 = setInterval(frame1, 1);
//
//         function frame1() {
//             if (pos1 == -435) {
//                 clearInterval(id1);
//             } else {
//                 pos1 -= 5;
//                 getE("header_navbar_links").style.top = pos1 + 'px';
//             }
//         }
//     }
// };
// getE('sidebar_button').onclick = function () {
//     console.log('klick');
//     if (getE("sbtabm").style.left == "0px") {
//         console.log('if')
//         var pos1 = 0;
//         var id1 = setInterval(frame1, 5);
//
//         function frame1() {
//             if (pos1 == -300) {
//                 clearInterval(id1);
//             } else {
//                 pos1 -= 5;
//                 getE("sbtabm").style.left = pos1 + 'px';
//                 getE("sidebar_button").style.left = 300 + pos1 + 'px';
//             }
//
//
//         }
//     }
//     else {
//         console.log('else')
//         console.log(getE("sbtabm").style.left);
//
//         var pos = -300;
//         var id = setInterval(frame, 5);
//
//         function frame() {
//             if (pos == 0) {
//                 clearInterval(id);
//             } else {
//                 pos += 5;
//                 getE("sbtabm").style.left = pos + 'px';
//             }
//
//
//         }
//     }
// };
// getE('sidebar_button').onclick = function () {
//     if (getE("sbtabm").style.top == "35px") {
//         var pos1 = 35;
//         var id1 = setInterval(frame1, 1);
//
//         function frame1() {
//             if (pos1 == -435) {
//                 clearInterval(id1);
//             } else {
//                 pos1 -= 5;
//                 getE("header_navbar_links").style.top = pos1 + 'px';
//             }
//         }
//     }
// };

var q=222222;