export default () => {
    // prettier-ignore
    return {
        banner: "banner",
        head: "Главное",
        menu: [{
            name: "Каталог обучения<br>и развития",
            comment: "Электронные курсы,<br>треки развития и тренинги",
            url: "https://lke.beeline.ru/university",
        },{
            name: "Мое обучение",
            comment: "Мои заявки на очное обучение и назначенные электронные курсы",
            url: "https://bu-online.beeline.ru/view_doc.html?mode=my_profile",
        },{
            name: "Консультации",
            comment: "Индивидуальные сессии с карьерными консультантами и коучами",
            url: "https://bu-online.beeline.ru/view_doc.html?mode=bu_career",
        },{
            name: "Помощь и поддержка",
            comment: "Есть вопросы или предложения по обучению? Отправь их нам!",
            url: "mailto: bu@beeline.ru",
        },{
            name: "Кабинет монобренда",
            url: "https://bu-online.beeline.ru/view_doc.html?mode=doc" +
                 "&doc_id=7467840204191526990",
            comment: "Только для сотрудников МБ",
        },{
            name: "Кабинет B2B",
            url: "https://bu-online.beeline.ru/view_doc.html?mode=b2b_lk",
            comment: "Только для сотрудников B2B",
        },{
            name: "Кабинет ДОК",
            url: "https://bu-online.beeline.ru/view_doc.html?mode=razum_cpk",
            comment: "Только для сотрудников ДОК",
        }]
    }
}
