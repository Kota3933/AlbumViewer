import Image from "next/image";
import styles from "./local.module.css";

export default function AlbumDetail({data}) {
	return (
		<main>
			<h1 className="text-5xl text-center font-bold p-3">{data.title}</h1>
			<Image src={data.imgSrc} alt="albumCover" width={350} height={350} className={styles.cover}/>
			<h2 className="text-2xl text-center p-1">アーティスト：{data.artist}</h2>
			<h2 className="text-2xl text-center p-1">発表年：{data.releaseYear}</h2>
			<p className="text-2xl text-center p-1">トラックリスト</p>
			<ol className="list-decimal list-inside p-1">
				{data.trackList.map((track, index) => <li key={index} className="text-center">{track}</li>)}
			</ol>
		</main>
	)
}