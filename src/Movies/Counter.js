import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
function Counter() {
 const [like, setLike] = useState(0);

 const [dislike, setDislike] = useState(0);
 return (
  <div>

   <IconButton className="btn" color="primary" onClick={() => {
    setLike(like + 1);
   }} aria-label="Likes"><Badge className="badge" badgeContent={like} color="primary">👍
</Badge>
   </IconButton>

   <IconButton className="btn" color="error" onClick={() => {
    setDislike(dislike + 1);
   }} aria-label="Dislikes"><Badge badgeContent={dislike} className="badge" color="error">👎
</Badge>
   </IconButton>

  </div>
 );

}
export { Counter }