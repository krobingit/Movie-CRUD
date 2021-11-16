import React from 'react';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

export function LeaderBoard({XPoints,OPoints}) {
 /*
 const id = 100;
 const [Xpoints, setXpoints] = useState(null);
 const [Opoints,setOpoints]=useState(null)
 useEffect(() => {
  fetch(`https://6166c4da13aa1d00170a66f9.mockapi.io/points/${id}`, {
   method: "GET"
  }).then((res) => res.json()).then((data) => {
   setXpoints(data.XPoints)
   setOpoints(data.OPoints)
  })
 },[Xpoints,Opoints])*/
  return (
    <div className="LeaderBoard">
      <h2 className="leadertext"><LeaderboardIcon style={{ fontSize: "3rem", marginRight: "1rem" }} />LeaderBoard</h2>
      <div>
        <table>
          <tr>
            <td style={{ color: "green" }}>X</td>
            <td style={{ color: "red" }}>O</td>
          </tr>
          <tr>
       <td style={{ color: "green" }}>{XPoints}</td>
       <td style={{ color: "red" }}>{OPoints}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
