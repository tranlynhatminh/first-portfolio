function Appendix (props) {

    const listItems = props.listItems; // ['page1', 'page2'] => [<li>page1</li>, <li>page2</li>]

    return (
        <ul className="appendix">
            {
                listItems.map((item, idx) => (
                    <li key={idx}>
                        <a href="#">{item}</a>
                    </li>)
                )
            }
        </ul>
    )
}

export default Appendix;