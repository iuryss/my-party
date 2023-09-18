'use client'

import React from "react";
import Navbar from "../../../components/NavBar/navBar";
import Carousel from '../../../components/Carousel/carousel';
import SearchBar from '../../../components/SearchBar/searchBar';
import {MainContainer} from './styles'


export default function home () {


    function generateRandomDate() {
        const day = Math.floor(Math.random() * 30) + 1;
        const month = Math.floor(Math.random() * 12) + 1;
        const year = Math.floor(Math.random() * 10) + 2015;
        return `${day}/${month}/${year}`;
      }

    const eventsPhotos = [
        'https://img.freepik.com/fotos-gratis/a-luz-brilhante-do-palco-ilumina-os-fas-de-rock-gerados-pela-ia_188544-37983.jpg?w=1060&t=st=1694986456~exp=1694987056~hmac=ba92bf0b39761649b8241ac88aba6fb4599dce7a3a3917ea3e91826b4ef1cca3',
        'https://as1.ftcdn.net/v2/jpg/06/32/25/48/1000_F_632254843_tbDPM5EV6LGbeLNyU9DJso03qeXeX3zK.jpg',
        'https://liftlearning.com/wp-content/uploads/2020/09/default-image.png',
      ]

      const mockupPartys = [
        {
          nomeDaFesta: "Festa de Verão",
          imagem: "https://img.freepik.com/free-psd/saturday-night-party-social-media-instagram-template_505751-3745.jpg?w=740&t=st=1694994819~exp=1694995419~hmac=d584670f0722f4044a6da3d30d254909a2258cf042d6016f92e3e0f80258d2cd",
          data: generateRandomDate(),
          titulo: "Festa de Verão 2023",
          organizador: "Organizador A",
        },
        {
          nomeDaFesta: "Festa de Halloween",
          imagem: "https://img.freepik.com/premium-vector/flat-brazilian-carnival-illustration_23-2149223844.jpg?w=740",
          data: generateRandomDate(),
          titulo: "Noite Assustadora",
          organizador: "Organizador B",
        },
        {
          nomeDaFesta: "Festa de Aniversário",
          imagem: "https://img.freepik.com/free-psd/abstract-music-poster-template-with-colorful-wavy-shapes_1361-4187.jpg?w=360&t=st=1694994853~exp=1694995453~hmac=03ddc742ee667c29a3c247fadad07e0cae23080ab3431de3eb3c5d28d71bcb46",
          data: generateRandomDate(),
          titulo: "Aniversário Surpresa",
          organizador: "Organizador C",
        },
      ];

    return(
        <>
            <Navbar navFirst={'Eventos'} navSecond={'Revenda'} navThird={"Sobre nôs"}/>
            <MainContainer>
                <Carousel photos={eventsPhotos} />
                <SearchBar />
            </MainContainer>
        </>
    )
}