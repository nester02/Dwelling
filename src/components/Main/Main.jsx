import {Component} from "react";
import './Main.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badges: [
                {name: 'comfort', text: 'Комфорт'},
                {name: 'installment', text: 'Розстрочка'},
                {name: 'new', text: 'Новинка'}
            ],
            data: [
                {
                    img: `${process.env.PUBLIC_URL}/buildings-images/Taryan-towers.webp`,
                    alt: "elite",
                    title: "ЖК Елітні будинки",
                    term: '2023-06-30',
                    address: "вул. Січових Стрільців 15",
                    metro: "Лук’янівська",
                    badges: ['installment', 'new'],
                    options: {
                        courtyard: true,
                        highCeilings: true,
                        panoramicWindows: true,
                        storage: false,
                        lowRise: false
                    },
                    zeroServices: true,
                    distance: 10
                },
                {
                    img: `${process.env.PUBLIC_URL}/buildings-images/Ilyuinski-lugy.jpg`,
                    alt: "img",
                    title: "ЖК Ільїнські луги",
                    term: '2024-12-31',
                    address: "пр. Льва Толстого 180А",
                    metro: "Лук’янівська",
                    badges: ['comfort', 'new'],
                    options: {
                        courtyard: true,
                        highCeilings: true,
                        panoramicWindows: false,
                        storage: false,
                        lowRise: true
                    },
                    zeroServices: false,
                    distance: 20
                },
                {
                    img: `${process.env.PUBLIC_URL}/buildings-images/Retroville.png`,
                    alt: "retroville",
                    title: "ЖК Ретровілль",
                    term: '2022-12-31',
                    address: "вул. Правди 47",
                    metro: "Берестейська",
                    badges: ['comfort', 'installment'],
                    options: {
                        courtyard: false,
                        highCeilings: false,
                        panoramicWindows: true,
                        storage: true,
                        lowRise: false
                    },
                    zeroServices: true,
                    distance: 30
                },
                {
                    img: `${process.env.PUBLIC_URL}/buildings-images/Nyvky.jpg`,
                    alt: "nyvky-park",
                    title: "ЖК Нивки-Парк",
                    term: '2023-11-30',
                    address: "пр. Перемоги 67",
                    metro: "Нивки",
                    badges: ['new', 'installment'],
                    options: {
                        courtyard: false,
                        highCeilings: false,
                        panoramicWindows: true,
                        storage: false,
                        lowRise: true
                    },
                    zeroServices: false,
                    distance: 40
                },
                {
                    img: `${process.env.PUBLIC_URL}/buildings-images/Sun-brama.jpg`,
                    alt: "soniachna-brama",
                    title: "ЖК Сонячна Брама",
                    term: '2024-09-30',
                    address: "вул. Петра Григоренка 22",
                    metro: "Позняки",
                    badges: ['comfort', 'new'],
                    options: {
                        courtyard: true,
                        highCeilings: false,
                        panoramicWindows: true,
                        storage: false,
                        lowRise: false
                    },
                    zeroServices: true,
                    distance: 50
                },
                {
                    img: `${process.env.PUBLIC_URL}/buildings-images/Perkove-misto.jpg`,
                    alt: "parkove-misto",
                    title: "ЖК Паркове Місто",
                    term: '2025-03-31',
                    address: "пр. Палладіна 25",
                    metro: "Академмістечко",
                    badges: ['comfort'],
                    options: {
                        courtyard: false,
                        highCeilings: false,
                        panoramicWindows: false,
                        storage: true,
                        lowRise: true
                    },
                    zeroServices: true,
                    distance: 5
                },
                {
                    img: `${process.env.PUBLIC_URL}/buildings-images/Chicago-Central-House.jpg`,
                    alt: "chicago-central-house",
                    title: "ЖК Chicago Central House",
                    term: '2024-07-31',
                    address: "вул. Антоновича 44",
                    metro: "Палац Україна",
                    badges: ['installment', 'new'],
                    options: {
                        courtyard: true,
                        highCeilings: false,
                        panoramicWindows: false,
                        storage: true,
                        lowRise: false
                    },
                    zeroServices: false,
                    distance: 15
                },
                {
                    img: `${process.env.PUBLIC_URL}/buildings-images/Pechersk-School-International.jpg`,
                    alt: "pechersk-school",
                    title: "ЖК Pechersk School",
                    term: '2023-05-31',
                    address: "вул. Драгомирова 9",
                    metro: "Дружби Народів",
                    badges: ['comfort', 'installment'],
                    options: {
                        courtyard: true,
                        highCeilings: true,
                        panoramicWindows: true,
                        storage: false,
                        lowRise: false
                    },
                    zeroServices: true,
                    distance: 25
                },
                {
                    img: `${process.env.PUBLIC_URL}/buildings-images/France-cvartal.jpg`,
                    alt: "french-quarter",
                    title: "ЖК Французький Квартал",
                    term: '2023-10-31',
                    address: "вул. Саперне поле 12",
                    metro: "Либідська",
                    badges: ['new', 'installment'],
                    options: {
                        courtyard: false,
                        highCeilings: false,
                        panoramicWindows: true,
                        storage: true,
                        lowRise: false
                    },
                    zeroServices: false,
                    distance: 35
                },
                {
                    img: `${process.env.PUBLIC_URL}/buildings-images/Solomyanska-20.jpg`,
                    alt: "solomianska-20",
                    title: "ЖК Солом'янська 20",
                    term: '2024-06-30',
                    address: "вул. Солом'янська 20",
                    metro: "Вокзальна",
                    badges: ['comfort', 'new'],
                    options: {
                        courtyard: true,
                        highCeilings: false,
                        panoramicWindows: false,
                        storage: true,
                        lowRise: false
                    },
                    zeroServices: false,
                    distance: 7
                },
                {
                    img: `${process.env.PUBLIC_URL}/buildings-images/Rivyera.jpg`,
                    alt: "riviera",
                    title: "ЖК Рів'єра",
                    term: '2023-08-31',
                    address: "вул. Микільсько-Слобідська 6",
                    metro: "Лівобережна",
                    badges: ['installment', 'new'],
                    options: {
                        courtyard: true,
                        highCeilings: false,
                        panoramicWindows: true,
                        storage: false,
                        lowRise: true
                    },
                    zeroServices: true,
                    distance: 12
                },
                {
                    img: `${process.env.PUBLIC_URL}/buildings-images/New-England.jpg`,
                    alt: "new-england",
                    title: "ЖК New England",
                    term: '2025-02-28',
                    address: "вул. Михайла Максимовича 24",
                    metro: "Васильківська",
                    badges: ['comfort', 'installment'],
                    options: {
                        courtyard: true,
                        highCeilings: false,
                        panoramicWindows: true,
                        storage: true,
                        lowRise: false
                    },
                    zeroServices: false,
                    distance: 21
                }
            ],
            visibleCount: 9,
        }
    }

    showMore = () => {
        this.setState((prevState) => ({
            visibleCount: prevState.visibleCount + 9
        }));
    }

    filterData = () => {
        const { filters = {} } = this.props;
        const { data } = this.state;

        return data.filter(item => {
            const isDistanceMatch = !filters.distance || filters.distance.length === 0 ||
                filters.distance.some(range => item.distance >= range[0] && item.distance < range[1]);

            const itemTermDate = new Date(item.term);
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const nextYear = currentYear + 1;

            let isTermMatch = true;
            if (filters.term) {
                switch (filters.term) {
                    case 'Здали':
                        isTermMatch = itemTermDate < currentDate;
                        break;
                    case 'В цьому році':
                        isTermMatch = itemTermDate.getFullYear() === currentYear;
                        break;
                    case 'В наступному році':
                        isTermMatch = itemTermDate.getFullYear() === nextYear;
                        break;
                    default:
                        isTermMatch = true;
                }
            }

            const isOptionsMatch = !filters.options || Object.keys(filters.options).every(option =>
                !filters.options[option] || item.options[option]
            );

            const isZeroServicesMatch = item.zeroServices || filters.zeroServices === false;
            return isDistanceMatch && isTermMatch && isOptionsMatch && isZeroServicesMatch;
        });
    }



    renderCard(item) {
        const { img, alt, title, term, address, metro, badges } = item;
        const termDate = new Date(term);
        const quarter = Math.ceil((termDate.getMonth() + 1) / 3);
        const termString = `Термін здачі до ${quarter} кварталу ${termDate.getFullYear()} р.`;

        return (
            <div className="main__card" key={title}>
                <div className="card__badges">
                    {badges.map(badgeName => {
                        const badge = this.state.badges.find(badge => badge.name === badgeName);
                        return badge ? <span key={badge.name} className={`badges__badge badges__badge--${badge.name}`}>{badge.text}</span> : null;
                    })}
                </div>
                <img className="card__image" src={img} alt={alt}/>
                <div className="card__text">
                    <div className="card__title">{title}</div>
                    <div className="card__term">{termString}</div>
                    <div className="card__metro">{metro}</div>
                    <div className="card__address">{address}</div>
                </div>
            </div>
        )
    }

    render() {
        const { visibleCount } = this.state;
        const filteredData = this.filterData();
        const visibleData = filteredData.slice(0, visibleCount);

        return (
            <section className="main">
                <div className="_container main__container">
                    {visibleData.map(item => this.renderCard(item))}
                    {visibleCount < filteredData.length && (
                        <button className="main__button" onClick={this.showMore}>Показати ще</button>
                    )}
                </div>
            </section>
        )
    }
}

export default Main;