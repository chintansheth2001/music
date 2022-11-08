import * as React from 'react';
import { Link } from "react-router-dom";


export interface ILeftnavProps {
}

export default function Leftnav(props: ILeftnavProps) {
  return (
    <nav className="flex-column">
      <dl>
        <dd><Link to="/">Home</Link></dd>
        <dd><Link to="/search">Search</Link></dd>
        <dd><Link to="/favourites">Favourites</Link></dd>
        <dd><Link to="/Playlists">Playlist</Link></dd>
      </dl>
    </nav>
  );
}
