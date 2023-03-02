const { LineWave } = require("react-loader-spinner");
const { useSelector } = require("react-redux")
const { selectIsLoading } = require("redux/tasks/cont-selectors")

const Spinner = () => {
    const isLoading = useSelector(selectIsLoading);
    return <>{ isLoading && <LineWave
    height = "80"
    width = "80"
    radius = "9"
    color = "green"
    ariaLabel = "loading"
    wrapperStyle
    wrapperClass
        />}</>
}

export default Spinner
