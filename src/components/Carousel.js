import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#288e9e",
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    color: "#000",
  },
  titleBar: {
    backgroundColor: "#fff",
    opacity: "0.5",
  },
}));

const itemData = [
  {
    img:
      "https://images.pexels.com/photos/5682668/pexels-photo-5682668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Éticos",
  },
  {
    img:
      "https://images.pexels.com/photos/207601/pexels-photo-207601.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    title: "OTC",
  },
  {
    img:
      "https://images.pexels.com/photos/6781116/pexels-photo-6781116.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Productos de Higiene y Belleza",
  },
  {
    img:
      "https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    title: "Genéricos",
  },
  {
    img:
      "https://images.pexels.com/photos/8413080/pexels-photo-8413080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Material de Curación",
  },
  {
    img:
      "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Dispositivos Médicos",
  },
  {
    img:
      "https://images.pexels.com/photos/7088520/pexels-photo-7088520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Equipo Hospitalario",
  },
  {
    img:
      "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Biotecnológicos",
  },
  {
    img:
      "https://images.pexels.com/photos/1424538/pexels-photo-1424538.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Medicamentos Controlados",
  },
  {
    img:
      "https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    title: "Alta Especialidad",
  },
];

export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
