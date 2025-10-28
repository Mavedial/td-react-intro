import {useState, useEffect} from 'react';
import {superHeros} from "./superHeros";
import superHeroData from "./superHeros.json";

export const App=()=>    {
    const [heros,setHeros] = useState<superHeros[]>([]);
    const [filter, setFilter] = useState("");
    const nom ="Toto";
    const [compteur,setCompteur] = useState(0);

    useEffect(() => {
        const heroesFromData = superHeroData.map(
            (heroData: any) => new superHeros(heroData.id, heroData.name, heroData.description)
        );
        setHeros(heroesFromData);

        document.title = `Vous avez cliqué ${compteur} fois.`;
    },[compteur]);

    const filteredHeros = heros.filter(hero =>
        hero.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
    <h1>Bonjour {nom}, je découvre React !</h1>
            <p>Vous avez cliqué {compteur} fois.</p>
            <button onClick={()=> setCompteur(compteur+1)}>Cliquer </button>
            <button onClick={()=> setCompteur(0)}>Réinitialiser</button>
            <h1>Super Hero</h1>
            <p>Il y a {heros.length} super-héros dans la base.</p>

            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />

            <ul>
                {filteredHeros.map((hero: superHeros) => (
                    <li key={hero.id}>{hero.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default App;