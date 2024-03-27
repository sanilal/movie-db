export default function Results({ results }) {
  return (
    <div id="products" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {
            results.map((result)=>(
                <div key={result.id}>
                    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">{result.original_language}</span>
                <h2 className="text-lg font-bold text-black truncate block capitalize">{result.original_title}</h2>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">{result.vote_average}</p>
                    <div>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">{result.vote_count}</p>
                    </div>
                    <div className="ml-auto w-fit">
                        <p>
                            {result.overview}
                        </p>
                    </div>
                </div>
            </div>
        </a>
    </div>
                </div>
            ))
        }
    </div>
  )
}
