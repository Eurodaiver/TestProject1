function Task3() {
    return (
        <div className='task'>
            <h2>Task 3</h2>
            <div className='container'>
                <div className='first'>
                    <h4>Task text:</h4>
                    <div className="text tasktext">
                        Дана таблица:<br />
                        <b>Dates</b> - клиенты<br />
                        (<br />
                        &nbsp;Id bigint,<br />
                        &nbsp;Dt date<br />
                        );<br /><br />
                        Написать запрос, который возвращает интервалы для одинаковых Id. Например, есть такой набор данных:<br />
                        <table className="table">
                            <thead><tr><th>Id</th><th>Dt</th></tr></thead>
                            <tbody><tr><td>1</td><td>01.01.2021</td></tr>
                                <tr><td>1</td><td>10.01.2021</td></tr>
                                <tr><td>1</td><td>30.01.2021</td></tr>
                                <tr><td>2</td><td>15.01.2021</td></tr>
                                <tr><td>2</td><td>30.01.2021</td></tr>
                            </tbody>

                        </table>
                        Результатом выполнения запроса должен быть такой набор данных:<br />
                        <table className="table">
                            <thead><tr><th>Id</th><th>Es</th><th>Ed</th></tr></thead>
                            <tbody><tr><td>1</td><td>01.01.2021</td><td>10.01.2021</td></tr>
                                <tr><td>1</td><td>10.01.2021</td><td>30.01.2021</td></tr>
                                <tr><td>2</td><td>15.01.2021</td><td>30.01.2021</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='second'>
                    <h4>Solution:</h4>
                    <div className="text">
                        <span className="sql1">SELECT</span> <span className="sql2">t1</span>.<span className="sql2">Id</span>, <span className="sql2">t1</span>.<span className="sql2">Dt</span> <span className="sql1">as</span> <span className="sql2">Sd</span> , <span className="sql2">X</span>.<span className="sql2">Dt</span> <span className="sql1">as</span> <span className="sql2">Ed</span> <span className="sql1">FROM</span> <span className="sql2">Dates</span> <span className="sql2">t1</span><br />
                        <span className="sql1">CROSS</span> <span className="sql2">APPLY</span><br />
                        (  <span className="sql1">SELECT</span> <span className="sql2">TOP</span> <span>1</span> *<br />
                        <span className="sql1">FROM</span> <span className="sql2">Dates</span> <span className="sql2">t2</span><br />
                        <span className="sql1">WHERE</span> <span className="sql2">t1</span>.<span className="sql2">Id</span> = <span className="sql2">t2</span>.<span className="sql2">Id</span> <span className="sql1">AND</span> <span className="sql2">t1</span>.<span className="sql2">Dt</span> &lt; <span className="sql2">t2</span>.<span className="sql2">Dt</span><br />
                        <span className="sql1">ORDER</span> <span className="sql1">BY</span> <span className="sql2">t2</span>.<span className="sql2">Id</span> , <span className="sql2">t2</span>.<span className="sql2">Dt</span><br />
                        ) <span className="sql2">X</span><br />
                        <span className="sql1">ORDER</span> <span className="sql1">BY</span> <span className="sql2">t1</span>.<span className="sql2">Id</span> , <span className="sql2">t1</span>.<span className="sql2">Dt</span><br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task3;