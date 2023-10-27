import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";


interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
    const {data, isLoading, error} = useGenres()

    if (error) return null
    if (isLoading) return <Spinner/>
    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>

            <List>
                {data.map(genre => <ListItem key={genre.id}>
                    <HStack marginBottom={3}>
                        <Image boxSize="32px" objectFit='cover' paddingY="5px" borderRadius={8}
                               src={getCroppedImageUrl(genre.image_background)}/>
                        <Button whiteSpace='normal' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                                onClick={() => onSelectGenre(genre)} textAlign={'left'} fontSize='lg'
                                variant='link'>{genre.name}</Button>
                    </HStack>

                </ListItem>)}

            </List>
        </>
    )
}
export default GenreList