const Card = (x) => {
    console.log('Props', x);
    return (
        <div>
            <h1>{x.title}</h1>
            <p>{x.description}</p>
        </div>
    )
}

module.export=Card;