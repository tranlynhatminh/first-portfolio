function ServiceTop(props) {
    const serviceName = props.serviceName;
    const onChangeServiceName = props.onChangeServiceName;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    const serviceList = [
        'all', 'brading', 'logo', 'ui/ux', "web design"
    ]
    return (
        
        <div className="Container-tablist">
            <ul>
                {
                    serviceList.map((service,inx) => (
                        <li key={inx} className={ serviceName === service ? "active" : ""} onClick={() => onChangeServiceName(service)}>
                            <a>{capitalizeFirstLetter(service)}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default ServiceTop