import React from 'react'
import { Main } from './Main'
      
     const id = Math.random().toString()

     const Data = () => {
   
    const data = [
        {
            bookName: "Сынган кылыч",
            description: "Бул роман кыргыз элинин улуттук тарыхындагы өзүнчө бир доор - Кокон хандыгы мезгилин",
            bookImg: "https://bookhouse.kg/media/galleryphoto/2022/4/bda94cd3-748d-4e3e-b90d-058e6a9c9955.jpeg.600x780_q94.jpg",
            author: "Т.Касымбеков",
            id
        },
        {
            bookName: "Кылым карытаар бир күн",
            description: "Ч. Айтматовдун бул романы өзүнүн идеялык-тематикалык багыты, сюжеттик-композициялык түзүлүшү боюнча ",
            bookImg: "https://bookhouse.kg/media/galleryphoto/2019/9/97ee183d-875c-4e11-991a-b6dd399b9029.jpg.600x780_q94.jpg",
            author: "Ч.Айтматов",
            id
        },
        {
            bookName: "Биринчи мугалим",
            description: "Повестти сүрөтчү баяндап баштайт - ал өзү туулуп өскөн Күркүрөө айылына жаңы мектептин ачылышына жайда чакырылат.",
            bookImg: "https://daniyarov.kg/wp-content/uploads/2018/08/birinchi-mugalim-oblozhka-202x300.jpg",
            author: "Ч.Айтматов",
            id
        },
        {
            bookName: "Старик и море",
            description: "Китеп атактуу америкалык жазуучу Эрнист Хеменгуэйдин калемине таандык. Повесть 1952-жылы жазылып, окурмандардын калың катмарына жарыяланган.",
            bookImg: "https://biblioteka-online.info/storage/app/uploads/public/c25/537/008/thumb__301_481_0_0_crop.jpg",
            author: " Эрнест Хемингуэй",
            id
        },
        {
            bookName: "Саманчынын жолу",
            description: "Саманчынын жолу – асмандын түндүк жарым шарында Эгиз, Букачар, Возничий, Кассиопея, Цефей, андан соң Бүркүт топ жылдызынан эки тармакка ажырап, анын бир тармагы түштүк жарым шарына өтүп, Калкан, Жаачы, Чаян, Центавр, Түштүк крест, Киль, Парус, Тайган, Единорог, ",
            bookImg: "https://erkindik.net/public/images/2015/10//eba86737bc9b82ffdcaf62064785b75c.jpg",
            author: "Ч.Айтматов",
            id
    
        },
        {
            bookName: "Көк асаба",
            description: "Көк асаба романын тарыхый роман деп атоо анча так болмок эмес. Анткени,тарыхый чыгарма болуш үчүн бир катар шарт ишке ашуу керек экендигин эстейли. Ошол себептен бул чыгарманы тарыхыйчылыкка талапкер чыгарма катары мүнөздөө чындыкка бир аз жакыныраак болчудай. Орто кылымдардын башындагы (6–8 к.)",
            bookImg: "https://bookhouse.kg/media/galleryphoto/2019/7/fd98a0ab-aa2d-4b7a-967d-99d1fcfaaaf8.jpg.600x780_q94.jpg",
            author: "Т.Сыдыкбеков",
            id
        },
        {
            bookName: "Теңирим Манас",
            description: "Жазуучу Ашым Жакыпбековдун баардык манасчылардын вариантын колдонуп, кара сөз түрүндө жазып чыккан бул романы, окурмандарды кайдыгер калтырбайт болуш керек.",
            bookImg: "https://gdb.rferl.org/D938A9E7-0D39-44C3-A4B0-62E7AE0637A4_cx7_cy0_cw93_w1200_r1.jpg",
            author: "А.Жакыпбеков",
            id
        },
        {
            bookName: "Жамиля",
            description :"Айтматов Жамийляны Москвадагы Бүткүл дүйнөлүк М.Горький атындагы адабият институтунда жүргөн кезинде, Тверь саябанындагы батиринде жашаган кезде ак кагазга түшүргөн.",
            bookImg: "https://turar.kg/wp-content/uploads/2021/01/jamila.jpg",
            author: "Ч.Айтматов",
            id
        },
    ]

    return(
        <div>
            <Main data={Data}/>
        </div>
    )
}
      
    export default Data