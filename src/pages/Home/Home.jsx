import Banner from '../../components/Banner.jsx';
import Item from '../../components/Item.jsx';
import FeaturesItemData from '../../data/FeaturesItemData.json';
import Chat from '../../assets/icons/chat.webp';
import Money from '../../assets/icons/money.webp';
import Security from '../../assets/icons/security.webp';
import '../../sass/pages/_Home.scss';

function Home () {
    const imageData = {
        "chat.webp": Chat,
        "money.webp": Money,
        "security.webp": Security
    }

    return (
        <div className='homepage'>
            <main>
                <Banner />
                <section className="features">
                    {FeaturesItemData.map((data) => (
                        < Item 
                            key={data.id}
                            image={imageData[data.image]}
                            descriptionImage={data.descriptionImage}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </section>
            </main>
        </div>
    )
}

export default Home