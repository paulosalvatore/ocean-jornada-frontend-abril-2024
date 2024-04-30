import Tag from "../Tag/Tag"

export default function Card(props) {
    const item = props.item

    return (
        <div className="card">
            <h2>{item.name}</h2>

            <div className="tags">
                {item.tags?.map(function (tag) {
                    return <Tag text={tag} key={`tag_${tag}`} />
                })}
            </div>

            <img src={item.image} />
        </div>
    )
}
