import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Carousel from "./Carousel";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "1rem 0",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    textShadow: "2px 2px 8px #000",
  },
  textOwn: {
    color: "#fff",
    fontWeight: "bold",
    textShadow: "2px 2px 8px #000",
    padding: "1rem 0",
  },
});

export default function Main() {
  const classes = useStyles();

  return (
    <>
      <div className="main-div-card">
        <Card className="main-card">
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="h2"
              align="center"
              className={classes.text}
            >
              Nuestra Empresa
            </Typography>
            <img
              src="https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="nuestra empresa"
              className="main-img"
            />
            <Typography
              variant="body1"
              className={classes.textOwn}
              component="p"
              align="justify"
            >
              Contamos con 3 centros de distribución y 2 centros regionales,
              logrando una cobertura del 35% en territorio Nacional atendiendo a
              más de 4 mil clientes.
            </Typography>
            <Typography
              variant="body1"
              className={classes.textOwn}
              component="p"
              align="justify"
            >
              Nuestras más de 286 unidades de reparto recorren diariamente
              alrededor de 62 mil Km para entregar alrededor 8 mil órdenes y más
              de 88 mil medicamentos, asegurando que nuestros clientes siempre
              tengan a su disposición el producto que necesitan en la
              presentación adecuada y al mejor precio. Comercializamos nuestros
              productos en México.
            </Typography>
            <Typography
              variant="body1"
              className={classes.textOwn}
              component="p"
              align="justify"
            >
              Contamos con un laboratorio para análisis físico-químico, dotado
              con equipos de alta tecnología para garantizar calidad y confianza
              en sus análisis y estudios.
            </Typography>
            <Typography
              variant="body1"
              className={classes.textOwn}
              component="p"
              align="justify"
            >
              Nuestro equipo humano está conformado por profesionales
              competitivos, con una amplia experiencia en la industria, con una
              probada lealtad ante la empresa y un alto sentido de servicio al
              cliente, lo que nos da la confianza y el soporte para crecer;
              mejorando cada día la calidad de los productos y servicios que
              ofrecemos.
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="main-contain">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://images.pexels.com/photos/3861431/pexels-photo-3861431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Misión
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="justify"
              >
                Preservar la salud suministrando productos liofilizados
                inyectables y servicios farmacéuticos, que cumplen con la
                Normatividad Farmacéutica Mexicana vigente, desarrollando su
                talento humano y generando valor para la comunidad, sus
                colaboradores y los accionistas.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://images.pexels.com/photos/3861463/pexels-photo-3861463.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Visión
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="justify"
              >
                DLVR será siempre, una organización empresarial sólida, que
                preserva la salud, mediante el desarrollo integral de sus
                colaboradores, la innovación, la comercialización de productos y
                servicios farmacéuticos; logrando un crecimiento constante en
                ventas y rentabilidad, basados en calidad, tecnología,
                eficiencia, competitividad y satisfacción total de sus clientes.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="https://images.pexels.com/photos/3825368/pexels-photo-3825368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Politicas de Calidad
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="justify"
              >
                Cumplir con la Normatividad Farmacéutica Mexicana vigente y
                hacer de esta un estilo de trabajo propio, con procesos
                documentados y validados donde se garantiza la reproducibilidad
                de los productos y procesos que se ofrece a sus clientes.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="main-div-card">
        <Card className="main-card">
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="h2"
              align="center"
              className={classes.text}
            >
              Productos y Sercivios
            </Typography>
            <Typography
              variant="body1"
              className={classes.text}
              component="p"
              align="center"
            >
              Análisis de laboratorio de Control de Calidad.
            </Typography>
            <img src="/01.png" alt="analisis" />
            <Typography
              variant="body1"
              className={classes.text}
              component="p"
              align="center"
            >
              Maquila para fabricación a terceros.
            </Typography>
            <img src="/02.png" alt="analisis" />
            <Typography
              variant="body1"
              className={classes.text}
              component="p"
              align="center"
            >
              Desarrollo de medicamentos liofilizados.
            </Typography>
            <img src="/03.png" alt="analisis" />
            <Typography
              variant="body1"
              className={classes.text}
              component="p"
              align="center"
            >
              Proveedor, compra y venta en suministros de curación.
            </Typography>
            <img src="/04.png" alt="analisis" />
          </CardContent>
        </Card>
      </div>

      <div className="main-carousel">
        <>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            align="center"
            className={classes.text}
          >
            Portafolio de productos
          </Typography>
          <Carousel />
        </>
      </div>
    </>
  );
}
