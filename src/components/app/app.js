import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form';
import Button from '../button/button';

import './app.css'


function App(){

    const data = [
        {name: 'John C.', salary: 800,  increase: false, id: 1},
        {name: 'Alex M.', salary: 3000, increase: false, id: 2},
        {name: 'Carl W.', salary: 5000, increase: true, id: 3},
        {name: 'Alex K.', salary: 8000, increase: false, id: 4}
    ];

    return (
        <div className='app'>
            <AppInfo/>
            <div className="search-pannel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployersList data ={data}/>
            <EmployersAddForm/>
            <Button text="заебись кнопка"/>
        </div>
    )
}

export default App;