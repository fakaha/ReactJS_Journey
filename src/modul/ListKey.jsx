import "./ListKey.css"

const ListKey = () => {
    const fruits = [
        'Apple',
        'Grape',
        'Orange',
        'Pear',
        'Apple'
    ]

    console.log(fruits.map(function(fruit){
        return <li>{fruit}</li>
    })
    )
    return(
        <>
        <ul>
            {/* KALAU PAKAI FOREACH GA BISA KARENA TIDAK SUPPORT RETURN */}
            {fruits.map(function(fruit, id){
                return <li key={id}>{fruit}</li>
            })}
        </ul>
        </>
    )
}

export default ListKey;