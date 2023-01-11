import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../components/PageContainer";
import Game from "../../service/Game";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const Home = () => {
  const gameService = new Game();
  const navigate = useNavigate();

  const [games, setGames] = useState([]);
  useEffect(() => {
    fetchGames();
  }, []);

  const comingSoonGame = [
    {
      name: "Lords Mobile",
      engine: "unipin",
      logo: "https://upload.wikimedia.org/wikipedia/id/1/10/Lords_Mobile_logo.png",
    },
    {
      name: "Clash of Clans",
      engine: "unipin",
      logo: "https://metroandalas.co.id/wp-content/uploads/2022/10/Clash-of-Clans-secrets-hints.jpg",
    },
    {
      name: "Clash Royale",
      engine: "unipin",
      logo: "https://clashroyale.com/uploaded-images-blog/CR_facebook_share_02_180403_175322.jpg?mtime=20180403175322",
    },
    {
      name: "Valorant",
      engine: "unipin",
      logo: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f072336e3f3ade4/63096d7be4a8c30e088e7720/Valorant_2022_E5A2_PlayVALORANT_ContentStackThumbnail_1200x625_MB01.png",
    },
    {
      name: "CS:GO",
      engine: "unipin",
      logo: "https://blog.unipin.com/wp-content/uploads/2021/09/Ketahui-Penjelasan-Sistem-CSGO-Ranks-Sebelum-Bermain.jpg",
    },
    {
      name: "Lords Mobile",
      engine: "unipin",
      logo: "https://upload.wikimedia.org/wikipedia/id/1/10/Lords_Mobile_logo.png",
    },
    {
      name: "Free Fre",
      engine: "unipin",
      logo: "https://cdn.antaranews.com/cache/800x533/2022/06/20/Logo-Baru-Free-Fire.jpg",
    },
    {
      name: "Genshin Impact",
      engine: "unipin",
      logo: "https://i.ytimg.com/vi/ZAoSw1GPul0/maxresdefault.jpg",
    },
    {
      name: "Apex Legend",
      engine: "unipin",
      logo: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",
    },
  ];

  const fetchGames = async () => {
    await gameService.getGames().then((res) => {
      setGames(res);
    });
  };

  return (
    <PageContainer>
      <Grid container spacing={2} sx={{ pb: 5 }}>
        <Grid item xs={12} sx={{ my: 5 }}>
          <Swiper
            slidesPerView={1}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://cdn.unipin.com/images/banners/1672888254-700x280px%20_Website.jpg"
                alt="swipe1"
                style={{ height: "300px" }}
              />
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://cdn.unipin.com/images/banners/1672888311-700x280px%20_Website.jpg"
                alt="swipe2"
                style={{ height: "300px" }}
              />
            </SwiperSlide>
            <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://cdn.unipin.com/images/banners/1672888362-700x280px%20_Website.jpg"
                alt="swipe3"
                style={{ height: "300px" }}
              />
            </SwiperSlide>
          </Swiper>
        </Grid>
        <Grid item xs={12}>
          <h2 style={{ color: "white" }}>Popular Game</h2>
        </Grid>
        {games.length &&
          games.map((item, key) => (
            <Card sx={{ maxWidth: 275 }}>
              <CardMedia
                component="img"
                sx={{
                  width: "100%",
                  margin: "auto",
                }}
                image={item.logo}
                alt={item.name}
              />
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item.engine}
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                >
                  {item.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() =>
                    navigate("/" + item.code, { state: { game: item } })
                  }
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          ))}
        <Grid item xs={12}>
          <h2 style={{ color: "white" }}>Coming Soon Game</h2>
        </Grid>
        {comingSoonGame.length &&
          comingSoonGame.map((item, key) => (
            <Card sx={{ maxWidth: 275, m: 1 }}>
              <CardMedia
                component="img"
                sx={{
                  width: "100%",
                  margin: "auto",
                }}
                image={item.logo}
                alt={item.name}
              />
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item.engine}
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography
                  variant="h5"
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                >
                  {item.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" disabled>
                  Coming Soon
                </Button>
              </CardActions>
            </Card>
          ))}
      </Grid>
    </PageContainer>
  );
};

export default Home;
