import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: {
                distance: false,
                term: false,
                options: false,
            },
            isSectionHidden: false,
            options: {
                courtyard: false,
                highCeilings: false,
                panoramicWindows: false,
                storage: false,
                lowRise: false
            },
            zeroServices: false,
            distance: [],
            term: "будь-який",
            filterAnyChecked: false,
            filterChecked: {
                filter1: true,
                filter2: true,
                filter3: false,
                filter4: false,
            },
            showMoreOptions: false
        };
    }

    showSidebarContent = (event) => {
        const section = event.currentTarget.dataset.section;
        this.setState((prevState) => ({
            sections: {
                ...prevState.sections,
                [section]: !prevState.sections[section],
            }
        }));
    }

    onFilterAnyChecked = (e) => {
        const checked = e.target.checked;
        this.setState({
            filterAnyChecked: checked,
            filterChecked: {
                filter1: !checked,
                filter2: !checked,
                filter3: !checked,
                filter4: !checked
            }
        });
    }

    onFilterChecked = (e) => {
        const id = e.target.id;
        const value = e.target.checked;
        const distanceMap = {
            filter1: [0, 10],
            filter2: [10, 20],
            filter3: [20, 30],
            filter4: [30, Infinity]
        }
        this.setState((prevState) => {
            const updateFilterChecked = { ...prevState.filterChecked, [id]: value };
            const newDistance = value ? [...prevState.distance, distanceMap[id]] : prevState.distance.filter(distance => distance !== distanceMap[id]);
            const filterAnyChecked = newDistance.length === 0;
            return {
                filterChecked: updateFilterChecked,
                filterAnyChecked,
                distance: newDistance
            }
        })
    }

    onApplyFilter = () => {
        this.onResetFilter();
        const { distance, term, options, zeroServices } = this.state;
        this.props.onApplyFilter({ distance, term, options, zeroServices });
    }

    onResetFilter = () => {
        this.setState({
            distance: [], term: '', options: {}, zeroServices: false
        })
        this.props.onResetFilter({
            distance: [], term: '', options: {}, zeroServices: false
        });
         this.setState({
             filterChecked: {
                 filter1: false,
                 filter2: false,
                 filter3: false,
                 filter4: false,
             }
         })
    }

    showMoreOptions = () => {
        this.setState((prevState) => ({
            showMoreOptions: !prevState.showMoreOptions
        }));
    }

    onTermChange = (e) => {
        const term = e.target.value;
        this.setState({term});
    }

    onOptionsChange = (e) => {
        const {name, checked} = e.target;
        this.setState((prevState) => ({
            options: {
                ...prevState.options,
                    [name]: checked,
            }
        }));
    }

    onZeroServicesChange = () => {
        this.setState((prevState) => ({
            zeroServices: !prevState.zeroServices,
        }));
    }

    render() {
        const { sections, filterChecked, filterAnyChecked, showMoreOptions, options } = this.state;
        return (
            <aside className="sidebar">
                <div className="_container sidebar__container">
                    <h3 className={`sidebar__title ${sections.distance ? 'active' : ''}`}
                        onClick={this.showSidebarContent} data-section="distance">Близькість до метро</h3>
                    <div className={`sidebar__section ${sections.distance ? 'sidebar__section --hide' : 'sidebar__section'}`}>
                        <div className="sidebar__distance">
                            <input onChange={this.onFilterChecked} checked={filterChecked.filter1} type="checkbox"
                                   data-section="location-param" id="filter1" className="location__checkbox"/>
                            <label className="location__btn" htmlFor="filter1">&lt; 10</label>

                            <input onChange={this.onFilterChecked} checked={filterChecked.filter2} type="checkbox"
                                   data-section="location-param" id="filter2" className="location__checkbox"/>
                            <label className="location__btn" htmlFor="filter2">10-20</label>

                            <input onChange={this.onFilterChecked} checked={filterChecked.filter3} type="checkbox"
                                   data-section="location-param" id="filter3" className="location__checkbox"/>
                            <label className="location__btn" htmlFor="filter3">20-30</label>

                            <input onChange={this.onFilterChecked} checked={filterChecked.filter4} type="checkbox"
                                   data-section="location-param" id="filter4" className="location__checkbox"/>
                            <label className="location__btn" htmlFor="filter4">30+</label>
                        </div>
                        <div className="sidebar__distance">
                            <input onChange={this.onFilterAnyChecked} checked={filterAnyChecked} type="checkbox"
                                   id="location-05" className="location__checkbox"/>
                            <label className="location__btn" htmlFor="location-05">Будь-яка</label>
                        </div>
                    </div>

                    <h3 className={`sidebar__title ${sections.term ? 'active' : ''}`} onClick={this.showSidebarContent} data-section="term">Термін здачі</h3>
                    <div className={`sidebar__section ${sections.term ? 'sidebar__section --hide' : 'sidebar__section'}`}>
                        <div className="sidebar__term">
                            {['Будь-який', 'Здали', 'В цьому році', 'В наступному році'].map((value) => (
                                <label className="term__radio" key={value}>
                                    <input type="radio" className="radio__real" value={value}
                                           checked={this.state.term === value} onChange={this.onTermChange}/>
                                    <span className="radio__fake"></span>
                                    <span className="radio__title">{value}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <h3 className={`sidebar__title ${sections.options ? 'active' : ''}`} onClick={this.showSidebarContent} data-section="options">Додаткові опції</h3>
                    <div className={`sidebar__section ${sections.options ? 'sidebar__section --hide' : 'sidebar__section'}`}>
                        <div className="sidebar__options">
                            <label className="options__checkbox">
                                <input className="checkbox__real" type="checkbox" name="courtyard" checked={options.courtyard} onChange={this.onOptionsChange}/>
                                <span className="checkbox__fake radio__fake"></span>
                                <span className="checkbox__title radio__title">Двір без машин</span>
                            </label>
                            <label className="options__checkbox">
                                <input className="checkbox__real" type="checkbox" name="highCeilings" checked={options.highCeilings} onChange={this.onOptionsChange}/>
                                <span className="checkbox__fake radio__fake"></span>
                                <span className="checkbox__title radio__title">Високі стелі</span>
                            </label>
                            <label className="options__checkbox">
                                <input className="checkbox__real" type="checkbox" name="panoramicWindows" checked={options.panoramicWindows} onChange={this.onOptionsChange}/>
                                <span className="checkbox__fake radio__fake"></span>
                                <span className="checkbox__title radio__title">Панорамні вікна</span>
                            </label>
                            {/*<label className="options__checkbox">*/}
                            {/*    <input className="checkbox__real" type="checkbox" name="storage" checked={options.storage} onChange={this.onOptionsChange}/>*/}
                            {/*    <span className="checkbox__fake radio__fake"></span>*/}
                            {/*    <span className="checkbox__title radio__title">Є кладівки</span>*/}
                            {/*</label>*/}
                            {/*<label className="options__checkbox">*/}
                            {/*    <input className="checkbox__real" type="checkbox" name="lowRise" checked={options.lowRise} onChange={this.onOptionsChange}/>*/}
                            {/*    <span className="checkbox__fake radio__fake"></span>*/}
                            {/*    <span className="checkbox__title radio__title">Малоповерховий</span>*/}
                            {/*</label>*/}
                            {showMoreOptions && (
                                <React.Fragment>
                                    <label className="options__checkbox">
                                        <input className="checkbox__real" type="checkbox" name="storage"
                                               checked={options.storage} onChange={this.onOptionsChange}/>
                                        <span className="checkbox__fake radio__fake"></span>
                                        <span className="checkbox__title radio__title">Є кладівки</span>
                                    </label>
                                    <label className="options__checkbox">
                                        <input className="checkbox__real" type="checkbox" name="lowRise"
                                               checked={options.lowRise} onChange={this.onOptionsChange}/>
                                        <span className="checkbox__fake radio__fake"></span>
                                        <span className="checkbox__title radio__title">Малоповерховий</span>
                                    </label>
                                </React.Fragment>
                            )}
                            <div className="options__show-more"
                                 onClick={this.showMoreOptions}>{showMoreOptions ? 'Сховати' : 'Показати ще'}</div>
                        </div>
                    </div>

                    <div className="sidebar__section">
                        <label className="sidebar__toggle">
                            <input className="toggle__checkbox" type="checkbox" checked={this.state.zeroServices} onChange={this.onZeroServicesChange}/>
                            Послуги 0%
                        </label>
                    </div>

                    <div className="sidebar__actions">
                        <button className="actions__button button__apply-filters" onClick={this.onApplyFilter}>
                            Застосувати фільтри
                        </button>
                        <button className="actions__button button__reset-filters" onClick={this.onResetFilter}>
                            Скинути фільтри
                        </button>
                    </div>
                </div>
            </aside>
        );
    }
}

export default Sidebar;