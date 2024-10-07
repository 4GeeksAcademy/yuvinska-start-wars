import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card";
import { Context } from "../store/appContext";


export const Home = () => {
	const { actions, store } = useContext(Context)
	useEffect(() => {
	console.log (store.characters)
	}, [ store.characters])
	return (
		<div className="text-center mt-5">
			{store.characters?.map((character) => (
				<Card key= {character.uid} name={character.name} id={character.uid} />
			))}
		</div>
	);
}