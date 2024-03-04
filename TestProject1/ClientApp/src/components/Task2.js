function Task2() {
    return (
        <div className='task'>
            <h2>Task 2</h2>
            <div className='container'>
                <div className='first'>
                    <h4>Task text:</h4>
                    <p className='text tasktext'>Даны таблицы:<br />
                        <b>Clients</b> - клиенты<br />
                        (<br />
                        &nbsp;Id bigint, -- Id клиента<br />
                        &nbsp;ClientName nvarchar(200) -- Наименование клиента<br />
                        );<br />
                        <b>ClientContacts</b> - контакты клиентов<br />
                        (<br />
                        &nbsp;Id bigint, -- Id контакта<br />
                        &nbsp;ClientId bigint, -- Id клиента<br />
                        &nbsp;ContactType nvarchar(255), -- тип контакта<br />
                        &nbsp;ContactValue nvarchar(255) --  значение контакта<br />
                        );<br />
                        1. Написать запрос, который возвращает наименование клиентов и кол-во контактов клиентов<br />
                        2. Написать запрос, который возвращает список клиентов, у которых есть более 2 контактов<br />
                    </p>
                </div>
                <div className='second'>
                    <h4>Solution:</h4>
                    <p className="text">
                        <span className="sql1">SELECT</span> <span className="sql2">Clients</span>.<span className="sql2">Id</span>, <span className="sql2">Clients</span>.<span className="sql2">ClientName</span>, <span className="sql2">tmp</span>.<span className="sql2">count</span><br />
                        <span className="sql1">FROM</span> <span className="sql2">Clients</span><br />
                        <span className="sql1">LEFT</span> <span className="sql1">OUTER</span> <span className="sql1">JOIN</span> (<span className="sql1">SELECT</span> <span className="sql2">ClientContacts</span>.<span className="sql2">ClientId</span>, <span className="sql2">COUNT</span>(<span className="sql2">ClientContacts</span>.<span className="sql2">ClientId</span>) <span className="sql1">as</span> <span>&#039;count&#039;</span><br />
                        <span className="sql1">FROM</span> <span className="sql2">ClientContacts</span><br />
                        <span className="sql1">GROUP</span> <span className="sql1">BY</span> <span className="sql2">ClientContacts</span>.<span className="sql2">ClientId</span><br />
                        ) <span className="sql2">tmp</span><br />
                        <span className="sql1">ON</span> <span className="sql2">tmp</span>.<span className="sql2">ClientId</span> = <span className="sql2">Clients</span>.<span className="sql2">Id</span>
                    </p><br />
                    <p className="text">
                        <span className="sql1">SELECT</span> <span className="sql2">Clients</span>.<span className="sql2">ClientName</span><br />
                        <span className="sql1">FROM</span> <span className="sql2">Clients</span><br />
                        <span className="sql1">LEFT</span> <span className="sql1">OUTER</span> <span className="sql1">JOIN</span> (<span className="sql1">SELECT</span> <span className="sql2">ClientContacts</span>.<span className="sql2">ClientId</span>, <span className="sql2">COUNT</span>(<span className="sql2">ClientContacts</span>.<span className="sql2">ClientId</span>) <span className="sql1">as</span> <span>&#039;count&#039;</span><br />
                        <span className="sql1">FROM</span> <span className="sql2">ClientContacts</span><br />
                        <span className="sql1">GROUP</span> <span className="sql1">BY</span> <span className="sql2">ClientContacts</span>.<span className="sql2">ClientId</span><br />
                        ) <span className="sql2">tmp</span><br />
                        <span className="sql1">ON</span> <span className="sql2">tmp</span>.<span className="sql2">ClientId</span> = <span className="sql2">Clients</span>.<span className="sql2">Id</span><br />
                        <span className="sql1">WHERE</span> <span className="sql2">tmp</span>.<span className="sql2">count</span> &gt; <span className="sql2">2</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Task2;