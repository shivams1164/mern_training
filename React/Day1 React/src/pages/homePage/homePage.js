import Navbar from "../common/navbar"

const HomePage = (props) =>{
    const {userPoint, setUserPoints}= props;
    return (
        <div >
            <Navbar page="home" userPoint={userPoint} setUserPoints={setUserPoints}/>
            <div className="home-main-container">coming soon</div>
        </div>
    )
}

export default HomePage