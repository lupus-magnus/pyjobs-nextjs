import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";
import styles from "../styles/modules/Home.module.css";
import StyledSelect from "../components/StyledSelect";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../public/assets/animations/loading.json";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  //Para a animação do Lottie:
  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  setTimeout(() => setIsLoading(false), 5000);

  return (
    <>
      <Head>
        <title>Encontre sua vaga Python no Pyjobs</title>
        <meta name="PyJobs" content="Encontre sua vaga Python no Pyjobs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className={`container ${styles["createJobSection"]} `}>
        <div className="infoBlock">
          <h2 className="section__title">
            Encontre aqui as melhores vagas e profissionais Python{" "}
          </h2>
          <p className="section__text">
            PyJobs é o maior site de profissionais Python do Brasil. Nossos
            anúncios alcançam uma rede de mais de 15 mil profissionais Python, e
            temos mais de 2 anos de experiência com recrutamento.{" "}
          </p>
          <button className="section__button">Quero cadastrar uma vaga</button>
          <p className="section__text">
            ou veja as <a href="#">vagas listadas abaixo</a>
          </p>
        </div>
        <div className="section__img">
          <Image
            width={833}
            height={814}
            src={"/assets/images/cadastroVaga.png"}
            alt="Foto de desenvolvedor de costas programando"
          />
        </div>
      </section>

      <section className={`${styles["jobsSection"]}`}>
        <div className={`container ${styles["searchJobsSection"]}`}>
          <h3 className="section__title--small">
            PESQUISE AQUI A VAGA QUE MELHOR SE ENQUADRE AO SEU PERFIL
          </h3>
          <div className={styles["form__container"]}>
            <form className={styles["jobSearch__form"]}>
              <div
                className={`${styles["field_00"]}  ${styles["form__fieldArea"]}`}
              >
                <StyledSelect
                  width="100%"
                  label="Título da Vaga"
                  id="teste"
                  name="teste"
                >
                  <option value="unknown" selected="">
                    {" "}
                    Opção de teste{" "}
                  </option>
                </StyledSelect>
              </div>
              <div
                className={`${styles["field_01"]}  ${styles["form__fieldArea"]}`}
              >
                <StyledSelect width="100%" label="País" id="teste" name="teste">
                  <option value="unknown" selected="">
                    {" "}
                    Opção de teste{" "}
                  </option>
                </StyledSelect>
              </div>
              <div
                className={`${styles["field_02"]}  ${styles["form__fieldArea"]}`}
              >
                <StyledSelect
                  width="100%"
                  label="Forma de contratação"
                  id="teste"
                  name="teste"
                >
                  <option value="unknown" selected="">
                    {" "}
                    Opção de teste{" "}
                  </option>
                </StyledSelect>
              </div>
              <div
                className={`${styles["field_10"]}  ${styles["form__fieldArea"]}`}
              >
                <StyledSelect
                  width="100%"
                  label="Remoto?"
                  id="teste"
                  name="teste"
                >
                  <option value="unknown" selected="">
                    {" "}
                    Opção de teste{" "}
                  </option>
                </StyledSelect>
              </div>
              <div
                className={`${styles["field_11"]}  ${styles["form__fieldArea"]}`}
              >
                <StyledSelect
                  width="100%"
                  label="Faixa salarial"
                  id="teste"
                  name="teste"
                >
                  <option value="unknown" selected="">
                    {" "}
                    Opção de teste{" "}
                  </option>
                </StyledSelect>
              </div>
              <div
                className={`${styles["field_12"]}  ${styles["form__fieldArea"]}`}
              >
                <StyledSelect
                  width="100%"
                  label="Nível do profissional"
                  id="teste"
                  name="teste"
                >
                  <option value="unknown" selected="">
                    {" "}
                    Opção de teste{" "}
                  </option>
                </StyledSelect>
              </div>
            </form>
          </div>
          <button
            className={`section__button ${styles["searchJobsSection__button"]}`}
          >
            Buscar
          </button>
        </div>
        <div className={`container infoBlock`}>
          <h2 className="section__title">Nossas vagas</h2>
          <p className="section__text">
            Aqui você tem acesso a nossas vagas mais recentes para se cadidatar!
            Se você é uma empresa e quer encontrar os melhores Pythonistas e ter
            sua vaga destacada na comunidade, entre em contato conosco e
            encontre aqui o profissional ideal para seu time!
          </p>
          {isLoading ? (
            <Lottie
              options={defaultOptions}
              height={400}
              width={400}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused}
            />
          ) : (
            <div
              className={`container ${styles["jobsSection__cardsContainer"]}`}
            >
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
          )}
        </div>
      </section>
      <section className="container">
        <div className="infoBlock">
          <h2 className="section__title">
            Conheça as melhores oportunidades Python{" "}
          </h2>
          <p className="section__text">
            Todas as oportunidades listadas no PyJobs passaram por um processo
            de curadoria para garantir a melhor qualidade possível das vagas.
            Nossa parceria com as empresas é feita de maneira transparente e
            visando melhores oportunidades e condições aos desenvolvedores.{" "}
          </p>
          <button className="section__button">Quero ver as vagas</button>
        </div>
        <div className="section__img">
          <Image
            width={833}
            height={814}
            src={"/assets/images/joinha.png"}
            alt="Foto de desenvolvedor de costas programando"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
