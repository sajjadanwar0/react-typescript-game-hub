import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";


interface Props {
    onSelectSortOrder: (sortOrder: string) => void
    sortOrder: string | null
}

const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {
    const sortArray = [{value: '', label: 'Relevance'},

        {value: '', label: 'Date Added'},
        {value: '-added', label: 'Date Added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release date'},
        {value: 'metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'},

    ]

    const currentSortOrder = sortArray.find(order => order.value === sortOrder)

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={
                <BsChevronDown/>}>Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
            <MenuList>
                {sortArray.map(sort => <MenuItem onClick={() => onSelectSortOrder(sort.value)} key={sort.value}
                                                 value={sort.value}>{sort.label}</MenuItem>)}

            </MenuList>
        </Menu>
    )
}
export default SortSelector