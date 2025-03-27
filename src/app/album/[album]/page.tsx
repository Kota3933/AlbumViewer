'use client';
import { use } from "react";

import useSWR from "swr";
import AlbumDetail from "./AlbumDetail";

const url = "/albumDataList.json";
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Album(props:{params: Promise<{album: number}>}) {
    const params = use(props.params);
    const {data, isLoading} = useSWR(url, fetcher);
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