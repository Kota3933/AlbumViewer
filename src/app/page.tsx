'use client'
import useSWR from "swr";
import Album from "./Album";

const url = "/albumDataList.json";
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Home() {
	//アルバムデータ取得
	const {data:albums, error, isLoading} = useSWR(url, fetcher);
	if(!isLoading) console.log(albums);

	return (
		<main>
			<h1 className="title">Favorite Album Viewer</h1> 
			{isLoading
				?<p>読み込み中..</p>
				:albums.map(album => <Album key={album.id} data={album} />)}
		</main>
	)
}