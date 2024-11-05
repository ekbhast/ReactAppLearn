import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css'


function App(){

    const data = [
        {name: 'John C.', salary: 800,  increase: false},
        {name: 'Alex M.', salary: 3000, increase: false},
        {name: 'Carl W.', salary: 5000, increase: true},
        {name: 'Alex K.', salary: 8000, increase: false}
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
        </div>
    )
}

export default App;