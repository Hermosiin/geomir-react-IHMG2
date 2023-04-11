import { useSelector } from "react-redux";
import { PaginateLink } from "./PaginateLink";

export const Paginate = ({}) => {

    const { pages } = useSelector((state) => state.places);

    return (
        <>
            { pages.map ( (page)=> (

                <PaginateLink page={page}/>

            ) ) }
        </>
    )
}