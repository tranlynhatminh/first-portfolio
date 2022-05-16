function Appendix1 (props) {
    return (
        <>
            <ul className="appendix">
                <li><a href='#'>{props.item1}</a></li>
                <li><a href='#'>{props.item2}</a></li>
                <li><a href='#'>{props.item3}</a></li>
                <li><a href='#'>{props.item4}</a></li>
            </ul>
        </>
    )
}

function ListItem() {

    return (
        <div>
            <Appendix1
                item1='Services 1'
                item2='Services 2'
                item3='Services 3'
                item4='Services 4'
            />
        </div>
    )
}

export default ListItem