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