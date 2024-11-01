import './search-panel.css';

const SearchPanel = () => {
    return (
        <input 
            type='text' 
            className='form-control search-input'
            placeholder='Найти содрудника'
        />
    )
}

export default SearchPanel;