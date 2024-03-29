import Link from 'next/link'
import Image from 'next/image'
import {FiThumbsUp} from  "react-icons/fi";
export default function Card({result}) {
  return (
    <div className='group'>
        <div className=" bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link href={`/movie/${result.id}`}>
            <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
            width={500}
            height={300}
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl group-hover:opacity-60 transition-opacity duration-300" ></Image>

            <div className="px-4 py-3 w-72 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 transition-shadow duration-200">
                <span className="text-gray-400 mr-3 uppercase text-xs">{result.original_language}</span>
                <h2 className="text-lg font-bold text-black truncate block capitalize">{result.title || result.name}</h2>
                <div className="flex flex-col items-start justify-items-center">
                    <div className="flex flex-row justify-between">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">{result.vote_average}</p>
                    <p className="text-sm text-gray-600 cursor-auto ml-2 my-3">{result.vote_count}</p>
                    </div>
                    <div className="ml-auto w-fit">
                        <p className="text-gray-600 line-clamp-2 text-md">
                            {result.overview}
                        </p>
                        <p>{result.release_date || result.first_air_date}
                        <FiThumbsUp />
                        {result.vote_count}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    </div>
    </div>
  )
}
