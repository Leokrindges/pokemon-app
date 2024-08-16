import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Pagination,
  Stack,
  Typography,
} from "@mui/material/";
import { listPokemons } from "../store/modules/pokemons/pokemonsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import { fetchAllPokemons } from "../store/modules/pokemons/pokemons.action";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function Home() {
  const [page, setPage] = useState(0);
  const [buttonPagination, setButoonPagination] = useState(1);
  const pokemons = useAppSelector((state) => listPokemons(state.pokemons));
  const pagination = useAppSelector((state) => state.pokemons.pagination);
  const dispatch = useAppDispatch();
  console.log(pagination);    

  useEffect(() => {
    dispatch(fetchAllPokemons({ page: page, limit: 20 }));
    // console.log(pagination);    
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage((value -1) * pagination.limit);
    setButoonPagination(value);
  };

  return (
    <Box component={"main"}>
      <Container
        sx={{
          width: "100%",
          maxWidth: "100%",
          minHeight: "70vh",
          display:'flex',
          alignItems:'center',
          flexDirection:'column'
        }}
      >
        <Stack
          direction={"row"}
          sx={{ minWidth: "100%" }}
          justifyContent={"center"}
          mt={9}
        >
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ width: "100%" }}
            justifyContent={"center"}
          >
            {pokemons.map((pokemon) => (
              <Grid item sm={6} md={4} lg={3} key={pokemon.id} width={'18rem'}>
                <Card sx={{ minWidth: "80%" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      sx={{ width: "auto", margin: "0 auto", mt: "1rem" }}
                      image={pokemon.image}
                      alt={pokemon.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Name: {pokemon.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Size: {pokemon.size}
                      </Typography>
                      <CardActions sx={{ padding: "0px", mt: "0.5rem" }}>
                        <IconButton
                          sx={{ padding: "0px" }}
                          aria-label="add to favorites"
                        >
                          <FavoriteIcon />
                        </IconButton>
                      </CardActions>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
            <Pagination
              onChange={handleChange}
              count={pagination.totalPages}
              page={buttonPagination}
              color="primary"
              sx={{ mt: "1.5rem" }}
            />
      </Container>
    </Box>
  );
}
