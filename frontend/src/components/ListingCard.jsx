/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingCard(props) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${props.listing._id}`}>
        <img
          src={props.listing.imageUrls[0]}
          alt="\img"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex flex-col gap-2 w-full">
          <p className="truncate text-lg font-semibold text-slate-700">
            {props.listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate w-full">
              {props.listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {props.listing.description}
          </p>
          <p className="text-slate-500 mt-2 font-semibold">
            &#8377;&nbsp;
            {props.listing.offer
              ? props.listing.offerPrice.toLocaleString("hi")
              : props.listing.price.toLocaleString("hi")}
            {props.listing.type === "rent" && " / month"}
          </p>
          <div className="text-slate-700 flex gap-4">
            <div className="font-semi\bold text-xs">
              {props.listing.bedrooms > 1
                ? `${props.listing.bedrooms} beds`
                : `${props.listing.bedrooms} bed`}
            </div>
            <div className="font-semi\bold text-xs">
              {props.listing.bathrooms > 1
                ? `${props.listing.bathrooms} baths`
                : `${props.listing.bathrooms} bed`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
