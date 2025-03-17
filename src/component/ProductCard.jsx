import { Link } from "react-router";

export default function ProductCard({ item }) {
  return (
    <div className="min-w-[180px] lg:min-w-[220] mb-4 group ">
      <Link to={`/product/${item.id}`}>
        <div className="bg-white w-full rounded-lg transition-transform duration-300 group-hover:shodow-md group-hover:translate-y-1 border border-zinc-200">
          <img
            src={item.images[0]}
            className="mx-auto h-[200px] py-6 object-contain w-full"
          />
        </div>
        <div className="py-4">
          <h3 className="text-sm font-medium line-clamp-2 mb-2">{item.title}</h3>
          <p className="text-lg font-bold">${item.price}</p>
        </div>
      </Link>
    </div>
  );
}
