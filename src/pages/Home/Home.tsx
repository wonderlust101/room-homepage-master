import Header from "@/components/Layout/Header";
import HomeAbout from "@/pages/Home/HomeAbout";
import HomeHero from "@/pages/Home/HomeHero";
import './Home.scss'

export default function Home() {
    return (
        <div>
            <Header/>

            <main className="home">
                <HomeHero/>
                <HomeAbout/>
            </main>
        </div>
    );
}