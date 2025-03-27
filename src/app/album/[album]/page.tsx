'use client'

import useSWR from "swr";
import AlbumDetail from "./AlbumDetail";

const url = "/albumDataList.json";
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Album({params}:{params: {album: number}}) {
	const {data, error, isLoading} = useSWR(url, fetcher);
	let albumData = null;
	if(!isLoading) {
		albumData = data[params.album];
		console.log(albumData);
	}
	return (
		<main>
			{isLoading
				? <p>読み込み中。。。</p>
				: <AlbumDetail data={albumData} />
			}
		</main>
	)
}