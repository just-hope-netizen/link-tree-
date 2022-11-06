import { SlackIcon } from "../../assets/svg";
import { CardComponent } from "../../components/Card";
import { Header } from "../../components/Header";
import gitIcon from "../../assets/img/Icon.png";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";

export const slackUserName = "Hope Peter";

export const Home = () => {
  return (
    <div className="container-fluid ">
      <Header />
      <CardComponent
        link={"https://mobile.twitter.com/hope_imevbore"}
        id={"twitter"}
        text={"Twitter Link"}
      />
      <CardComponent
        link={"https://training.zuri.team/"}
        id={"btn__zuri"}
        text={"Zuri Team"}
      />
      <CardComponent
        link={"http://books.zuri.team"}
        id={"books"}
        text={"Zuri Books"}
      />
      <CardComponent
        link={`https://books.zuri.team/python-for-beginners?ref_id= ${slackUserName} `}
        id={"book__python"}
        text={"Python Books"}
      />
      <CardComponent
        link={" https://background.zuri.team"}
        id={"pitch"}
        text={"Background Check for Coders"}
      />
      <CardComponent
        link={" https://books.zuri.team/design-rules "}
        id={"book__design"}
        text={"Design Books"}
      />
      <CardComponent id={"book__design"}>
        <Link
          to={"/contact"}
          id="contact"
          style={{
            textDecoration: "none",
            color: "#101828",
          }}
        >
          Contact Me
        </Link>
      </CardComponent>

      <div className="py-3 text-center mb-5">
        <SlackIcon className="me-2" />
        <img src={gitIcon} alt="git icon" className="ms-2" />
      </div>

      <Footer />
    </div>
  );
};
