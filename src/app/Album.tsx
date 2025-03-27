import Image from "next/image";
import Link from "next/link";

export default function Album({data}) {
	const {id, title, artist, imgSrc} = data;
	const url = "/album/" + id;
	return (
		<main className="p-3">
			{/* <h2 className="albumTitle">{title} - {artist}</h2> */}
			<Link className="albumTitle" href={url}>{title} - {artist}</Link>
			<Image alt="albumCover" src={imgSrc} width={200} height={200}/>
		</main>
	)
}