import './app-info.css';

const AppInfo = ({employersCount, increasedCount}) => {
    return (
        <div className='app-info'>
            <h1>Учет сотрудников в компании Бублики </h1>
            <h2>Общее число сотрудников: {employersCount} </h2>
            <h2>Премию получать: {increasedCount}</h2>
        </div>
    )
}

export default AppInfo;