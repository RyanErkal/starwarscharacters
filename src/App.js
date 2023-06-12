import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [currentCharacter, setCurrentCharacter] = useState("");
	const [characters, setCharacters] = useState([
		{
			name: "Obi-Wan Kenobi",
			affilition: "Jedi",
			height: "182",
			mass: "77",
			hair_color: "auburn, white",
			lightsaber_color: "blue",
			homeworld: "Stewjon",
			species: "Human",
			films: [
				"The Empire Strikes Back",
				"Attack of the Clones",
				"The Phantom Menace",
				"Revenge of the Sith",
				"Return of the Jedi",
				"A New Hope",
			],
		},
		{
			name: "Anakin Skywalker",
			affilition: "Jedi",
			height: "188",
			mass: "84",
			hair_color: "blond",
			lightsaber_color: "blue",
			homeworld: "Tatooine",
			species: "Human",
			films: [
				"The Empire Strikes Back",
				"Attack of the Clones",
				"The Phantom Menace",
				"Revenge of the Sith",
				"Return of the Jedi",
				"A New Hope",
			],
		},
		{
			name: "Luke Skywalker",
			affilition: "Jedi",
			height: "172",
			mass: "77",
			hair_color: "blond",
			lightsaber_color: "green",
			homeworld: "Tatooine",
			species: "Human",
			films: [
				"The Empire Strikes Back",
				"Revenge of the Sith",
				"Return of the Jedi",
				"A New Hope",
				"The Force Awakens",
			],
		},
		{
			name: "C-3PO",
			affilition: "Rebel Alliance",
			height: "167",
			mass: "75",
			hair_color: "n/a",
			lightsaber_color: "n/a",
			homeworld: "Tatooine",
			species: "Droid",
			films: [
				"The Empire Strikes Back",
				"Attack of the Clones",
				"The Phantom Menace",
				"Revenge of the Sith",
				"Return of the Jedi",
				"A New Hope",
			],
		},
		{
			name: "R2-D2",
			affilition: "Rebel Alliance",
			height: "96",
			mass: "32",
			hair_color: "n/a",
			lightsaber_color: "n/a",
			homeworld: "Naboo",
			species: "Droid",
			films: [
				"The Empire Strikes Back",
				"Attack of the Clones",
				"The Phantom Menace",
				"Revenge of the Sith",
				"Return of the Jedi",
				"A New Hope",
			],
		},
		{
			name: "Darth Vader",
			affilition: "Sith",
			height: "202",
			mass: "136",
			hair_color: "none",
			lightsaber_color: "red",
			homeworld: "Tatooine",
			species: "Human",
			films: [
				"The Empire Strikes Back",
				"Revenge of the Sith",
				"Return of the Jedi",
				"A New Hope",
			],
		},
		{
			name: "Leia Organa",
			height: "150",
			mass: "49",
			hair_color: "brown",
			lightsaber_color: "blue",
			homeworld: "Alderaan",
			species: "Human",
			films: [
				"The Empire Strikes Back",
				"Revenge of the Sith",
				"Return of the Jedi",
				"A New Hope",
				"The Force Awakens",
			],
		},
		{
			name: "Han Solo",
			affilition: "Rebel Alliance",
			height: "180",
			mass: "80",
			hair_color: "brown",
			lightsaber_color: "blue",
			homeworld: "Corellia",
			species: "Human",
			films: [
				"The Empire Strikes Back",
				"Revenge of the Sith",
				"Return of the Jedi",
				"A New Hope",
				"The Force Awakens",
			],
		},
		{
			name: "Yoda",
			affilition: "Jedi",
			height: "66",
			mass: "17",
			hair_color: "white",
			lightsaber_color: "green",
			homeworld: "unknown",
			species: "Yoda's species",
			films: [
				"The Empire Strikes Back",
				"Attack of the Clones",
				"The Phantom Menace",
				"Revenge of the Sith",
				"Return of the Jedi",
			],
		},
		{
			name: "Palpatine",
			affilition: "Sith",
			height: "170",
			mass: "75",
			hair_color: "grey",
			lightsaber_color: "red",
			homeworld: "Naboo",
			species: "Human",
			films: [
				"The Empire Strikes Back",
				"Attack of the Clones",
				"The Phantom Menace",
				"Revenge of the Sith",
				"Return of the Jedi",
			],
		},
	]);

	useEffect(() => {
		DisplayCharacterDetails();
	}, [currentCharacter]);

	function DisplayFilms(props) {
		if (currentCharacter === "") {
			return null;
		}
		return (
			<p>
				<strong>Films</strong>
				{props.curfilms.map((film) => (
					<li>{film}</li>
				))}
			</p>
		);
	}

	function DisplayCharacterDetails() {
		if (currentCharacter === "") {
			return <p>Please select a character</p>;
		} else {
			let cur = characters.find(
				(character) => character.name === currentCharacter
			);
			return (
				<div className="characterdisplay">
					<div className="character">
						<h2>{cur.name}</h2>
						<p>
							<strong>Height: </strong>
							{cur.height}
						</p>
						<p>
							<strong>Mass: </strong>
							{cur.mass}
						</p>
						<p>
							<strong>Hair Color: </strong>
							{cur.hair_color}
						</p>
						<p>
							<strong>Lightsaber Color: </strong>
							{cur.lightsaber_color}
						</p>
						<p>
							<strong>Homeworld: </strong>
							{cur.homeworld}
						</p>
						<p>
							<strong>Species: </strong>
							{cur.species}
						</p>
						<DisplayFilms curfilms={cur.films} />
					</div>
				</div>
			);
		}
	}

	return (
		<div className="App">
			<select onChange={(e) => setCurrentCharacter(e.target.value)}>
				<option value="">Select a character</option>
				{characters.map((character) => (
					<option value={character.name}>{character.name}</option>
				))}
			</select>

			<h1>Star Wars Characters</h1>
			<p>Click on a character to view their details.</p>
			<DisplayCharacterDetails />
		</div>
	);
}

export default App;
