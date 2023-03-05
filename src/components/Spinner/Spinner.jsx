import { useGetAllContactsQuery } from "redux/tasks/cont-slice";
import {LineWave} from 'react-loader-spinner'

const Spinner = () => {
    const { error, isLoading } = useGetAllContactsQuery();
    // const isLoading = useSelector(selectIsLoading);
    // const error = useSelector(selectError);
    return <>
        {error && <h1>An error occured while rendering your page</h1>}
        
        {isLoading && <LineWave 
    height = "80"
    width = "80"
    radius = "9"
    color = "green"
    ariaLabel = "loading"
    wrapperStyle
    wrapperClass
        />}

    </>
}

export default Spinner
