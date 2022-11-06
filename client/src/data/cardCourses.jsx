import React from "react";
import { FaCss3Alt,FaHtml5, FaJs } from "react-icons/fa";
const cardCourses = [
    {
        id:"html",
        title: <FaHtml5/>,
        price : "$39.99",
        description:"Pendant ce cours, vous allez decouvrir le langage de programmation HTML qui definit la structure de votre contenu et la hierarchie entre les differentes partie d'un document,les balises, etc..."
    },
    {
        id:'css',
        title: <FaCss3Alt/> ,
        price : "$39.99",
        description:"Pendant ce cours, vous allez decouvrir le langage de programmation qui consiste a assigner des styles sur vos éléments html, marges, espacements, contenus, couleur, font, etc..."
    },
    {
        id:'js',
        title: <FaJs/>,
        price : "$59.99",
        description:"Pendant ce cours, vous allez decouvrir le langage de programmation JavaScript qui permet de dynamiser une application Web, Programmation orienté objet, debogage, structure algorithmiques, etc..."
    }
];
export default cardCourses;