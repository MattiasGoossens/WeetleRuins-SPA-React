
const players = []

let status = null

let loadingplayers = true;

async function getPlayers () {
    loadingplayers = true;
    const statusResponse = await fetch("https://api.mcsrvstat.us/2/155.94.210.195:25587")
    const statusResult = await statusResponse.json();
    status = statusResult;

    for (const name of statusResult.players.list) {
        const playericon = "https://minotar.net/avatar/" + status.players.uuid[name]
        players.push(
            <img alt={name} src={playericon} />
        );
    }
    console.log(players)
}

getPlayers()

function Status (props) {
    return (
        <div>{players}</div>
    );
}

export default Status;